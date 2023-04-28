import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
export default function ForgotPassword() {
  const [email, setEmail] = useState();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(email);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <Navbar />
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Forgot Password</h1>

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1 createAccountButton"
              onClick={handleSubmit}
              disabled={loading}
            >
              Submit
            </button>

            <div className="w-100 text-center mt-2">
              <Link to="/signup">Need to register?</Link>
            </div>
          </div>
          <div>
          {error && <alert>{error}</alert>}
        {message && <alert>{message}</alert>}</div>
        </div>
      </div>
    </>
  );
}
