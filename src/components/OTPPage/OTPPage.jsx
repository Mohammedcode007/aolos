import React, { useState } from 'react';
import styles from './OTPPage.module.css'; // Assuming the correct path to your CSS module

const OTPPage = () => {
  const [otp, setOTP] = useState(['', '', '', '', '', '']);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (!isNaN(value) && value !== '') {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (index < 5 && value !== '') {
        document.getElementById(`otpInput${index + 1}`).focus();
      }
    }
  };

  return (
    <div className={styles.otpContainer}>
      <h2>Enter OTP</h2>
      <p>Please enter the 6-digit OTP sent to your mobile number.</p>
      <div className={styles.otpInputs}>
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otpInput${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            className={styles.otpInput}
          />
        ))}
      </div>
      <button className={styles.submitButton}>Submit</button>
    </div>
  );
};

export default OTPPage;
