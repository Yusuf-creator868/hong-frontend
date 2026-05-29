import { motion } from 'framer-motion';
import {
  FaInstagram,
  FaFacebookF,
  FaTelegramPlane,
} from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Blog', 'Press'],
    },
    {
      title: 'Learning',
      links: ['Courses', 'Pricing', 'Scholarships', 'Resources'],
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact Us', 'FAQ', 'Community'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'],
    },
  ];

  const socialLinks = [
    { icon: FaInstagram, url: '#' },
    { icon: FaFacebookF, url: '#' },
    { icon:  FaTelegramPlane, url: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zfvVu1LfuGesQz5eY9RznAMFHF3kV7.png"
              alt="Hong Kong Academy"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming lives through quality education and mentorship.
            </p>
          </motion.div>

          {/* Links */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-white mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, lIndex) => (
                  <li key={lIndex}>
                    <a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="h-px bg-gray-800 mb-8"
        />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} Hong Kong Academy. All rights reserved.
          </p>

          {/* Social Links */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.2, color: '#c40011' }}
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
