import { useEffect } from "react";
import { generatePageTitle } from "../Utilities";

function Home() {

    useEffect(() => {
      document.title = generatePageTitle("Home");
    });

    return (
     <h2>Home</h2>
   )
 }
 
 export default Home