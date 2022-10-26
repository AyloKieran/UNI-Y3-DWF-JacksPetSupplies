import { formatPrice } from "../../Utilities";

function ProductsItem(props) {
  return (
    <div className="flex p-2 dark:bg-gray-700 rounded-lg">
      <img className="aspect-square mr-4 rounded-lg max-w-[100px]" src={props.image} />
      <div className="flex flex-col w-full mr-1">
        <h2 className="flex-grow font-semibold">{props.title}</h2>
        <h3 className="ml-auto dark:text-gray-300 font-semibold text-sm">{formatPrice(props.price)}</h3>
      </div>
    </div>
  )
}

export default ProductsItem