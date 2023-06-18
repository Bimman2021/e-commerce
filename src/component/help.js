import React from "react";
import Accordion from "react-bootstrap/Accordion";
import helpImg from "../assets/images/help.jpg";

const Help = () => {
  const faq = [
    {
      question: "I want to track my order",
      answer:
        "  The standard chunk of Lorem Ipsum used since the 1500s i reproduced below for those interested. Sections 1.10.32 and ",
    },
    {
      question: "I am unable to pay using wallet",
      answer:
        "  The standard chunk of Lorem Ipsum used since the 1500s i reproduced below for those interested. Sections 1.10.32 and ",
    },
    {
      question: "I want help with returns &amp; refunds",
      answer:
        "  The standard chunk of Lorem Ipsum used since the 1500s i reproduced below for those interested. Sections 1.10.32 and ",
    },
    {
      question: "I want to unsubscribe from promotional emails and SMS",
      answer:
        "  The standard chunk of Lorem Ipsum used since the 1500s i reproduced below for those interested. Sections 1.10.32 and ",
    },
  ];

  return (
    <section className="px-15 top-space pt-0">
      <div className="help-img">
        <img
          src={helpImg}
          className="img-fluid rounded-1 w-100"
          height="242px"
          alt=""
        />
      </div>
      <div className="faq-section section-t-space section-b-space">
        <h4 className="fw-bold mb-1">Help Center</h4>
        <p className="content-color">
          Please get in touch and we will be happy to help you. Get quick
          customer support by selecting your item
        </p>
        <h4 className="fw-bold mb-3">What issues are you facing?</h4>
        <Accordion>
          {faq.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={index}>
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body>{item.answer}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default Help;
