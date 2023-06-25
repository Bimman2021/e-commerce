import { Routes, Route } from "react-router-dom";
import Signin from "./component/form/signin";
import Signup from "./component/form/signup";
import Reset from "./component/form/reset-password";
import NoPage from "./component/Nopage";
// import { AuthMail } from "./contexts/authMail";
// import VerifyEmail from "./component/verifyEmail";
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
import { useSelector } from "react-redux";
import Delivery from "./pages/delivery";
import Payment from "./pages/payment";
import OrderPlaced from "./pages/orderPlaced";
import OrderTrack from "./pages/orderTrack";
// import AddAddress from "./pages/addAddress";
import SavedAddress from "./pages/savedAddress";
import Terms from "./pages/termsNcondition";
import HelpPage from "./pages/helpPage";
import AdminHome from "./pages/admin/home";
import Upload from "./pages/admin/upload";
import Categories from "./pages/categories";

function App() {
  const dayNight = useSelector((state) => state.dayNight);

  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/category" element={<Categories />} />
      <Route path="/search" element={<Search />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/product" element={<Product />} />
      <Route path="/profile-settings" element={<ProfileSetting />} />
      <Route path="/order-placed" element={<OrderPlaced />} />
      <Route path="/order-history" element={<OrderPlaced />} />
      <Route path="/track-order" element={<OrderTrack />} />
      {/* <Route path="/new-address" element={<AddAddress />} /> */}
      <Route path="/saved-address" element={<SavedAddress />} />
      <Route path="/terms-condition" element={<Terms />} />
      <Route path="/forgot-password" element={<Reset />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/admin" element={<Signin rF={true} />} />
      <Route path="/admin/home" element={<AdminHome />} />
      <Route path="/admin/upload" element={<Upload />} />

      {/* general route */}
      <Route path="/404" element={<NoPage />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
