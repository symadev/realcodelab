import Modal from "react-modal";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthContext";

import { Link, useNavigate } from "react-router-dom";

// here root is the main dom element of my app
Modal.setAppElement("#root");

const Login = ({ isOpen, onRequestClose, openRegister }) => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signIn(email, password); 
      toast.success("Login Successful");
      onRequestClose();
      navigate("/");
    } catch (err) {
     toast.error("Login Failed: " + err.message);
// toast .error() usually takes one argument, so it must write like this . but here we are passing two arguments, the first is the message and the second is the error message
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login"
      overlayClassName="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
      className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white p-6 rounded-2xl w-full max-w-sm border border-purple-500/30 relative shadow-2xl"
    >
      <button
        onClick={onRequestClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-pink-400 text-xl transition-colors duration-200"
      >
        &times;
      </button>

      <div className="text-center mb-6">
      
           <div className="inline-block p-3 rou mb-4 ">
          <img  className="w-10 h-10"src="/assets/logo.png" alt="" />
        </div>
       
        <h2 className="text-2xl font-bold text-white mb-1">
          Welcome to RealCODELab
        </h2>
        <p className="text-sm text-gray-300">Collaborate. Code. Compile in Real Time.</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 bg-gray-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 text-white placeholder-gray-400"
            placeholder="developer@example.com"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            required
            className="w-full px-3 py-2 bg-gray-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 text-white placeholder-gray-400"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Enter Code Room
        </button>
      </form>

      <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
        <Link to="/forgot-password" className="hover:text-pink-400 transition-colors duration-200">
          Forgot Password?
        </Link>
        <button
          type="button"
          onClick={() => {
            onRequestClose();
            openRegister();
          }}
          className="hover:text-pink-400 transition-colors duration-200"
        >
          Create Account
        </button>
      </div>
    </Modal>
  );
};

export default Login;