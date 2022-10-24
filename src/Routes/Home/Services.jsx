import { faStethoscope, faShieldDog, faPaw, faTruckRampBox, faBasketShopping } from '@fortawesome/free-solid-svg-icons'

import ServicesItem from "./ServicesItem";

function Services() {

  return (
    <div className="flex flex-wrap justify-center gap-4 md:flex-nowrap">
      <ServicesItem title="Vet Advice" icon={faStethoscope} link="#" />
      <ServicesItem title="Pup Adoption" icon={faShieldDog} link="/adoption" />
      <ServicesItem title="Pet Advice" icon={faPaw} link="#" />
      <ServicesItem title="Free Delivery" icon={faTruckRampBox} link="#" />
      <ServicesItem title="Shop Products" icon={faBasketShopping} link="/shop" />
    </div>
  )
}

export default Services