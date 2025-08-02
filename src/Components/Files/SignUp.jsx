import Modal from "react-modal";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

const SignUp = ({ isOpen, onRequestClose, openLogin }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  // SignUp.jsx
  const { createUser } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const res = await createUser(data.name, data.email, data.password, data.role);
      if (res.success) {
        toast.success("SignUp Done!");
        reset();
        onRequestClose();
        navigate("/");
      } else {
        toast.error("Signup failed: ");
      }
    } catch (err) {
      toast.error("Signup error: ");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Register"
      overlayClassName="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
      className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white p-6 rounded-2xl w-full max-w-sm border border-purple-500/30 relative shadow-2xl"
    >
      <button
        onClick={onRequestClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-pink-400 text-xl transition-colors duration-200"
      >
        &times;
      </button>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-block p-3 rounded-full mb-4 shadow-lg">
          <img  className="w-10 h-10"src="/assets/logo.png" alt="" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-1">
          Join RealCODELab
        </h2>
        <p className="text-sm text-gray-300">
          Create your account
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm text-gray-300 mb-1 font-medium">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
            className="w-full px-3 py-2 bg-gray-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 text-white placeholder-gray-400"
          />
          {errors.name && <p className="text-pink-400 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-300 mb-1 font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="example@email.com"
            className="w-full px-3 py-2 bg-gray-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 text-white placeholder-gray-400"
          />
          {errors.email && <p className="text-pink-400 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm text-gray-300 mb-1 font-medium">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" },
            })}
            placeholder="••••••••"
            className="w-full px-3 py-2 bg-gray-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 text-white placeholder-gray-400"
          />
          {errors.password && <p className="text-pink-400 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm text-gray-300 mb-1 font-medium">Role</label>
          <select
            {...register("role", { required: "Role is required" })}
            className="w-full px-3 py-2 bg-gray-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 text-white appearance-none cursor-pointer"
          >
            <option value="" className="bg-gray-800 text-gray-400">Select your role</option>
            <option value="parent" className="bg-gray-800 text-white">👨‍👩‍👧‍👦 Parent</option>
            <option value="teacher" className="bg-gray-800 text-white">👩‍🏫 Teacher</option>
            <option value="admin" className="bg-gray-800 text-white">⚡ Admin</option>
          </select>
          {errors.role && <p className="text-pink-400 text-sm mt-1">{errors.role.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          SignUp
        </button>
      </form>

      {/* Redirect to Login */}
      <p className="text-center text-sm mt-4 text-gray-400">
        Already have an account?
        <button
          type="button"
          onClick={() => {
            onRequestClose();
            openLogin();
          }}
          className="ml-1 underline text-pink-400 hover:text-pink-300 transition-colors duration-200"
        >
          Login
        </button>
      </p>
    </Modal>
  );
};

export default SignUp;