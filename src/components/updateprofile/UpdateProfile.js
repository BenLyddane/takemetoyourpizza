import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./updateprofile.css";
import PizzaSidebar from "../dashboard/PizzaSidebar/PizzaSidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
export default function UpdateProfile() {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newDisplayName, setNewDisplayName] = useState("");
  const [newPhotoUrl, setNewPhotoUrl] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const {
    currentUser,
    updatePassword,
    updateEmail,
    updateDisplayName,
    updateProfilePicture,
  } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    //if passwords are not same I set this error
    e.preventDefault();
    if (newPassword !== newConfirmPassword) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if ((newEmail) && newEmail !== currentUser.email) {
      promises.push(updateEmail(newEmail));
      //Check if our email is not equal to our current email
      //if we've changed our email, I'll want to add that email by using (promises.push)
    }
    if (newPassword) {
      promises.push(updatePassword(newPassword));
    }

    if (newDisplayName) {
      promises.push(updateDisplayName(newDisplayName));
    }

    Promise.all(promises) //Our array promises
      .then(() => {
        //our .then will run everytime our promises execute
        navigate("/MyProfile"); //redirecting to our profile page
      })
      .catch((error) => {
        console.log(error)
        setError("Failed to update account");
      })
      .finally(() => {
        //our .finally will set our loading back to false and it runs if we either succeed or fail
       
        setLoading(false);
      });
  }

  return (
    <>
      <ProSidebarProvider backgroundColor="#FFA600">
        <PizzaSidebar />
        <div className="">
          <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">
                  Update Your Profile
                </h1>
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="displayName"
                  placeholder="New Display Name"
                  onChange={(e) => {
                    setNewDisplayName(e.target.value);
                  }}
                />

                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="newEmail"
                  placeholder="New Email"
                  onChange={(e) => {
                    setNewEmail(e.target.value);
                  }}
                />

                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                />
                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    setNewConfirmPassword(e.target.value);
                  }}
                />

                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1 createAccountButton"
                  onClick={handleSubmit}
                >
                  Update Your Account!
                </button>
              </div>
              <div>{error && <p>{error}</p>}</div>
            </div>
          </div>
        </div>
      </ProSidebarProvider>
    </>
  );
}
