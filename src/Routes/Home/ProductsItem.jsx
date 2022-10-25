import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function ProductsItem(props) {

  return (
    <Link to={props.link} className="group flex flex-col w-full gap-2">
      {props.image &&
        <img className="rounded-full flex justify-center items-center aspect-square bg-gray-100 dark:bg-gray-700"
          src={props.image}></img>}
      {!props.image &&
        <div className="rounded-full flex justify-center items-center aspect-square bg-gray-100 dark:bg-gray-700">
          <FontAwesomeIcon icon={faArrowRight} className="text-xl group-hover:text-3xl transition-all" />
        </div>
      }
      <p className="text-center group-hover:underline line-clamp-2 text-sm">{props.title}</p>
    </Link>
  )
}

export default ProductsItem