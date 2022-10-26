import { getAdoptions } from '../../Data/Adoptions';
import { AdoptionsItem } from './';

function Adoptions() {
  let _AnimalsToList = Array.from(getAdoptions());

  return (
    <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
      {_AnimalsToList.map((animal, index) => (
        <AdoptionsItem name={animal.name} age={animal.age} image={animal.image} key={index} />
      )
      )}
    </div>
  )
}

export default Adoptions