import { getProducts } from '../../Data/Products';
import { ProductsItem } from './';

function Products() {
  let _ProductsToList = Array.from(getProducts());

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
      {_ProductsToList.map((item, index) => (
        <ProductsItem title={item.title} image={item.image} price={item.price} key={index} />
      )
      )}
    </div>
  )
}

export default Products