import React, { useState } from 'react';
import styles from './ChangePassword.module.css'; // Assuming the correct path to your CSS module
import InputFields from '../Common/InputFields/InputFields'; // Assuming the correct path to your InputFields component

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle change password logic here
    console.log('New password:', newPassword);
    console.log('Confirm password:', confirmPassword);
    // Reset form fields
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className={styles.changePasswordContainer}>
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="newPassword">New Password</label>
          <InputFields
            type="password"
            id="newPassword"
            value={newPassword}
            handleChange={handleNewPasswordChange}
            cssClass={styles.inputField}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <InputFields
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            handleChange={handleConfirmPasswordChange}
            cssClass={styles.inputField}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Change Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
