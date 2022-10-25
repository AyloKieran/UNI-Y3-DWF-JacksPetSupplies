import { getAdoptions } from '../../Data/Adoptions';
import { AdoptionsItem } from './';

function Adoptions() {
  let _NumberOfAnimals = 5,
    _AnimalsToList = Array.from(getAdoptions()).slice(0, _NumberOfAnimals);

  return (
    <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
      {_AnimalsToList.map((animal, index) => (
        <AdoptionsItem name={animal.name} age={animal.age} image={animal.image} key={index} />
      )
      )}
      <AdoptionsItem name="173 More Pups" age="need adopting" link="/adoption"></AdoptionsItem>
    </div>
  )
}

export default Adoptions