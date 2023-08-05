import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import shareImg from "../assets/svg/share-2.svg";
import { RWebShare } from "react-web-share";
import ProductDetails from "../component/productDetails";
// import Products from "../component/products";
import ReturnPolicy from "../component/returnPolicy";
import ProductSize from "../component/productSize";
import CustomerReview from "../component/customerReview";
import CheckDelivery from "../component/checkDelivery";
import SimilarProducts from "../component/similarProducts";
import Slider from "react-slick";
import BackHeader from "../component/backHeader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../contexts/slices/cartSlice";
import axios from "../config/axios";

const Footer = ({ product, qty }) => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    let isInCart = cartItems.find((item) => item.id === product.id);
    if (isInCart) {
      alert("item already in cart");
    } else {
      dispatch(addToCart({ ...product, qty: qty }));
      alert("item added");
    }
  };
  return (
    <div className="fixed-panel">
      <div className="row">
        <div className="col-6">
          <Link to="/wishlist">
            <i className="iconly-Heart icli"></i>WISHLIST
          </Link>
        </div>
        <div className="col-6">
          <button className="theme-color" onClick={handleAddToCart}>
            <i className="iconly-Buy icli"></i>ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  );
};

const Product = () => {
  const pid = useParams().product_id;
  const [data, setData] = useState();
  const [qty, setQty] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const resData = await axios.post("/get_products", { id: pid });
      const res = resData.data;
      setData(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  //
  const slickProps = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    // slidesToScroll: 0.5,
    arrows: false,
    className: "theme-dots top-space",
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <h1>Loading ...</h1>
  ) : (
    <div>
      <BackHeader
        options={true}
        optComponent={
          <li>
            <RWebShare
              data={{
                text: "Like humans, flamingos make friends for life",
                url: "https://olo.com/2zHaNup",
                title: "Flamingos",
              }}
            >
              <img src={shareImg} className="img-fluid" alt="" />
            </RWebShare>
          </li>
        }
      />
      <div className="nopad">
        <Slider {...slickProps}>
          {data.images.map((item, index) => {
            return (
              <div key={index} className="cl">
                <img
                  src={`http://localhost:5000/${item}`}
                  className="img-fluid bg-img"
                  alt=""
                />
              </div>
            );
          })}
        </Slider>
      </div>

      {/*  */}
      <div className="product-detail-box px-15 pt-2">
        <div className="main-detail">
          <h2 className="text-capitalize">floral print skirt with white top</h2>
          <h6 className="content-color">
            Black, off-white and peach-coloured printed flared skirt, has zip
            closure, attached lining
          </h6>
          <div className="rating-section">
            <ul className="ratings">
              <li>
                <i className="iconly-Star icbo"></i>
              </li>
              <li>
                <i className="iconly-Star icbo"></i>
              </li>
              <li>
                <i className="iconly-Star icbo"></i>
              </li>
              <li>
                <i className="iconly-Star icbo"></i>
              </li>
              <li>
                <i className="iconly-Star icbo empty"></i>
              </li>
            </ul>
            <h6 className="content-color">(20 ratings)</h6>
          </div>
          <div className="price">
            <h4>
              $32.00 <del>$35.00</del>
              <span>(20% off)</span>
            </h4>
          </div>
          <h6 className="text-green">inclusive of all taxes</h6>
        </div>
      </div>
      {/*  */}

      <div className="divider"></div>
      <ProductSize qty={qty} setQty={setQty} />
      <div className="divider"></div>
      <ReturnPolicy />
      <div className="divider"></div>
      <ProductDetails />
      <div className="divider"></div>
      <CustomerReview />
      <div className="divider"></div>
      <CheckDelivery />
      <div className="divider"></div>
      <SimilarProducts title={"Similar Products"} />
      <Footer product={data} qty={qty} />
      <div className="panel-space"></div>
    </div>
  );
};

export default Product;
