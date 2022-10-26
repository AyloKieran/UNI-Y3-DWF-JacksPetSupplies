import { getProducts } from '../../Data/Products';
import { ProductsItem } from './';

function Products() {
  let _NumberOfProducts = 11,
    _ProductsToList = Array.from(getProducts())
      .sort((a, b) => 0.5 - Math.random())
      .slice(0, _NumberOfProducts);

  return (
    <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
      {_ProductsToList.map((item, index) => (
        <ProductsItem title={item.title} image={item.image} key={index} />
      )
      )}
      <ProductsItem link="/shop" title="More Products" />
    </div>
  )
}

export default Products