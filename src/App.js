import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import Home from "./pages/home-page/home.page";
import Sign from "./pages/sign-up-page/signup.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" index element={<Home />} />
        <Route path="/sign" element={<Sign />} />
      </Route>
    </Routes>
  );
}

export default App;
