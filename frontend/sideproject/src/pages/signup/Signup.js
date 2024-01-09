import React from 'react';
import styles from  './Signup.module.css'; 

const Signup = () => {
  return (
    <div className={styles.LoginContainer}>
      <div>
      <h2>Signup</h2>
      </div>
      <div>
      <form>
      <label>
          Username:
          <input
            type="text"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          Role:
          <input
            type="text"
            // value={role}
            // onChange={(e) => setRole(e.target.value)}
          />
        </label>

        <br />
        <button type="button"
        //  onClick={handleLogin}
        >
          Signup
        </button>
      </form>
      </div>
    </div>
  );
};

export default Signup;