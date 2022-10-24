import ProductsItem from './ProductsItem'

import dogfood from '../../assets/dogfood.webp'

function Products() {

  return (
    <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
      {["", "", "", "", "", "", "", "", "", "", "",].map((elementInArray, index) => (
        // TO DO: Load dynamically
        <ProductsItem title="Dog Food" image={dogfood} key={index} />
      )
      )}
      <ProductsItem link="/shop" title="More Products" />
    </div>
  )
}

export default Products