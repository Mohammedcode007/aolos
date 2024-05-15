import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'; // Assuming you're using React Bootstrap
import InputFields from '../Common/InputFields/InputFields'; // Assuming the correct path to your InputFields component
import styles from './Signup.module.css'; // Assuming the correct path to your CSS module

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    // phone: '',
    dob: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here, such as sending data to a server or validating inputs
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className={styles.signupContainer}>
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <div className={`form-group-wrapper position-relative ${styles.inputGroup}`}>
          <InputFields
            label="First Name"
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            value={formData.firstName}
            handleChange={handleChange}
            required
          />
        </div>
        <div className={`form-group-wrapper position-relative ${styles.inputGroup}`}>
          <InputFields
            label="Last Name"
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            value={formData.lastName}
            handleChange={handleChange}
            required
          />
        </div>
        <div className={`form-group-wrapper position-relative ${styles.inputGroup}`}>
          <InputFields
            label="Email"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            handleChange={handleChange}
            required
          />
        </div>
        {/* <div className={`form-group-wrapper position-relative ${styles.inputGroup}`}>
          <InputFields
            label="Phone Number"
            type="phone"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            handleChange={handleChange}
            required
          />
        </div> */}
        <div className={`form-group-wrapper position-relative ${styles.inputGroup}`}>
          <InputFields
            label="Date of Birth"
            type="date"
            name="dob"
            value={formData.dob}
            handleChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.signupButton}>
          Sign Up
        </button>
      </Form>
    </div>
  );
};

export default Signup;
