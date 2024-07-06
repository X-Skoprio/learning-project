"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa6";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    familyName: "",
    phone: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    specialChar: false,
    uppercase: false,
    number: false,
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(?:(?:\+|00)33|0)[1-9](?:[\s.-]*\d{2}){4}$/;
  const passwordRegex = {
    length: /^.{8,}$/, // At least 8 characters
    specialChar: /[!@#$%^&*(),.?":{}|<>]/, // At least one special character
    uppercase: /[A-Z]/, // At least one uppercase letter
    number: /[0-9]/, // At least one number
  };

  const onSignup = async () => {
    if (!emailRegex.test(user.email)) {
      const errorMessage = "Email invalide";
      setError(errorMessage);
      toast.error(errorMessage);
      console.log(errorMessage);
      return;
    }

    if (!phoneRegex.test(user.phone)) {
      const errorMessage = "Format de numéro de téléphone invalide";
      setError(errorMessage);
      toast.error(errorMessage);
      console.log(errorMessage);
      return;
    }

    if (Object.values(passwordValidations).includes(false)) {
      const errorMessage =
        "Le mot de passe ne remplit pas les conditions requises";
      setError(errorMessage);
      toast.error(errorMessage);
      console.log(errorMessage);
      return;
    }

    try {
      setLoading(true);
      setError("");
      const response = await axios.post("/api/users/signup", user);
      console.log(response);
      router.push("/login");
    } catch (error) {
      console.log("Error on signup: ", error.message);
      if (error.response && error.response.status === 409) {
        const errorMessage = "Utilisateur déjà existant";
        setError(errorMessage);
        toast.error(errorMessage);
      } else {
        const errorMessage = error.message;
        setError(errorMessage);
        toast.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(
      !(
        user.email &&
        user.password &&
        user.name &&
        user.familyName &&
        user.phone
      )
    );
    setPasswordValidations({
      length: passwordRegex.length.test(user.password),
      specialChar: passwordRegex.specialChar.test(user.password),
      uppercase: passwordRegex.uppercase.test(user.password),
      number: passwordRegex.number.test(user.password),
    });
  }, [
    user,
    passwordRegex.number,
    passwordRegex.length,
    passwordRegex.specialChar,
    passwordRegex.uppercase,
    user.password,
  ]);

  return (
    <div className="fixed inset-0 grid place-items-center w-svw h-svh bg-white duration-[20]">
      <div className="flex flex-col justify-center items-center rounded-md shadow-[0_0_70px_rgba(255,255,255,0.5)] p-6 gap-2 bg-white duration-300 w-[95%] md:w-[50%] xl:w-[25%]">
        <h1 className="text-2xl text-gray-800 font-semibold text-center mb-4">
          {loading ? "Loading..." : "Créer un compte"}
        </h1>
        <hr />
        <div className="w-full duration-300">
          <label className="input-label duration-300">
            Nom :
            <input
              className="my-1 border border-gray-300 input duration-300"
              id="name"
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              placeholder="Nom"
            />
          </label>
        </div>
        <div className="w-full duration-300">
          <label className="input-label duration-300">
            Prénom :
            <input
              className="my-1 border border-gray-300 input duration-300"
              id="familyName"
              type="text"
              value={user.familyName}
              onChange={(e) => setUser({ ...user, familyName: e.target.value })}
              placeholder="Prénom"
            />
          </label>
        </div>
        <div className="w-full duration-300">
          <label className="input-label duration-300">
            Numéro de téléphone :
            <input
              className="my-1 border border-gray-300 input duration-300"
              id="phone"
              type="text"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              placeholder="Numéro de téléphone"
            />
          </label>
        </div>
        <div className="w-full duration-300">
          <label className="input-label duration-300">
            Email :
            <input
              className="my-1 border border-gray-300 input duration-300"
              id="email"
              type="text"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email"
            />
          </label>
        </div>
        <div className="w-full duration-300">
          <label className="input-label duration-300">
            Mot de passe :
            <input
              className="my-1 border border-gray-300 input duration-300"
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Mot de passe"
            />
          </label>
          <ul className="text-sm text-gray-600 ml-4">
            {!passwordValidations.length && (
              <li className="text-red-600">Minimum 8 caractères</li>
            )}
            {!passwordValidations.specialChar && (
              <li className="text-red-600">Au moins un caractère spécial</li>
            )}
            {!passwordValidations.uppercase && (
              <li className="text-red-600">Au moins une majuscule</li>
            )}
            {!passwordValidations.number && (
              <li className="text-red-600">Au moins un chiffre</li>
            )}
          </ul>
        </div>

        {error && (
          <div className="text-white px-4 py-1 bg-orange-600  rounded-xl animate-scale-up-down will-change-transform font-semibold">
            {error}
          </div>
        )}

        <div className="flex flex-col items-center space-y-3">
          <button
            className={`btn-primary w-[80%] h-4 rounded-full my-2 p-4 border  duration-300 flex items-center justify-center ${
              buttonDisabled
                ? "bg-gray-800 cursor-not-allowed"
                : "bg-primary hover:bg-primary/80"
            }`}
            onClick={onSignup}
            disabled={buttonDisabled}
          >
            {buttonDisabled ? "Button Disabled" : "Sign Up"}
          </button>
          <p>Se connecter avec :</p>
          <div className="flex space-x-3 text-2xl">
            <FcGoogle className="duration-300 hover:-translate-y-1 cursor-pointer grayscale hover:grayscale-0"></FcGoogle>
            <FaLinkedin className="duration-300 hover:-translate-y-1 cursor-pointer grayscale hover:grayscale-0 text-blue-600"></FaLinkedin>
            <FaFacebookF className="duration-300 hover:-translate-y-1 cursor-pointer grayscale hover:grayscale-0 text-blue-800"></FaFacebookF>
          </div>
          <p>
            Vous avez déjà un compte ? {" "}
            <Link href="/login">
              <span className="text-primary cursor-pointer duration-300 inline-block hover:-translate-y-1">
                 Se connecter
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
