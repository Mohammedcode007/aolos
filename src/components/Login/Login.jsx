import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import styles from './Login.module.css'; // Assuming the correct path to your CSS module
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate(); // Initialize useHistory

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here, such as sending data to a server or validating inputs
        console.log('Login clicked with email:', email, 'and password:', password);
        console.log('Remember me:', rememberMe);
        // Redirect to dashboard after login
        navigate('/dashboard');
    };

    const handleNavigation = (route) => {
        navigate(route);
    };

    return (
        <div className={styles.loginContainer}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={email} 
                        onChange={handleInputChange} 
                        placeholder="Enter your email" 
                        required 
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        value={password} 
                        onChange={handleInputChange} 
                        placeholder="Enter your password" 
                        required 
                    />
                </div>
                <div className={styles.rememberMe}>
                    <input
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                    />
                    <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <button type="submit" className={styles.loginButton}>Login</button>
            </form>
            <div className={styles.buttonContainer}>
                <button className={styles.signupButton} onClick={() => handleNavigation('/signup')}>Signup</button>
                <button className={styles.forgotPasswordButton} onClick={() => handleNavigation('/forgot-password')}>Forgotten Password?</button>
            </div>
        </div>
    );
};

export default Login;
