import React from 'react';
import styles from  './Login.module.css'; 
import {useState } from "react";
import { useNavigate } from 'react-router-dom';
import UseApi from '../../UseApi';
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const { apiCall} = UseApi();
  const { fetchUserData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      console.log("enter email and password");
    }
    try {
      const response = await apiCall({
        url: "/auth/login",
        method: "post",
        data: { email, password },
      });
      await fetchUserData();
      if (response.status === 200) navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
    }
  };



  return (
    <div className={styles.LoginContainer}>
      <div>
      <h2>Login</h2>
      </div>
      <div>
      <form>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);}}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);}}
          />
        </label>
        <br />
        <button type="button"
         onClick={handleSubmit}
        >
          Login
        </button>
      </form>
      </div>
    </div>
  );
};

export default Login;