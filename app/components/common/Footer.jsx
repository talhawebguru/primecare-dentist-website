import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import Container from "./Container";
import FooterLogo from "@/public/images/logo.svg";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  "Dental Care",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Teeth Whitening",
];

const contactInfo = [
  {
    icon: <FaPhoneAlt className="w-5 h-5 text-white" />,
    value: "+97126393677",
  },
  {
    icon: <HiOutlineMail className="w-5 h-5 text-white" />,
    value: "info@psdc.com",
  },
  {
    icon: <FaMapMarkerAlt className="w-5 h-5 text-white" />,
    value: "Al Khalidiyah- Abu Dhabi - United Arab Emirates",
  },
];

const Footer = () => (
  <footer className="bg-gradient-to-b from-[#0357b1] to-[#046ddd]  w-full overflow-x-hidden">
    <Container>
      {/* Top CTA */}
      <div className="flex flex-col md:flex-row justify-start md:justify-between md:items-center border-b border-white/10 pt-[50px] pb-10 gap-6">
        <h2 className="text-white text-3xl sm:text-[40px] font-bold font-onest sm:leading-[48px] mb-4 md:mb-0">
          Your Healthier Smile Awaits - Book Now!
        </h2>
        <a
          href="/contact"
          className="w-fit flex items-center gap-3 px-6 py-4 bg-white rounded-[14px] outline outline-white/10 text-secondary text-base font-semibold font-onest leading-[17.6px] transition hover:bg-secondary hover:text-white hover:outline-white hover:outline hover:scale-110 hover:shadow-lg group cursor-pointer"
        >
          Book Appointment
          <FaArrowRight className="text-secondary group-hover:text-white" />
        </a>
      </div>
      {/* Main Footer */}
      <div className="flex flex-row flex-wrap lg:flex-nowrap justify-between items-start gap-10 py-10">
        {/* Brand & Description */}
        <div className="flex-1 min-w-[220px] max-w-[400px]">
          <div className="flex items-center gap-2 mb-4">
            <Image src={FooterLogo} alt="Primecare Logo"  className="hover:scale-125 invert brightness-0 " />
          </div>
          <p className="text-white text-base font-normal font-onest leading-7 mb-6">
            The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and specialist dental treatments.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/psdc.org/" aria-label="Facebook" target="_blank" className="text-white text-lg hover:text-secondary transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/pearly.smile/?hl=en" aria-label="Instagram" target="_blank" className="text-white text-lg hover:text-secondary transition">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/pearly-smile-dental-center" aria-label="LinkedIn" target="_blank" className="text-white text-lg hover:text-secondary transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="min-w-[180px]">
          <h4 className="text-white text-xl font-bold font-onest leading-normal mb-5">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {quickLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white text-base font-normal font-onest leading-relaxed hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Services */}
        <div className="min-w-[180px]">
          <h4 className="text-white text-xl font-bold font-onest leading-normal mb-5">Services</h4>
          <ul className="flex flex-col gap-3">
            {services.map(service => (
              <li key={service} className="text-white text-base font-normal font-onest leading-relaxed">
                {service}
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Info */}
        <div className="min-w-[220px]">
          <h4 className="text-white text-xl font-bold font-onest leading-normal mb-5">Contact Info</h4>
          <ul className="flex flex-col gap-4">
            {contactInfo.map((info, idx) => (
              <li key={idx} className="flex items-center gap-3">
                {info.icon}
                <span className="text-white text-base font-normal font-onest leading-7">{info.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-white/10 py-6 text-center">
        <span className="text-white text-base font-normal font-onest leading-7">
          © PSDC 2025 All right reserved.
        </span>
      </div>
    </Container>
  </footer>
);

export default Footer;