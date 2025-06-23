"use client";
import { motion } from "motion/react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Container from "../common/Container";
import { TbDental } from "react-icons/tb";

const contactInfo = [
  {
    icon: <FaPhoneAlt className="text-white w-6 h-6" />,
    label: "Contact Details",
    value: "+97126393677",
  },
  {
    icon: <FaMapMarkerAlt className="text-white w-6 h-6" />,
    label: "Address",
    value: "Al Khalidiyah- Abu Dhabi - United Arab Emirates",
  },
  {
    icon: <HiOutlineMail className="text-white w-6 h-6" />,
    label: "Email Us",
    value: "info@psdc.com",
  },
];

const ContactCard = ({ icon, label, value, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex-1 min-w-[300px] max-w-[420px] bg-white rounded-[30px] outline outline-[#0e384c]/5 p-[21px] flex flex-col justify-center"
  >
    <div className="flex items-center">
      <div className="pr-[15px]">
        <div className="p-2.5 bg-secondary rounded-xl flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <div className="text-primary text-xl font-semibold font-onest capitalize leading-normal">
          {label}
        </div>
        <div className="text-[#527282] text-base font-normal font-onest leading-7 mt-1">
          {value}
        </div>
      </div>
    </div>
  </motion.div>
);

const ContactSection = () => (
  <section className="pt-[50px] pb-[100px] bg-[#f8fbff] overflow-x-hidden">
    <Container>
      {/* Section Header */}
      <div className="flex flex-col items-center max-w-[820px] mx-auto pb-5">
        <div className="flex items-center gap-2 mb-2">
          <TbDental className="text-secondary" size={20} />
          <span className="text-secondary text-sm font-semibold font-onest capitalize leading-none">
            Contact Us
          </span>
        </div>
        <h2 className="text-center text-primary text-3xl sm:text-[40px] font-bold font-onest sm:leading-[48px] mb-2">
          Get in touch with us
        </h2>
        <p className="text-center text-[#527282] text-base font-normal font-onest leading-7">
          The goal of our clinic is to provide friendly, caring dentistry and
          the highest level of general, cosmetic, and
          <br className="hidden md:block" />
          specialist dental treatments. With dental practices throughout the
          world.
        </p>
      </div>
      {/* Contact Cards */}
      <div className="w-full flex flex-wrap flex-row gap-[30px] justify-center items-stretch mb-10">
        {contactInfo.map((info, idx) => (
          <ContactCard key={info.label} {...info} delay={idx * 0.1} />
        ))}
      </div>
      {/* Map */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1280px] rounded-[40px] overflow-hidden lg:grayscale-100 hover:grayscale-0 transition-all duration-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89585.1251456182!2d54.3186174388773!3d24.50111566632959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e665d7e1cf441%3A0x457a86d182f2a723!2sPearly%20Smile%20Dental%20Center%20LLC%20Khalidiya%20Abu%20Dhabi!5e0!3m2!1sen!2s!4v1750684300794!5m2!1sen!2s"
            width="100%"
            height="500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[500px] border-0"
            title="Google Map"
            zoom="16"
          ></iframe>
        </div>
      </div>
    </Container>
  </section>
);

export default ContactSection;
