"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log(response.data);

      if (response.data.success) {
        toast.success("Login successful!");
        router.push("/"); 
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
    <div className="fixed inset-0 grid place-items-center w-svw h-svh bg-white">
      <div className="p-4 flex justify-center flex-col items-center">
        <h1 className="text-2xl text-gray-800 font-semibold text-center mb-4 ">
          {loading ? "Loading..." : "Se connecter"}
        </h1>
        <div className="w-full">
          <label htmlFor="email" className="input-label">
            Email
            <input
              className="input mt-1"
              id="email"
              type="text"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="email"
            />
          </label>
        </div>
        <div className="relative">
          <label htmlFor="password" className="input-label">
            Mot de passe
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="password"
              className="input mt-1"
            />
            <FaEye
              className={`${
                !passwordVisible ? "hidden" : "block"
              } cursor-pointer absolute top-1/2 right-3 -translate-y-1/2`}
              onClick={() => setPasswordVisible(!passwordVisible)}
            ></FaEye>
            <FaEyeSlash
              className={`${
                !passwordVisible ? "block" : "hidden"
              } cursor-pointer absolute top-1/2 right-3 -translate-y-1/2`}
              onClick={() => setPasswordVisible(!passwordVisible)}
            ></FaEyeSlash>
          </label>
          <p className="text-[14px] text-gray-600">
            Mot de passe oublié ?{" "}
            <span className="inline-block cursor-pointer text-primary transition-transform transform-gpu hover:-translate-y-0.5">
              Cliquez ici !
            </span>
          </p>
        </div>
        <button
          className="btn-primary w-[80%] mt-7 rounded-full block mb-4"
          onClick={onLogin}
          disabled={buttonDisabled}
        >
          Login
        </button>
        <div className="flex flex-col items-center space-y-3">
          <p>Se connecter avec :</p>
          <div className="flex space-x-3 text-2xl">
            <FcGoogle className="duration-300 hover:-translate-y-1 cursor-pointer grayscale hover:grayscale-0" />
            <FaLinkedin className="duration-300 hover:-translate-y-1 cursor-pointer grayscale hover:grayscale-0 text-blue-600" />
            <FaFacebookF className="duration-300 hover:-translate-y-1 cursor-pointer grayscale hover:grayscale-0 text-blue-800" />
          </div>
          <div>
            <p>
              Vous n&apos;avez pas de compte ?{" "}
              <Link href="/signup">
                <span className="text-primary cursor-pointer duration-300 inline-block hover:-translate-y-1">
                  S&apos;enregistrer
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
