import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams() 

    useEffect(() => {
      setLoading(true)

      const collectionRef = categoryId
        ? query(collection(db, 'Items'), where('categoriaId', '==', categoryId))
        : collection(db, 'Items')
      //console.log(collectionRef)

      getDocs(collectionRef)
        .then(response => {
          //console.log(response)
          const productsAdapted = response.docs.map(doc => {
            const data = doc.data()
            return { id: doc.id, ...data }
          })
          setProducts(productsAdapted)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() =>{
          setLoading(false)
        })
    }, [categoryId])
  return (
    <div className="greeting">
      <h1>{greeting}</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer
