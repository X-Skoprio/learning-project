"use client";
import React, { useState } from "react";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    familyName: "",
    phoneNumber: "",
    email: "",
    notes: "",
  });

  const [errors, setErrors] = useState({
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^(?:(?:\+|00)33|0)\d{9}$/;
    return regex.test(phoneNumber);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumberValid = validatePhoneNumber(formData.phoneNumber);
    const emailValid = validateEmail(formData.email);

    if (!phoneNumberValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Numéro de téléphone invalide.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "",
      }));
    }

    if (!emailValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email invalide.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }

    if (phoneNumberValid && emailValid) {
      // Handle form submission
      console.log("Form data:", formData);
    }
  };

  return (
    <>
    
        <div className=" w-full  flex items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center my-16 px-16">
            <h1 className="text-4xl font-bold text-primary py-8">
              Prise de contact
            </h1>
            <form onSubmit={handleSubmit} className="w-full max-w-lg mt-6">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Prénom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Votre prénom"
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="familyName"
                >
                  Nom de famille
                </label>
                <input
                  id="familyName"
                  name="familyName"
                  type="text"
                  placeholder="Votre nom de famille"
                  value={formData.familyName}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phoneNumber"
                >
                  Numéro de téléphone
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder="Votre numéro de téléphone"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`input ${
                    errors.phoneNumber ? "border-red-500" : ""
                  }`}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs italic">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="notes"
                >
                  Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  placeholder="Vos notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="input rounded-xl"
                />
              </div>
              <div className="flex items-center justify-center ">
                <button type="submit" className="btn-primary mt-4 w-[50%]">
                  Soumettre
                </button>
              </div>
            </form>
          </div>
          <div className="w-[5%] h-full hidden items-center justify-end md:flex  "></div>
        </div>
    </>
  );
};

export default ContactForm;
