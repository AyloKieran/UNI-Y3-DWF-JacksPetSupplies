import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./Components/Layout";
import { Home, Shop, Adoption, NotFound } from "./Routes";
import { AuthLogin, AuthRegister, NoAccess } from "./Routes/Auth";
import { MembersArea } from "./Routes/MembersArea";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/auth">
            <Route path="/auth/login" element={<AuthLogin />} />
            <Route path="/auth/register" element={<AuthRegister />} />
            <Route path="/auth/no-access" element={<NoAccess />} />
          </Route>
          <Route path="/members-area" element={<MembersArea />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App