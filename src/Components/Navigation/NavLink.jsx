import { Link } from "react-router-dom";

function NavLink(props) {
    return (
        <Link to={props.to}>{props.title}</Link>
   )
 }
 
 export default NavLink