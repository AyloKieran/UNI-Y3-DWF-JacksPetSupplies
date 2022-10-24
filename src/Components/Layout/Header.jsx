import DesktopNavigation from "../Navigation/DesktopNavigation";
import MobileNavigation from "../Navigation/MobileNavigation";

function Header() {

    return (
        <header>
            <MobileNavigation />
            <DesktopNavigation />
        </header>
    )
}

export default Header