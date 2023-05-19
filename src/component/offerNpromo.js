import React, { useState } from "react";

const OfferNpromo = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShow = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <section className="offer-section px-15 top-space">
      <h2 className="page-title">Offers &amp; promotions</h2>
      <div className={showMore ? "offer-listing maximized" : "offer-listing"}>
        <ul className="listing">
          <li>
            Get upto 25% discount on Multikart Pay using ICICI Bank Net banking
            or Cards
          </li>
          <li>Enjoy upto 50% off &amp; free delivery on online orders!</li>
          <li>
            Get upto 25% discount on Multikart Pay using ICICI Bank Net banking
            or Cards
          </li>
          <li>Enjoy upto 50% off &amp; free delivery on online orders!</li>
        </ul>
        <div className="overlay-offer"></div>
      </div>
      <button onClick={handleShow} className="show-more border-0 bg-none">
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};

export default OfferNpromo;
