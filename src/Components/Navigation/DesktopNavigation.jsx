import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faCat, faSearch, faHome, faShop, faShieldDog } from '@fortawesome/free-solid-svg-icons';

function DesktopNavigation() {
    return (
        <div className="hidden md:flex bg-jack text-white gap-4 p-2 px-4">
            <div className="flex justify-start tracking-wider font-black text-2xl my-auto">
                J<FontAwesomeIcon icon={faCat} />CK'S
            </div>
            <div className="flex-grow flex border-l-2 border-jackLight/60 text-gray-100">
                <Link to="/" className="-my-2 px-4 flex justify-center items-center gap-2 hover:bg-jackLight hover:text-white rounded">
                    <FontAwesomeIcon icon={faHome} />
                    <span className="font-semibold">Home</span>
                </Link>
                <Link to="/shop" className="-my-2 px-4 flex justify-center items-center gap-2 hover:bg-jackLight hover:text-white rounded">
                    <FontAwesomeIcon icon={faShop} />
                    <span className="font-semibold">Shop</span>
                </Link>
                <Link to="/adoption" className="-my-2 px-4 flex justify-center items-center gap-2 hover:bg-jackLight hover:text-white rounded">
                    <FontAwesomeIcon icon={faShieldDog} />
                    <span className="font-semibold">Adoption</span>
                </Link>
            </div>
            <div className="flex justify-end gap-4 my-auto">
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon={faCartShopping} />
                <FontAwesomeIcon icon={faUser} />
            </div>
        </div>
    )
}

export default DesktopNavigation