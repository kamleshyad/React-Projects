// src/components/Login.js
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginUser } from "../../redux/slices/AuthSlices";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [formValue, setFormValue] = useState({
    email: "", // Use email instead of username
    password: "",
  });

  // Handle input changes
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  // Logic for handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { email, password } = formValue;

    // Validate inputs
    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email cannot be Empty",
      });
      return;
    }

    if (!password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password cannot be Empty",
      });
      return;
    }

    // Dispatch login action (send email and password to API)
    dispatch(loginUser({ email, password }));
  };

  // Handle error message if login fails
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: error,
    });
  }

  // Redirect to Dashboard if login is successful
  if (!loading && !error && localStorage.getItem("token")) {
    navigate("/dashboard"); // Redirect to dashboard if token exists
  }

  return (
    <div className="loginsec h-screen flex justify-center items-center">
      <div className="container mx-auto flex justify-center items-center">
        <div className="loginbox w-1/3 p-5 rounded-lg bg-yellow-500">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center text-3xl font-semibold mb-8">Login</h1>
            <ul className="space-y-5">
              <li>
                <input
                  type="email"  // Use type="email" for email input
                  name="email"  // Use email instead of username
                  placeholder="Email"
                  className="w-full p-2 rounded"
                  value={formValue.email} // Bind value to formValue
                  onChange={handleOnChange}
                />
              </li>
              <li>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-2 rounded"
                  value={formValue.password} // Bind value to formValue
                  onChange={handleOnChange}
                />
              </li>
              <li>
                <button
                  type="submit"
                  className="flex justify-center bg-blue-400 p-2 mx-auto"
                >
                  {loading ? "Logging In..." : "Login"}
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};
