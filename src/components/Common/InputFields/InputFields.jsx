import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "./InputStyle.module.css";
import PhoneNoInput from "../PhoneNoInput/PhoneNoInput";
import Button from "react-bootstrap/Button";
import DatePicker from 'react-date-picker';

const InputFields = (props) => {
  const {
    label,
    type,
    placeholder,
    labelStyle,
    typeOfInput,
    inputStyle,
    maxlength, // Removed duplicated attribute
    groupWrapper,
    handleChange,
    value,
    name,
    disabled,
    readonly,
    cssClass,
    handleKeyDown,
    limit,
    required,
    onFocus,
    onBlur,
    error,
    icon, // New icon prop
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const countryOptions = [
    // List of countries
    "USA",
    "Canada",
    "UK",
    "Australia",
    // Add more countries as needed
  ];

  return (
    <>
      {type === "phone" ? (
        <PhoneNoInput
          handleChange={handleChange}
          value={value || ""}
          disabled={disabled}
          cssClass={`${inputStyle} ${error && "errorField"}`}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      ) : (
        <Form.Group
          style={{
            width: "100%",
            display: type === "Submit" && "flex",
            justifyContent: type === "Submit" && "center",
          }}
          className={`form-group-wrapper ${groupWrapper} position-relative`}
        >
          {label && (
            <Form.Label
              className={`${styles.inputLabel} ${labelStyle}`}
              style={{ display: type === "Submit" && "none" }}
            >
              {label}
              {required ? (
                <span className="fw-bold fs-6 text-danger"> *</span>
              ) : null}
            </Form.Label>
          )}
          <div
            className={styles.inputWrapper}
            style={{
              width: type === "checkbox" && "28%",
              backgroundColor: type === "Submit" || 'date' && "transparent",

            }}
          >
            {/* Render icon */}
            {type === "Submit" ? "" : icon}
            {type === "checkbox" ? (
              <Form.Check
                type="checkbox"
                label={label}
                checked={value}
                onChange={handleChange}
              />
            ) : type === "country" ? (
              <Form.Control
                as="select"
                value={value}
                name={name}
                disabled={disabled}
                className={`${styles.inputStyling} ${inputStyle} ${cssClass}`}
                required={required}
                onChange={handleChange}
                onBlur={onBlur}
                onFocus={onFocus}
              >
                <option value="" disabled hidden>
                  Select a country
                </option>
                {countryOptions.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </Form.Control>
            ) : type === "date" ? (
              <div className={styles.FormDate}>
                <Form.Control
                  type="text"
                  value={value}
                  name={name}
                  disabled={disabled}
                  className={`${styles.inputStylingDate} ${inputStyle} ${cssClass}`}
                  required={required}
                  onChange={handleChange}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  placeholder="year"
                />
                <Form.Control
                  type="text"
                  value={value}
                  name={name}
                  disabled={disabled}
                  className={`${styles.inputStylingDate} ${inputStyle} ${cssClass}`}
                  required={required}
                  onChange={handleChange}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  placeholder="month"
                />
                <Form.Control
                  type="text"
                  value={value}
                  name={name}
                  disabled={disabled}
                  className={`${styles.inputStylingDate} ${inputStyle} ${cssClass}`}
                  required={required}
                  onChange={handleChange}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  placeholder="day"

                />
              </div>
            ) : type === "Submit" ? (
              <Button variant="primary" type="submit">
                Submit
              </Button>
            ) : (
              <Form.Control
                type={showPassword ? "text" : type}
                readOnly={readonly}
                maxLength={maxlength} // Here is the corrected attribute
                placeholder={placeholder}
                className={`${styles.inputStyling} ${inputStyle} ${cssClass}`}
                value={value}
                name={name}
                disabled={disabled}
                required
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                autoComplete="one-time-code"
              />
            )}

            {type === "password" && (
              <div
                className={styles.eyeIcon}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </div>
            )}
          </div>
        </Form.Group>
      )}
    </>
  );
};

export default InputFields;
