import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Health from "./pages/Health";
import Finance from "./pages/Finance";
import Life from "./pages/Life";
import Entertainment from "./pages/Entertainment";
import Business from "./pages/Business";
import Profile from "./pages/Profile";
import MaybeShowNavbar from "./MaybeShowNavbar/MaybeShowNavbar";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <MaybeShowNavbar>
        <Header />
      </MaybeShowNavbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/health" element={<Health />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/life" element={<Life />} />
        <Route path="/business" element={<Business />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
