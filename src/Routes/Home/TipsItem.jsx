import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

function TipsItem(props) {

  return (
    <div className="flex bg-gray-100 dark:bg-gray-700 rounded-xl p-4 justify-center align-middle md:max-w-[500px] md:min-w-[250px] md:[&:nth-child(2n-1)]:mr-auto md:[&:nth-child(2n)]:ml-auto">
      <div className="flex text-center">
        <FontAwesomeIcon icon={faQuoteLeft} className="font-black pr-4 rotate-[-3deg] text-jack dark:text-jackLight mb-auto" />
        {props.tip}
        <FontAwesomeIcon icon={faQuoteRight} className="font-black pl-4 rotate-[3deg] text-jack dark:text-jackLight mt-auto" />
      </div>
    </div>
  )
}

export default TipsItem