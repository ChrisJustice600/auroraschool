/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Section from "./Section";

// Définir l'interface pour les données du formulaire
interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

// Définir l'interface pour les erreurs du formulaire
interface FormErrors {
  [key: string]: string | undefined;
}

// Composant fonctionnel en TypeScript
const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitting(true);
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Simulating API call
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ fullName: "", email: "", phoneNumber: "", message: "" });
      }, 2000);
    } else {
      setErrors(newErrors);
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    }
  };

  return (
    <Section className="bg-gray-100 pb-20">
      <div className="bg-gray-100 flex-col items-center justify-center">
        <h2 className="text-left uppercase text-[2rem] font-caption text-primary font-bold mb-2">
          Nous contactez
        </h2>
        <div className="bg-white rounded-lg shadow-xl p-8 w-full font-roboto">
          {" "}
          {/*max-w-md */}
          {isSubmitted ? (
            <div className="text-center">
              <svg
                className="w-16 h-16 text-green-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="text-xl font-semibold text-gray-700">
                Merci votre message!
              </p>
              <p className="mt-2 text-gray-600">On se revoit à bientot.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-left text-sm font-medium text-gray-700"
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`p-2 mt-1 block w-full rounded-md border-primary shadow-sm focus:border-primary focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none ${
                    errors.fullName ? "border-red-500" : ""
                  }`}
                />
                {errors.fullName && (
                  <p className="text-left mt-1 text-sm text-red-500">
                    {errors.fullName}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-left text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`p-2 mt-1 block w-full rounded-md border-primary shadow-sm focus:border-primary focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-left mt-1 text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-left text-sm font-medium text-gray-700"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none ${
                      errors.phoneNumber ? "border-red-500" : ""
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-left mt-1 text-sm text-red-500">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-left text-sm font-medium text-gray-700"
                >
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none ${
                    errors.message ? "border-red-500" : ""
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-left mt-1 text-sm text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full md:w-auto py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "En cours..." : "Envoyé le Message"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
