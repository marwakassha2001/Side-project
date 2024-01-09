import { useState, useEffect, createContext } from "react";
import axiosInstance from "./utils.js";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checkUser, setCheckUser] = useState(false);

  useEffect(() => {
    if (!user && user === null) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    try {
      setCheckUser(true);
      const response = await axiosInstance.get("auth/login-user");
      setUser(response.data.user);
    } catch (err) {
      console.log(err);
    } finally {
      setCheckUser(false);
    }
  };

  const logOut = async () => {
    await axiosInstance.post("auth/logout");
    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        checkUser,
        setUser,
        logOut,
        fetchUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};