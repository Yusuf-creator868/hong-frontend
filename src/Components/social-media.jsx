import { motion } from "framer-motion";

import {
  FaInstagram,
  FaFacebookF,
  FaTelegramPlane,
} from "react-icons/fa";

export default function SocialMedia() {
  const socialLinks = [
    {
      icon: FaInstagram,
      name: "Instagram",
      followers: "18K+",
      url: "https://instagram.com",
      bg: "group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-orange-500",
    },
    {
      icon: FaFacebookF,
      name: "Facebook",
      followers: "25K+",
      url: "https://facebook.com",
      bg: "group-hover:bg-blue-600",
    },
    {
      icon: FaTelegramPlane,
      name: "Telegram",
      followers: "12K+",
      url: "https://telegram.org",
      bg: "group-hover:bg-sky-500",
    },
  ];

  return (
    <section className="py-28 bg-white">
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
            Social Media
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Connect With Us
          </h2>

          <p className="text-gray-500 text-lg mt-5 max-w-2xl mx-auto">
            Bizning ijtimoiy tarmoqlarimiz orqali barcha yangiliklardan
            xabardor bo‘ling.
          </p>
        </motion.div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="
                  group
                  relative
                  overflow-hidden
                  bg-white
                  border
                  border-gray-100
                  rounded-3xl
                  p-10
                  shadow-sm
                  hover:shadow-2xl
                  transition-all
                  duration-500
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    bg-gradient-to-br
                    from-red-50
                    to-transparent
                  "
                />

                {/* Icon */}
                <div
                  className={`
                    relative
                    z-10
                    w-24
                    h-24
                    rounded-3xl
                    bg-red-50
                    flex
                    items-center
                    justify-center
                    text-red-700
                    transition-all
                    duration-500
                    ${social.bg}
                    group-hover:text-white
                    group-hover:scale-110
                  `}
                >
                  <Icon className="text-[42px]" />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    {social.name}
                  </h3>

                  <p className="text-gray-500 text-lg mb-6">
                    Follow us for updates and news
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-red-700 text-2xl font-bold">
                      {social.followers}
                    </span>

                    <span
                      className="
                        text-gray-400
                        group-hover:text-red-700
                        transition-colors
                        duration-300
                      "
                    >
                      Followers
                    </span>
                  </div>
                </div>

                {/* Bottom Hover Line */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-0
                    bg-red-700
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}