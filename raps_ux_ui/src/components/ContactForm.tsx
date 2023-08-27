import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm: React.FC = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateEmail = (value: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setEmailError(t("contactForm.email.error.valid"));
    } else {
      setEmailError("");
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!name) {
      setNameError(t("contactForm.name.error"));
    } else {
      setNameError("");
    }
  
    if (!email) {
      setEmailError(t("contactForm.email.error"));
    } else {
      validateEmail(email);
    }
  
    if (!message) {
      setMessageError(t("contactForm.message.error"));
    } else {
      setMessageError("");
    }
  
    if (name && email && message && !emailError) {
      alert("Hola");
    }
  };
  

  return (
    <section className="py-16 bg-gray-300">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">{t("contactForm.title")}</h2>
        <form
          className="bg-white shadow-md rounded-md p-6"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold text-gray-800">
            {t("contactForm.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`mt-1 block w-full font-semibold border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 ${
                nameError && "border-red-500"
              }`}
            />
            {nameError && (
              <p className="text-red-500 text-sm mt-1">{nameError}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-semibold text-gray-800"
            >
             {t("contactForm.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              className={`mt-1 block w-full font-semibold border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 ${
                emailError ? "border-red-500" : "border-gray-300"
              }`}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block font-semibold text-gray-800"
            >
             {t("contactForm.message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`mt-1 block w-full font-semibold border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 ${
                messageError && "border-red-500"
              }`}
            />
            {messageError && (
              <p className="text-red-500 text-sm mt-1">{messageError}</p>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              {t("contactForm.button")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
