import Item from '../Item/Item'
import "./ItemList.css";

const ItemList = ({products}) => {
  return (
    <div className="item-list">
      <div className="tienda">
        {products.map(prod => <Item key={prod.id} {...prod} />)}
      </div>
    </div>
  )
}

export default ItemList
