import React, { useState } from 'react';

const PasswordPage = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };
  
    const validatePassword = () => {
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match');
      } else {
        setErrorMessage('');
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      validatePassword();
      // handle form submission
    };
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label>Password:</label>
      <input type="password" value={password} onChange={handlePasswordChange} />
    </div>
    <div>
      <label>Confirm Password:</label>
      <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
    {errorMessage && <div>{errorMessage}</div>}
  </form>
  )
}

export default PasswordPage;