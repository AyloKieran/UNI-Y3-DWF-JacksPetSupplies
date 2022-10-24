import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";

import Home from "./Routes/Home/Home";
import Shop from "./Routes/Shop/Shop";
import Adoption from "./Routes/Adoption/Adoption";

function App() {
  return (
    <Router>
      <Header />
      <div className="flex-grow flex flex-col max-w-screen overflow-x-hidden dark:bg-gray-900 dark:text-white">
        <main className="flex-grow mb-4 p-4 max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/adoption" element={<Adoption />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App