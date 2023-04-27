import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to Login");
    }
    setLoading(false);
  }
  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Log In</h1>

          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />

          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            className="createAccountButton"
            onClick={handleLogin}
            disabled={loading}
          >
            Sign In
          </button>
          <Link to="/forgotpassword">Forgot Password?</Link>
          <div className="w-100 text-center mt-2">
             <Link to="/signup">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
