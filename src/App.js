import { Routes, Route } from "react-router-dom";
import Signin from "./component/bimForm/signin";
import Signup from "./component/bimForm/signup";
import Reset from "./component/bimForm/reset-password";
import NoPage from "./component/Nopage";
import { AuthMail } from "./contexts/authMail";
import VerifyEmail from "./component/verifyEmail";
// import { AuthProvider } from "./contexts/userAuth";
import Search from "./pages/search";
import Home from "./pages/home";
import Notifications from "./pages/notifications";
import WishList from "./pages/wishlist";
import Cart from "./pages/cart";
import Profile from "./pages/profile";
import ProfileSetting from "./pages/profileSettings";
import Shop from "./pages/shop";
import Product from "./pages/product";

function App() {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/search" element={<Search />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile-settings" element={<ProfileSetting />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product" element={<Product />} />
      {/* <Route path="/progress" element={<ProgressForm />} /> */}

      <Route path="/reset-password" element={<Reset />} />

      {/* secure pages */}
      <Route
        path="/verify-email"
        element={
          <AuthMail>
            <VerifyEmail />
          </AuthMail>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthMail>
            <Signup />
          </AuthMail>
        }
      />
      <Route
        path="/signin"
        element={
          <AuthMail>
            <Signin />
          </AuthMail>
        }
      />

      {/* general route */}
      <Route path="404" element={<NoPage />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
