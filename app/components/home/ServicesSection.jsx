'use client';
import { motion } from "motion/react";
import { FaTooth, FaSmile, FaTeethOpen, FaRegGrinStars } from 'react-icons/fa';
import Container from "../common/Container";
import { TbDental } from "react-icons/tb";

const services = [
  {
    icon: <FaTooth className="w-8 h-8 text-white" />,
    title: "Dental Care",
    description: "We are excited to meet you and\nprovide the best dental care.",
  },
  {
    icon: <FaSmile className="w-8 h-8 text-white" />,
    title: "Cosmetic Dentistry",
    description: "We are excited to meet you and\nprovide the best dental care.",
  },
  {
    icon: <FaTeethOpen className="w-8 h-8 text-white" />,
    title: "Dental Implants",
    description: "We are excited to meet you and\nprovide the best dental care.",
  },
  {
    icon: <FaRegGrinStars className="w-8 h-8 text-white" />,
    title: "Teeth Whitening",
    description: "We are excited to meet you and\nprovide the best dental care.",
  },
];

const ServiceCard = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative bg-white rounded-[30px] outline  outline-[#0e384c]/5 px-7 py-8 flex flex-col gap-8 w-full max-w-[297.5px]  overflow-hidden"
  >
   {/* Icon */}
    <div className="z-10 w-12 h-12 p-3 bg-[#1e84b5] rounded-[14px] flex items-center justify-center">
      {icon}
    </div>
    {/* Title & Description */}
    <div className="z-10 flex flex-col gap-2.5 w-full">
      <div className="text-[#0e384c] text-xl font-semibold font-onest leading-normal">{title}</div>
      <div className="border-b border-[#0e384c]/5 pb-5">
        <div className="text-[#527282] text-base font-normal font-onest leading-7 whitespace-pre-line">
          {description}
        </div>
      </div>
      {/* Learn More */}
      <button className="mt-5 flex items-center gap-2 text-[#1e84b5] text-base font-semibold font-onest leading-relaxed rounded-[5px] hover:underline transition-all">
        Learn More
        <svg className="w-4 h-3.5" viewBox="0 0 16 14" fill="none">
          <path d="M1 7H15M15 7L9 1M15 7L9 13" stroke="#1e84b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  </motion.div>
);

const ServicesSection = () => (
  <section className="py-[100px] bg-[#f9fcff]">
    <Container>
      {/* Section Header */}
      <div className="flex flex-col items-center mb-12">
        <div className="relative flex items-center gap-3 mb-2">
          <TbDental className="text-[#1e84b5]" size={20} />
          <span className="text-[#1e84b5] text-sm font-semibold font-onest leading-none">Our Services</span>
        </div>
        <h2 className="text-center text-[#0e384c] text-[40px] font-bold font-onest leading-[48px] mb-4">
          Explore the solutions we provide
        </h2>
        <p className="text-center text-[#527282] text-base font-normal font-onest leading-7 max-w-2xl">
          The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and<br className="hidden md:block"/>specialist dental treatments. With dental practices throughout the world.
        </p>
      </div>
      {/* Services Cards */}
      <div className="flex flex-wrap justify-center gap-[30px]">
        {services.map((service, idx) => (
          <ServiceCard key={service.title} {...service} index={idx} />
        ))}
      </div>
    </Container>
  </section>
);

export default ServicesSection;