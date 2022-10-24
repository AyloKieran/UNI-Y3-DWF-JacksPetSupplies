import { useEffect, useState } from "react";
import { generatePageTitle } from "../Utilities";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping, faBars, faCat, faSearch, faHome, faClose, faArrowRight, faStethoscope, faShieldDog, faPaw, faTruckRampBox, faBasketShopping, faChevronRight, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

function Home() {

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.title = generatePageTitle("Home");
  });

  function _toggleNav() {
    setModalOpen(!modalOpen);
  }

  useEffect(() => {
    let modalNav = document.getElementById("nav");

    let navListener = modalNav.addEventListener("click", _toggleNav);

    return () => {
      modalNav.removeEventListener(modalNav, navListener);
    }
  });

  return (
    <div className="flex flex-col min-h-screen max-w-screen overflow-x-hidden dark:bg-gray-900 dark:text-white">
      <header className="md:hidden bg-jack text-white flex flex-col">
        <div className="p-2 grid grid-cols-3 text-2xl pb-0">
          <button className="flex justify-start my-auto" onClick={() => { _toggleNav(); }}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="flex justify-center tracking-wider font-black text-md">
            J<FontAwesomeIcon icon={faCat} />CK'S
          </div>
          <div className="flex justify-end gap-4 my-auto">
            <FontAwesomeIcon icon={faCartShopping} />
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
        <div className="p-2">
          <div className="flex flex-grow bg-white rounded text-gray-600 p-2 px-3 justify-between">
            Search
            <FontAwesomeIcon icon={faSearch} className="my-auto text-jack" />
          </div>
        </div>

        <div className={`absolute top-0 left-0 right-0 bottom-0 bg-black/30 backdrop-blur-sm flex-col flex transition-all ${modalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} id="nav">
          <div className="h-[45px] flex p-2">
            <div className="aspect-square bg-jackLight flex p-2 justify-center items-center rounded" onClick={() => { setModalOpen(false); }}>
              <FontAwesomeIcon icon={faClose} className="text-2xl" />
            </div>
          </div>
          <div className="bg-white text-black flex flex-col">
            {["Home", "Shop", "Adoption"].map((elementInArray, index) => (
              <a href='#' className="flex justify-between p-4 border-b-2 hover:bg-gray-100" key={index}>
                <div className="flex gap-4 my-auto">
                  <FontAwesomeIcon icon={faHome} className="text-jackLight my-auto" />
                  <span className="font-semibold">{elementInArray}</span>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="text-gray-500 my-auto" />
              </a>
            )
            )}
          </div>
        </div>

      </header>
      <header className="hidden md:flex bg-jack text-white gap-4 p-2 px-4">
        <div className="flex justify-start tracking-wider font-black text-2xl my-auto">
          J<FontAwesomeIcon icon={faCat} />CK'S
        </div>
        <div className="flex-grow flex border-l-2 border-jackLight/60 text-gray-100">
          {["Home", "Shop", "Adoption"].map((elementInArray, index) => (
            <a href="#" className="-my-2 px-4 flex justify-center items-center gap-2 hover:bg-jackLight hover:text-white rounded" key={index}>
              <FontAwesomeIcon icon={faHome} />
              <span className="font-semibold">{elementInArray}</span>
            </a>
          )
          )}
        </div>
        <div className="flex justify-end gap-4 my-auto">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </header>
      <main className="flex-grow flex flex-col gap-12 mb-4 p-4 max-w-4xl mx-auto">
        <section className="aspect-[6/2] bg-gray-400 -m-4 -mb-8">
          Carousel
        </section>
        <section className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h2 className="font-semibold text-xl">Your Furry Friend's Favourites 🥩</h2>
            <h3 className="text-sm text-gray-500 dark:text-gray-300">Your little one will love our range of high quality treats and toys at Jack's</h3>
          </div>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
            {["", "", "", "", "", "", "", "", "", "", ""].map((elementInArray, index) => (
              <a href="#" className="group flex flex-col w-full gap-2" key={index}>
                <img className="rounded-full flex justify-center items-center aspect-square bg-gray-100 dark:bg-gray-700"
                  src="https://cms-www.chewy.com/contentAsset/image/293e5661-b5c1-45a2-ba0a-239294914d68/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/222/resize_h/222/362466-Pedigree-Dog-Food.jpg"></img>
                <p className="mx-auto group-hover:underline">Dog Food</p>
              </a>
            )
            )}
            <a href="#" className="group flex flex-col w-full gap-2">
              <div className="rounded-full flex justify-center items-center aspect-square bg-gray-100 dark:bg-gray-700">
                <FontAwesomeIcon icon={faArrowRight} className="text-xl group-hover:text-3xl transition-all" />
              </div>
              <p className="mx-auto group-hover:underline">More Products</p>
            </a>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h2 className="font-semibold text-xl">Take me home too? 🦴</h2>
            <h3 className="text-sm text-gray-500 dark:text-gray-300">Sherlock Rescue have a range of beautiful pawed creatures waiting for their forever home</h3>
          </div>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
            {["Fluffy", "Dexter", "Spark", "Tilly", "Dave"].map((elementInArray, index) => (
              <a href="#" className="group flex flex-col w-full gap-2 bg-gray-100 dark:bg-gray-700 rounded-xl p-2" key={index}>
                <img className="rounded-xl aspect-square object-cover bg-gray-200"
                  src="https://cms-www.chewy.com/contentAsset/image/5d711871-420a-4a49-8523-cfdd1da16389/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/222/resize_h/222/PET-TILES-Deal-FlagsDog-2x.jpg"></img>
                <div className="flex flex-col text-center">
                  <p className="font-semibold group-hover:underline">{elementInArray}</p>
                  <p className="text-sm">5 months old</p>
                </div>
              </a>
            )
            )}
            <a href="#" className="group flex flex-col w-full gap-2 bg-gray-100 dark:bg-gray-700 rounded-xl p-2">
              <div className="rounded-xl flex justify-center items-center aspect-square bg-gray-200 dark:bg-gray-500">
                <FontAwesomeIcon icon={faArrowRight} className="text-xl group-hover:text-3xl transition-all" />
              </div>
              <div className="flex flex-col text-center">
                <p className="font-semibold group-hover:underline">176 More Pups</p>
                <p className="text-sm">awaiting adoption</p>
              </div>
            </a>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-semibold text-xl">Did you know? 🙋‍♀️</h2>
          <div className="group grid grid-cols-1 gap-4">
            {["Taking your dog for a walk is good for them, with some more text to make it wrap onto another line or two", "ANOTHER ONE HERE", "AND MAYBE ANOTHER ONE"].map((elementInArray, index) => (
              <div className="flex bg-gray-100 dark:bg-gray-700 rounded-xl p-4 justify-center align-middle md:max-w-[500px] md:min-w-[250px] md:[&:nth-child(2n-1)]:mr-auto md:[&:nth-child(2n)]:ml-auto" key={index}>
                <div className="flex text-center">
                  <FontAwesomeIcon icon={faQuoteLeft} className="font-black pr-4 rotate-[-3deg] text-jack dark:text-jackLight mb-auto" />
                  {elementInArray}
                  <FontAwesomeIcon icon={faQuoteRight} className="font-black pl-4 rotate-[3deg] text-jack dark:text-jackLight mt-auto" />
                </div>
              </div>
            )
            )}
          </div>
        </section>

        <section className="bg-jack/30 -m-4 -my-4 flex justify-center align-middle p-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mx-auto">Join the pack 🐺</h3>
              <p className="text-sm">Sign up today and receive a discount voucher to use in the shop!</p>
            </div>
            <div className="flex justify-center">
              <button className="bg-jack hover:bg-jackLight text-white font-bold p-2 px-6 rounded-full text-center hover:underline">Sign Up</button>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-semibold text-xl">What we do ✏️</h2>
          <div className="flex flex-wrap justify-center gap-4 md:flex-nowrap">
            <a href="#" className="group flex flex-col w-full gap-2 max-w-[30%]">
              <div className="rounded-full flex justify-center items-center aspect-square bg-jack/10 dark:bg-gray-800">
                <FontAwesomeIcon icon={faStethoscope} className="text-4xl text-jack dark:text-white group-hover:text-5xl transition-all" />
              </div>
              <p className="mx-auto group-hover:underline">Vet Advice</p>
            </a>
            <a href="#" className="group flex flex-col w-full gap-2 max-w-[30%]">
              <div className="rounded-full flex justify-center items-center aspect-square bg-jack/10 dark:bg-gray-800">
                <FontAwesomeIcon icon={faShieldDog} className="text-4xl text-jack dark:text-white group-hover:text-5xl transition-all" />
              </div>
              <p className="mx-auto group-hover:underline">Pup Adoption</p>
            </a>
            <a href="#" className="group flex flex-col w-full gap-2 max-w-[30%]">
              <div className="rounded-full flex justify-center items-center aspect-square bg-jack/10 dark:bg-gray-800">
                <FontAwesomeIcon icon={faPaw} className="text-4xl text-jack dark:text-white group-hover:text-5xl transition-all" />
              </div>
              <p className="mx-auto group-hover:underline">Pet Advice</p>
            </a>
            <a href="#" className="group flex flex-col w-full gap-2 max-w-[30%]">
              <div className="rounded-full flex justify-center items-center aspect-square bg-jack/10 dark:bg-gray-800">
                <FontAwesomeIcon icon={faTruckRampBox} className="text-4xl text-jack dark:text-white group-hover:text-5xl transition-all" />
              </div>
              <p className="mx-auto group-hover:underline">Free Delivery</p>
            </a>
            <a href="#" className="group flex flex-col w-full gap-2 max-w-[30%]">
              <div className="rounded-full flex justify-center items-center aspect-square bg-jack/10 dark:bg-gray-800">
                <FontAwesomeIcon icon={faBasketShopping} className="text-4xl text-jack dark:text-white group-hover:text-5xl transition-all" />
              </div>
              <p className="mx-auto group-hover:underline">Shop Products</p>
            </a>
          </div>
        </section>

      </main>
      <footer className="flex flex-col text-sm">
        <div className="bg-jack p-8 flex flex-col text-white text-center gap-2">
          <h3 className="text-lg font-bold mx-auto">Need help? ☎️</h3>
          <p className="text-sm">
            Give us a call on <a href="#" className="font-semibold hover:underline">0121 506 4856</a> or e-mail us at <a href="#" className="font-semibold hover:underline">help@jacks.co.uk</a>
          </p>
        </div>
        <div className="flex flex-col text-gray-600 dark:text-gray-400 text-center p-4 gap-2">
          <p>Copyright ©️ 2022 - Jack's Pet Supplies</p>
          <p className="text-xs">
            <a href="#" className="hover:underline">Terms</a> | <a href="#" className="hover:underline">Privacy</a> | <a href="#" className="hover:underline">Accessibility</a></p>
        </div>
      </footer>
    </div>
  )
}

export default Home