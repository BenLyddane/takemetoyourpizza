import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    //if passwords are not same I set this error
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
      //Check if our email is not equal to our current email
      //if we've changed our email, I'll want to add that email by using (promises.push)
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises) //Our array promises
      .then(() => {
        //our .then will run everytime our promises execute
        navigate("/"); //redirecting to our home page
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        //our .finally will set our loading back to false and it runs if we either succeed or fail
        setLoading(false);
      });
  }

  return (
    <>
          <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullName"
            placeholder="Full Name"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />

          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />

          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            className="createAccountButton"
            onClick={handleSignUp}
          >
            Create Account and Login
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
