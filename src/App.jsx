import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation";
import Home from "./Routes/Home";
import Shop from "./Routes/Shop";
 
function App() {
   return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  )
}

export default App