import React, { useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";

const PhoneNoInput = (props) => {
  const { handleChange, value, error, cssClass, disabled, onFocus } = props;

  useEffect(() => {
    if (error) error(validatePhone());
  });

  const validatePhone = () => {
    if (value) {
      if (isPossiblePhoneNumber(value)) {
        return "";
      }
      return "Invalid phone number";
    }
    return "";
  };

  return (
    <PhoneInput
      international
      defaultCountry="US"
      className={`modalPhoneInput ${cssClass}`}
      placeholder="Phone"
      value={value}
      onChange={handleChange}
      disabled={disabled}
      error={validatePhone()}
      onFocus={onFocus}
    />
  );
};

export default PhoneNoInput;