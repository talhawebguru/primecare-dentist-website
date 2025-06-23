"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import Container from "./Container";

const navLinks = [
  { label: "Home", hasDropdown: true, href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", hasDropdown: true, href: "/services" },
  { label: "Pages", hasDropdown: true, href: "/pages" },
  { label: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[rgba(14,56,76,1)] py-3 border-b border-white/10">
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={240}
              height={50}
              className="w-[160px] md:w-[240px] h-auto"
              priority
            />
          </Link>
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ label, hasDropdown, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="flex items-center gap-1 text-white text-base font-semibold font-onest leading-relaxed hover:text-[#2196C9] transition-colors"
                >
                  {label}
                  {hasDropdown && <IoIosArrowDown className="ml-1 text-lg" />}
                </Link>
              </li>
            ))}
          </ul>
          {/* Desktop Book Appointment Button */}
          <motion.div
            whileHover={{ backgroundColor: "transparent" }}
            whileTap={{ scale: 0.98 }}
            className="hidden lg:block"
          >
            <Link
              href="/book-appointment"
              className="flex items-center gap-4 bg-[#1e84b5] text-white px-5 py-4 rounded-2xl text-base font-semibold font-onest leading-none"
            >
              Book Appointment
              <svg className="w-4 h-3.5" viewBox="0 0 16 14" fill="none">
                <path
                  d="M1 7H15M15 7L9 1M15 7L9 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded-md text-white"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <HiMenu className="w-8 h-8" />
          </button>
        </nav>
      </Container>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 p-6 pr-20 lg:hidden"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center mb-8 ">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setMobileOpen(false)}
              >
                <Image
                  src="/images/logo.svg"
                  alt="Logo"
                  width={120}
                  height={40}
                  className="w-[120px] h-auto"
                  priority
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close mobile menu"
                className="text-[#0e384c] p-2"
              >
                <HiX className="w-8 h-8" />
              </button>
            </div>
            <nav>
              <ul className="flex flex-col gap-4 text-lg font-semibold text-[#0e384c]">
                {navLinks.map(({ label, hasDropdown, href }) => (
                  <li key={label} className="py-2 border-b border-gray-200">
                    <Link
                      href={href}
                      className="flex items-center gap-1 hover:text-[#2196C9] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {label}
                      {hasDropdown && <IoIosArrowDown className="ml-1 text-lg" />}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/book-appointment"
                  className="w-full flex items-center justify-center gap-3 bg-[#1e84b5] text-white px-5 py-3 rounded-xl text-base font-semibold font-onest leading-none"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Appointment
                  <svg className="w-4 h-3.5" viewBox="0 0 16 14" fill="none">
                    <path
                      d="M1 7H15M15 7L9 1M15 7L9 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;