"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaTelegramPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaLocationArrow,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: FaPhoneAlt,
      title: "Phone",
      details: ["+998 90 123 45 67", "+998 90 765 43 21"],
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: [
        "info@hongkongacademy.uz",
        "support@hongkongacademy.uz",
      ],
    },
    {
      icon: FaLocationArrow,
      title: "Location",
      details: ["Toshkent shahri", "Hong Kong Academy"],
    },
  ];

  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-red-700 font-semibold uppercase tracking-widest mb-3">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Savolingiz Bormi?
          </h2>

          <p className="text-gray-500 text-lg mt-5 max-w-2xl mx-auto">
            Biz bilan bog‘laning va barcha savollaringizga tezkor javob oling.
          </p>
        </motion.div>

        {/* Top Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="
                  group
                  bg-white
                  rounded-3xl
                  p-10
                  border
                  border-gray-100
                  shadow-sm
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  text-center
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-20
                    h-20
                    mx-auto
                    rounded-3xl
                    bg-red-50
                    flex
                    items-center
                    justify-center
                    text-red-700
                    transition-all
                    duration-500
                    group-hover:bg-red-700
                    group-hover:text-white
                    group-hover:scale-110
                  "
                >
                  <Icon className="text-3xl" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-5">
                  {info.title}
                </h3>

                <div className="space-y-2">
                  {info.details.map((detail, dIndex) => (
                    <p
                      key={dIndex}
                      className="text-gray-500 text-lg"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Contact Area */}
       
      </div>
    </section>
  );
}