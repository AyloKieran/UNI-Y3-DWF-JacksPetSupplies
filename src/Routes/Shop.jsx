import { useEffect } from "react";
import { generatePageTitle } from "../Utilities";

function Shop() {
  
    useEffect(() => {
      document.title = generatePageTitle("Shop");
    });

    return (
     <h2>Shop</h2>
   )
 }
 
 export default Shop