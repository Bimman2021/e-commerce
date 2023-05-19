import React from "react";
import one from "../assets/images/payment/1.png";
import two from "../assets/images/payment/2.png";
import three from "../assets/images/payment/3.png";
import four from "../assets/images/payment/4.png";

const PaymentMethod = () => {
  return (
    <section className="px-15 payment-method-section pt-0">
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="h_one">
            <div
              className="btn btn-link"
              data-bs-toggle="collapse"
              data-bs-target="#one"
            >
              <label htmlFor="r_one">
                <img src={one} className="img-fluid" alt="" />
                Cash On Delivery
                <input
                  type="radio"
                  className="radio_animated"
                  id="r_one"
                  name="occupation"
                  value="Working"
                  required=""
                />
              </label>
            </div>
          </div>
          <div
            id="one"
            className="collapse show"
            aria-labelledby="h_one"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body p-0"></div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="h_two">
            <div
              className="btn btn-link"
              data-bs-toggle="collapse"
              data-bs-target="#two"
            >
              <label htmlFor="r_two">
                <img src={two} className="img-fluid" alt="" />
                Debit/Credit Card
                <input
                  type="radio"
                  className="radio_animated"
                  id="r_two"
                  name="occupation"
                  value="Working"
                  required=""
                />
              </label>
            </div>
          </div>
          <div
            id="two"
            className="collapse"
            aria-labelledby="h_two"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <form className="pt-2">
                <div className="form-floating mb-4">
                  <label htmlFor="c-name">name on card</label>
                  <input
                    type="text"
                    className="form-control"
                    id="c-name"
                    placeholder="name on card"
                  />
                </div>
                <div className="form-floating mb-4">
                  <label htmlFor="c1name">card number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="c1name"
                    placeholder="card number"
                  />
                </div>
                <div className="row">
                  <div className="form-floating mb-4 col-8">
                    <label htmlFor="cname">expiration date</label>
                    <input
                      type="number"
                      className="form-control"
                      id="cname"
                      placeholder="expiration date"
                    />
                  </div>
                  <div className="form-floating mb-4 col-4">
                    <label htmlFor="c2name">CVV</label>
                    <input
                      type="number"
                      className="form-control"
                      id="c2name"
                      placeholder="CVV"
                    />
                  </div>
                </div>
                <div className="payment-btn">
                  <button type="submit" className="btn btn-solid color1">
                    make payment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="h_three">
            <div
              className="btn btn-link"
              data-bs-toggle="collapse"
              data-bs-target="#three"
            >
              <label htmlFor="r_three">
                <img src={three} className="img-fluid" alt="" />
                Wallets
                <input
                  type="radio"
                  className="radio_animated"
                  id="r_three"
                  name="occupation"
                  value="Working"
                  required=""
                />
              </label>
            </div>
          </div>
          <div
            id="three"
            className="collapse"
            aria-labelledby="h_three"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <form className="wallet-section">
                <h4 className="page-title">Select Popular Banks</h4>
                <div className="">
                  <div className="form-check ps-0 mb-1">
                    <input
                      className="radio_animated"
                      type="radio"
                      name="exampleRadios1"
                      id="Radios1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="Radios1">
                      Industrial &amp; Commercial Bank
                    </label>
                  </div>
                  <div className="form-check ps-0 mb-1">
                    <input
                      className="radio_animated"
                      type="radio"
                      name="exampleRadios1"
                      id="Radios2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="Radios2">
                      Construction Bank Corp.
                    </label>
                  </div>
                  <div className="form-check ps-0 mb-1">
                    <input
                      className="radio_animated"
                      type="radio"
                      name="exampleRadios1"
                      id="Radios3"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="Radios3">
                      Agricultural Bank
                    </label>
                  </div>
                  <div className="form-check ps-0 mb-1">
                    <input
                      className="radio_animated"
                      type="radio"
                      name="exampleRadios1"
                      id="Radios4"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="Radios4">
                      HSBC Holdings
                    </label>
                  </div>
                  <div className="form-check ps-0 mb-1">
                    <input
                      className="radio_animated"
                      type="radio"
                      name="exampleRadios1"
                      id="Radios5"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="Radios5">
                      Bank of America
                    </label>
                  </div>
                  <div className="form-check ps-0 mb-1">
                    <input
                      className="radio_animated"
                      type="radio"
                      name="exampleRadios1"
                      id="Radios6"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="Radios6">
                      JPMorgan Chase &amp; Co.
                    </label>
                  </div>
                </div>
                <div className="form-floating mt-3">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option value="1">Choose Bank...</option>
                    <option value="2">ICICI</option>
                    <option value="3">BOB</option>
                  </select>
                  <label htmlFor="floatingSelect">Choose Bank</label>
                </div>
                <div className="payment-btn">
                  <button type="submit" className="btn btn-solid mt-4">
                    make payment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="h_four">
            <div
              className="btn btn-link"
              data-bs-toggle="collapse"
              data-bs-target="#four"
            >
              <label htmlFor="r_four">
                <img src={four} className="img-fluid" alt="" />
                Net Banking
                <input
                  type="radio"
                  className="radio_animated"
                  id="r_four"
                  name="occupation"
                  value="Working"
                  required=""
                />
              </label>
            </div>
          </div>
          <div
            id="four"
            className="collapse"
            aria-labelledby="h_four"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <form className="wallet-section">
                <h4 className="page-title">Select Your Wallet</h4>
                <div className="">
                  <div className="form-check ps-0 mb-1">
                    <input
                      className="radio_animated"
                      type="radio"
                      name="exampleRadios2"
                      id="exampleRadios1"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      Adyen
                    </label>
                  </div>
                  <div className="form-check ps-0 mb-1">
                    <input
                      className="radio_animated"
                      type="radio"
                      name="exampleRadios2"
                      id="exampleRadios2"
                      value="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios2"
                    >
                      Airtel Money
                    </label>
                  </div>
                  <div className="form-check ps-0 mb-1">
                    <input
                      className="radio_animated"
                      type="radio"
                      name="exampleRadios2"
                      id="exampleRadios3"
                      value="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios3"
                    >
                      AlliedWallet
                    </label>
                  </div>
                  <div className="form-check ps-0 mb-1">
                    <input
                      className="radio_animated"
                      type="radio"
                      name="exampleRadios2"
                      id="exampleRadios4"
                      value="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios4"
                    >
                      Apple Pay
                    </label>
                  </div>
                  <div className="form-check ps-0 mb-1">
                    <input
                      className="radio_animated"
                      type="radio"
                      name="exampleRadios2"
                      id="exampleRadios5"
                      value="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios5"
                    >
                      Brinks
                    </label>
                  </div>
                  <div className="form-check ps-0 mb-1">
                    <input
                      className="radio_animated"
                      type="radio"
                      name="exampleRadios2"
                      id="exampleRadios6"
                      value="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios6"
                    >
                      CardFree
                    </label>
                  </div>
                </div>
                <div className="payment-btn mt-4">
                  <button type="submit" className="btn btn-solid">
                    make payment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
