import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Initialize react-hook-form

  const onSubmit = (data) => {
    console.log(data); // Log form data on successful submission
  };

  return (
    <>
      <div className="bg-[url('https://wallpaper.forfun.com/fetch/e9/e976e6ca53a4c0a2377845abec70b11b.jpeg?w=400&r=0.5625')] bg-cover bg-center min-h-screen flex items-center justify-center dark:md:bg-[url('https://wallpaper.forfun.com/fetch/19/19b7a7201a24d6d3934b5da031c38307.jpeg?w=400&r=0.5625')]">
        <div className="modal-box bg-white dark:bg-transparent p-8 rounded-lg shadow-lg">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="font-bold text-2xl text-center">Login</h3>

          {/* Handle form submission with react-hook-form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email field with validation */}
            <div>
              <label>Email: </label>
              <br />
              <input
                {...register("email", { required: "Email is required" })} // Register field
                type="email"
                placeholder="Enter your email"
                className="w-80 p-2 outline-none rounded-md my-1 bg-white text-black dark:bg-black dark:text-white border border-red-300"
              />
              {/* Display validation error if email is missing */}
              <br />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            {/* Password field with validation */}
            <div>
              <label>Password: </label>
              <br />
              <input
                {...register("password", { required: "Password is required" })} // Register field
                type="password"
                placeholder="Enter your password"
                className="w-80 p-2 outline-none rounded-md my-1 bg-white text-black dark:bg-black dark:text-white border border-red-300"
              />
              {/* Display validation error if password is missing */}
              <br />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>

            
            <div className="flex justify-around mt-5">
              <button
                type="submit" // Submit button
                className="px-4 py-2 bg-pink-500 cursor-pointer hover:bg-pink-700 rounded-2xl"
              >
                Login
              </button>

              <p>
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-red-400 cursor-pointer hover:text-blue-400 duration-200"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;


