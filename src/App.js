import { Routes, Route } from "react-router-dom";
import Signin from "./component/bimForm/signin";
import Signup from "./component/bimForm/signup";
import Reset from "./component/bimForm/reset-password";
import NoPage from "./component/Nopage";
import { AuthMail } from "./contexts/authMail";
import VerifyEmail from "./component/verifyEmail";
import ProgressForm from "./component/bimForm/progressForm";

import { AuthProvider } from "./contexts/userAuth";
import Public from "./pages";
import DealOfDay from "./component/deal";
import SimilarProducts from "./component/similarProducts";
import ProductDetails from "./component/productDetails";
import Filter from "./component/filter";
import Products from "./component/products";
import Wishlist from "./component/wishlist";
import Banner from "./component/bannerCarousel";
import Orderdetails from "./component/orderDetails";
import Servicewrapper from "./component/serviceWrapper";
import Coupons from "./component/coupons";
import Navbar from "./component/navBar";
import Pastorder from "./component/pastOrder";

function Container() {
  return (
    <section>
      <Pastorder />
      <div className="divider"></div>
      <Coupons />
      <div className="divider"></div>
      <Orderdetails />
      <div className="divider"></div>
      <Servicewrapper />
      <Navbar />
    </section>
  );
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Container />} />
        <Route path="/progress" element={<ProgressForm />} />

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
    </AuthProvider>
  );
}

export default App;
