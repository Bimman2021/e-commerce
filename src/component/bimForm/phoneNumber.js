import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function MobileInput({ props }) {
  // // `value` will be the parsed phone number in E.164 format.
  // // Example: "+12133734253".
  // const [value, setValue] = useState();
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={props.value}
      defaultCountry="US"
      className={
        props.error
          ? "custom-select inputHolder m-black is-invalid"
          : "custom-select inputHolder m-black"
      }
      smartCaret={true}
      onChange={(data) => {
        props.setValue((prev) => {
          return { ...prev, ["mobile"]: data };
        });
      }}
    />
  );
}

export default MobileInput;
