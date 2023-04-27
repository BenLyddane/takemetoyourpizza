import React, { useRef, useState } from "react";
import "./signup.css";
import { auth } from "../../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSignUp = async () => {
    if (password == confirmPassword) {
      try {
        // const user = await createUserWithEmailAndPassword({
        //   auth,
        //   email,
        //   password,
        // });
        // console.log(user);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setFullName("");
      } catch (error) {
        console.log(error);
        console.log(error.response);
      }
    } else {
      alert("passwords do not match");
    }
  };

  return (
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
  );
};

export default SignUp;
