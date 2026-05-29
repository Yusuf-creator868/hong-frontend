import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", section: "about" },
    { label: "Branches", section: "branches" },
    { label: "Contact", section: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        bg-white/90
        backdrop-blur-xl
        border-b
        border-gray-100
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <img
              src={logo}
              alt="Hong Kong Academy"
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.section)}
                className="
                  relative
                  text-gray-700
                  font-medium
                  transition-colors
                  duration-300
                  hover:text-red-700
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-red-700
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                  cursor-pointer
                "
              >
                {link.label}
              </button>
            ))}

            {/* CTA Button */}
            <button
              className="
                bg-red-700
                text-white
                cursor-pointer
                px-7
                py-3
                rounded-2xl
                font-medium
                transition-all
                duration-300
                hover:bg-red-800
                hover:shadow-[0_10px_30px_rgba(220,38,38,0.35)]
                hover:-translate-y-1
                active:scale-95
              "
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                p-2
                rounded-xl
                text-gray-700
                hover:bg-gray-100
                transition-all
              "
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ${
              isOpen
                ? "max-h-[400px] opacity-100 pb-6"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              bg-white
              rounded-3xl
              border
              border-gray-100
              shadow-xl
              p-4
              space-y-2
            "
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.section)}
                className="
                  w-full
                  text-left
                  px-4
                  py-3
                  rounded-2xl
                  text-gray-700
                  font-medium
                  hover:bg-red-50
                  hover:text-red-700
                  transition-all
                  duration-300
                "
              >
                {link.label}
              </button>
            ))}

            {/* Mobile CTA */}
            <button
              className="
                w-full
                mt-3
                bg-red-700
                text-white
                py-4
                rounded-2xl
                font-medium
                transition-all
                duration-300
                hover:bg-red-800
              "
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}