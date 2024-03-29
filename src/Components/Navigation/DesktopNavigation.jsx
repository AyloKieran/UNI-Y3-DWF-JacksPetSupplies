import { Link } from "react-router-dom";
import { useFirebaseAuth } from "../../FirebaseAuth";
import { Auth } from "./";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShopLock, faCartShopping, faCat, faSearch, faHome, faShop, faShieldDog } from '@fortawesome/free-solid-svg-icons';

function DesktopNavigation() {
    const [isAuthenticated] = useFirebaseAuth();

    return (
        <div className="hidden md:flex bg-jack text-white gap-4 p-2 px-4">
            <Link to="/" className="flex justify-start tracking-wider font-black text-2xl my-auto">
                J<FontAwesomeIcon icon={faCat} />CK'S
            </Link>
            <div className="flex-grow flex border-l-2 border-jack-light/60 text-gray-100">
                <Link to="/" className="-my-2 px-4 flex justify-center items-center gap-2 hover:bg-jack-light hover:text-white rounded">
                    <FontAwesomeIcon icon={faHome} />
                    <span className="font-semibold">Home</span>
                </Link>
                <Link to="/shop" className="-my-2 px-4 flex justify-center items-center gap-2 hover:bg-jack-light hover:text-white rounded">
                    <FontAwesomeIcon icon={faShop} />
                    <span className="font-semibold">Shop</span>
                </Link>
                <Link to="/adoption" className="-my-2 px-4 flex justify-center items-center gap-2 hover:bg-jack-light hover:text-white rounded">
                    <FontAwesomeIcon icon={faShieldDog} />
                    <span className="font-semibold">Adoption</span>
                </Link>
                {isAuthenticated &&
                    <Link to="/members-area" className="-my-2 px-4 flex justify-center items-center gap-2 hover:bg-jack-light hover:text-white rounded">
                        <FontAwesomeIcon icon={faShopLock} />
                        <span className="font-semibold">Member's Area</span>
                    </Link>
                }
            </div>
            <div className="flex justify-end gap-4 my-auto">
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon={faCartShopping} />
                <Auth />
            </div>
        </div>
    )
}

export default DesktopNavigation