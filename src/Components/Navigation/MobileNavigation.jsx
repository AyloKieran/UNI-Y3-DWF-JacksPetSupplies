import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Auth } from "./";
import { auth } from "../../FirebaseAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShopLock, faCartShopping, faCat, faSearch, faHome, faBars, faClose, faChevronRight, faShop, faShieldDog } from '@fortawesome/free-solid-svg-icons';

function MobileNavigation() {

    const [modalOpen, setModalOpen] = useState(false);
    const [user, loading] = useAuthState(auth);

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
        <div className="md:hidden bg-jack text-white flex flex-col">
            <div className="p-2 grid grid-cols-3 text-2xl pb-0">
                <button className="flex justify-start my-auto" onClick={() => { _toggleNav(); }}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className="flex justify-center tracking-wider font-black text-md">
                    J<FontAwesomeIcon icon={faCat} />CK'S
                </div>
                <div className="flex justify-end gap-4 my-auto">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <Auth />
                </div>
            </div>
            <div className="p-2">
                <div className="flex flex-grow bg-white rounded text-gray-600 p-2 px-3 justify-between">
                    Search
                    <FontAwesomeIcon icon={faSearch} className="my-auto text-jack" />
                </div>
            </div>

            <div className={`absolute top-0 left-0 right-0 bottom-0 flex-col flex transition-all z-10 ${modalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} id="nav">
                <div className="h-[45px] flex p-2">
                    <div className="aspect-square bg-jack-light flex p-2 justify-center items-center rounded" onClick={() => { setModalOpen(false); }}>
                        <FontAwesomeIcon icon={faClose} className="text-2xl" />
                    </div>
                </div>
                <div className="bg-white text-black flex flex-col">
                    <Link to="/" className="flex justify-between p-4 border-b-2 hover:bg-gray-100">
                        <div className="flex gap-4 my-auto">
                            <FontAwesomeIcon icon={faHome} className="text-jack-light my-auto" />
                            <span className="font-semibold">Home</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="text-gray-500 my-auto" />
                    </Link>
                    <Link to="/shop" className="flex justify-between p-4 border-b-2 hover:bg-gray-100">
                        <div className="flex gap-4 my-auto">
                            <FontAwesomeIcon icon={faShop} className="text-jack-light my-auto" />
                            <span className="font-semibold">Shop</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="text-gray-500 my-auto" />
                    </Link>
                    <Link to="/adoption" className="flex justify-between p-4 border-b-2 hover:bg-gray-100">
                        <div className="flex gap-4 my-auto">
                            <FontAwesomeIcon icon={faShieldDog} className="text-jack-light my-auto" />
                            <span className="font-semibold">Adoption</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="text-gray-500 my-auto" />
                    </Link>
                    {!loading && user &&
                        <Link to="/secure" className="flex justify-between p-4 border-b-2 hover:bg-gray-100">
                            <div className="flex gap-4 my-auto">
                                <FontAwesomeIcon icon={faShopLock} className="text-jack-light my-auto" />
                                <span className="font-semibold">Member's Area</span>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="text-gray-500 my-auto" />
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default MobileNavigation