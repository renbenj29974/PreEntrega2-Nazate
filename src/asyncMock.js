
const products = [
    { id: '1', name: 'Talla 25', price: 55, category: '1', img: './images/amarillo.png', stock: 25, description: 'Talla 25 bueno bonito y barato'},
    { id: '2', name: 'Talla 30', price: 60, category: '1', img: './images/azul.png', stock: 20, description: 'Talla 30 bueno bonito y barato'},
    { id: '3', name: 'Talla 35', price: 65, category: '1', img: './images/negro.png', stock: 10, description: 'Talla 35 bueno bonito y barato'},    
    { id: '4', name: 'Talla 40', price: 75, category: '2', img: './images/verde.png', stock: 10, description: 'Talla 40 bueno bonito y barato'}
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(()=>{
        resolve(products)
    }, 500)

  })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(()=>{
        resolve(products.find(prod => prod.id === productId))
      }, 500)
    })
}

export const getProductByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === productCategory))
    }, 500)
  })
}

