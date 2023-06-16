import { useContext, useState } from "react"
import CartContext from "../../Context/CartContext"
import { getDocs, query, where, Timestamp, addDoc, collection, documentId, writeBatch } from "firebase/firestore"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { db } from '../../services/firebase/firebaseConfig'


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [ orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email}) => {
        setLoading(true)

        try {
            const orderTotal = total()
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: orderTotal,
                date: Timestamp.fromDate(new Date())
                //datee: new Date().toISOString()
            }

            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stockDb
                
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            });

            if(outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                //const orderID = orderAdded.id;

                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.error('hay productos que estan fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Se esta genrando su orden...</h1>
    }

    if(orderId){
        return <h1>El id de us orden es: {orderId}</h1>
    }
    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
  )
}

export default Checkout
