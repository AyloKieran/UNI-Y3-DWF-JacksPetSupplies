import TipsJSON from "../../Data/Tips.json";
import TipsItem from './TipsItem';

function Tips() {

  return (
    <div className="group grid grid-cols-1 gap-4">
      {TipsJSON.map((elementInArray, index) => (
        <TipsItem tip={elementInArray} key={index} />
      )
      )}
    </div>
  )
}

export default Tips