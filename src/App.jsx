import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./Components/Layout";
import { Home, Shop, Adoption, NotFound } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/auth" element="">
            <Route path="/auth/login" element="" />
            <Route path="/auth/register" element="" />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App