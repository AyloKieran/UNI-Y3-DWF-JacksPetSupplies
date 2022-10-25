import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

function TipsItem(props) {

  return (
    <div className="quote">
      <div className="flex text-center">
        <FontAwesomeIcon icon={faQuoteLeft} className="font-black pr-4 rotate-[-3deg] text-jack dark:text-jackLight mb-auto" />
        {props.tip}
        <FontAwesomeIcon icon={faQuoteRight} className="font-black pl-4 rotate-[3deg] text-jack dark:text-jackLight mt-auto" />
      </div>
    </div>
  )
}

export default TipsItem