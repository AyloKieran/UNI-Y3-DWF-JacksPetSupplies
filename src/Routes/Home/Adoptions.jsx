import AdoptionsItem from './AdoptionsItem';

import dog from '../../assets/dog.webp'

function Adoptions() {

  return (
    <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
      {["Fluffy", "Dexter", "Spark", "Tilly", "Dave"].map((elementInArray, index) => (
        <AdoptionsItem name={elementInArray} age={`${index + 1} months old`} image={dog} key={index} />
      )
      )}
      <AdoptionsItem name="173 More Pups" age="need adopting" link="/adoption"></AdoptionsItem>
    </div>
  )
}

export default Adoptions