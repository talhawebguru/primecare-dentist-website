"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import Container from "./Container";

const navLinks = [
  { label: "Home", hasDropdown: true, href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", hasDropdown: true, href: "/services" },
  { label: "Pages", hasDropdown: true, href: "/pages" },
  { label: "Contact Us", href: "/contact" },
];

const Header = () => (
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
            className=""
          />
        </Link>
        {/* Navigation */}
        <ul className="flex items-center gap-8">
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
        {/* Book Appointment Button */}
        <motion.div
          whileHover={{ backgroundColor: "transparent" }}
          whileTap={{ scale: 0.98 }}
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
      </nav>
    </Container>
  </header>
);

export default Header;
