import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
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
      <div className=" bg-center min-h-screen flex items-center justify-center dark:bg-gray-950">
        <div className="modal-box bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
          {/* Close button for the modal */}
          <Link
            to={"/"}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="font-bold text-2xl text-center">Signup</h3>

          {/* Form submission handling */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Name: </label>
              <br />
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 p-2 outline-none rounded-md my-1 bg-white text-black dark:bg-black dark:text-white border border-red-300"
                {...register("name", { required: "Name is required" })} // Register field
              />
              <br />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>

            <div>
              <label>Email: </label>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 p-2 outline-none rounded-md my-1 bg-white text-black dark:bg-black dark:text-white border border-red-300"
                {...register("email", { required: "Email is required" })} // Register field
              />
              <br />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            <div>
              <label>Password: </label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 p-2 outline-none rounded-md my-1 bg-white text-black dark:bg-black dark:text-white border border-red-300"
                {...register("password", { required: "Password is required" })} // Register field
              />
              <br />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>

            {/* Submit button */}
            <div className="flex justify-around mt-5">
              <button
                type="submit" // Make sure the button is of type 'submit'
                className="px-4 py-2 bg-pink-500 cursor-pointer hover:bg-pink-700 rounded-2xl"
              >
                Signup
              </button>

              <p>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-red-400 cursor-pointer hover:text-blue-400 duration-200"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;


// onClick={()=>document.getElementById("my_modal_3").showModal()}
