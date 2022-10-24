import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ServicesItem(props) {

  return (
    <Link to={props.link} className="group flex flex-col w-full gap-2 max-w-[30%]">
      <div className="rounded-full flex justify-center items-center aspect-square bg-jack/10 dark:bg-gray-800">
        <FontAwesomeIcon icon={props.icon} className="text-4xl text-jack dark:text-white group-hover:text-5xl transition-all" />
      </div>
      <p className="mx-auto group-hover:underline">{props.title}</p>
    </Link>
  )
}

export default ServicesItem