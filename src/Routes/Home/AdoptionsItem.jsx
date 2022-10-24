import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function AdoptionsItem(props) {

  return (
    <Link to={props.link} className="group flex flex-col w-full gap-2 bg-gray-100 dark:bg-gray-700 rounded-xl p-2">
      {props.image &&
        <img className="rounded-xl aspect-square object-cover bg-gray-200" src={props.image}></img>
      }
      {!props.image &&
        <div className="rounded-xl flex justify-center items-center aspect-square bg-gray-200 dark:bg-gray-500">
          <FontAwesomeIcon icon={faArrowRight} className="text-xl group-hover:text-3xl transition-all" />
        </div>
      }
      <div className="flex flex-col text-center">
        <p className="font-semibold group-hover:underline">{props.name}</p>
        <p className="text-sm">{props.age}</p>
      </div>
    </Link>
  )
}

export default AdoptionsItem