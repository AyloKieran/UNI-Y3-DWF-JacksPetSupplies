// import NavLink from "./NavLink";

const LINKS = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "Shop",
        url: "/shop"
    }
]

function Navigation() {
    return (
        <div>
            {LINKS.map((link, index) => {
                return (
                    <NavLink to={link.url} title={link.title} key={index} />
                )
            })}
        </div>
    )
}

export default Navigation