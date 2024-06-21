"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled,setButtonDisabled] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log(response.data);

      if (response.data.success) {
        toast.success("Login successful!");
        router.push("/"); // Redirect to the desired page after successful login
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.log("Error on login: ", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email && user.password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="grid place-items-center w-svw h-svh bg-black">
      <div className="flex flex-col justify-center items-center rounded-md shadow-[0_0_70px_rgba(255,255,255,0.5)] p-6 gap-4 bg-white">
        <h1 className="text-black">{loading ? "Loading..." : "Login"}</h1>
        <hr />
        <input
          className="p-4 border broder-gray-300"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
        <input
          className="p-4 border broder-gray-300"
          id="password"
          type="text"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />

        <button 
          className="p-4 border broder-gray-300" 
          onClick={onLogin}
          disabled={buttonDisabled} // Disable button if fields are empty
        >
          Sign in
        </button>
        <Link href="/signup">Visit Signup page</Link>
      </div>
    </div>
  );
}
