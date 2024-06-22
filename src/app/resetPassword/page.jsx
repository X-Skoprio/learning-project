"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ResetPasswordPage() {
  const [user, setUser] = useState({
    password: "",
    passwordConfirm: ""
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onResetPassword = async () => {
    try {
      // Implement password reset logic here
      console.log("Password reset initiated with:", user.password);
    } catch (error) {
      console.log("Error in resetPassword page", error);
    }
  };

  useEffect(() => {
    // Enable the button only if both passwords match and are not empty
    setButtonDisabled(!(user.password && user.passwordConfirm && user.password === user.passwordConfirm));
  }, [user]);

  return (
    <div className="grid place-items-center w-svw h-svh bg-black ">
      <div className="flex flex-col justify-center items-center rounded-md shadow-[0_0_70px_rgba(255,255,255,0.5)] p-6 gap-4 bg-white">
        <h1 className="text-2xl">Reset password</h1>
        <hr />
        <input
          className="p-4 border border-gray-300"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
        <input
          className="p-4 border border-gray-300"
          id="passwordConfirm"
          type="password"
          value={user.passwordConfirm}
          onChange={(e) => setUser({ ...user, passwordConfirm: e.target.value })}
          placeholder="Confirm Password"
        />

        <button
          className="p-4 border border-gray-300"
          onClick={onResetPassword}
          disabled={buttonDisabled}
        >
          {buttonDisabled ? "No Reset Password" : "Reset Password"}
        </button>
      </div>
    </div>
  );
}
