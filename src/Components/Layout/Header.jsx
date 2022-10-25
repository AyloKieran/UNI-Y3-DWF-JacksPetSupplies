import { MobileNavigation, DesktopNavigation } from "../Navigation";

function Header() {

    return (
        <header className="sticky top-0 z-20">
            <MobileNavigation />
            <DesktopNavigation />
        </header>
    )
}

export default Header