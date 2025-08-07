import { createContext, useState, useEffect } from "react";
import UseAxiosPublic from "./UseAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = UseAxiosPublic();

  // Create user (signup) and store token
  const createUser = async (name, email, password) => {
    try {
      const res = await axiosPublic.post("/signup", { name, email, password });
      const { token, user } = res.data;

      localStorage.setItem("token", token); // Save token
      setUser(user); // Set user state

      return res.data;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  };

  
// here i can set the token in login and  the signup   also 
// here need to set the token in the signup for set the login automatically after the registration
  const signIn = async (email, password) => {
    try {
      const res = await axiosPublic.post("/login", { email, password });
      const { token, user } = res.data;

      localStorage.setItem("token", token); // Save token
      setUser(user); // Set user state

      return user;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  // Logout user
const logOut = async () => {
  setLoading(true);
  setUser(null);
  localStorage.removeItem("token");
  setLoading(false);
};



  // Get current user if token exists (on refresh)
  const getMe = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const res = await axiosPublic.get("/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data);
    } catch (err) {
      console.error("Token invalid or expired:", err);
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMe(); // Re-authenticate user on page reload
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
