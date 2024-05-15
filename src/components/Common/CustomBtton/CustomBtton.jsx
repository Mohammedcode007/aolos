import React from "react";
import styles from "./CustomButton.module.css";
import Spinner from 'react-bootstrap/Spinner';

const CustomButton = ({ handleClick, buttonText, customClass, isLoader }) => {
  return (
    <button
      className={`${styles.UserBtn} ${customClass} btn-lg align-items-center d-flex justify-content-center`}
      onClick={handleClick}
      // disabled// Disable the button when loader is active
    >
      {buttonText} {isLoader && (
        <Spinner animation="border" role="status" size="sm" className="ms-2" />
      )}
    </button>
  );
};

export default CustomButton;
