'use client';
import { motion } from "motion/react";
import { FaPhoneAlt, FaClock, FaRegEnvelope } from 'react-icons/fa';
import Container from "../common/Container";

const infoItems = [
  {
    icon: <FaPhoneAlt className="text-white w-6 h-6" />,
    title: "Need Dental Services ?",
    subtitle: "Call on : (+01) 987 828 745",
  },
  {
    icon: <FaClock className="text-white w-6 h-6" />,
    title: "Opening Hours",
    subtitle: "Mon to Sat 9:00AM to 9:00PM",
  },
  {
    icon: <FaRegEnvelope className="text-white w-6 h-6" />,
    title: "Schedule Appointment",
    subtitle: "Mail us : appointment@domain.com",
  },
];

const ContactInfoItem = ({ icon, title, subtitle, showDivider }) => (
  <div className="grow flex items-center py-2 mx-6 relative">
    <div className="pr-4">
      <div className="p-3 bg-secondary rounded-xl flex items-center justify-center">
        {icon}
      </div>
    </div>
    <div>
      <div className="text-primary text-xl font-semibold font-onest leading-normal">
        {title}
      </div>
      <div className="text-[#527282] text-base font-normal font-onest leading-7">
        {subtitle}
      </div>
    </div>
    {showDivider && (
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 border-r border-[#0e384c]/5" />
    )}
  </div>
);

const ContactInfoBar = () => (
  <section className="bg-white border-b border-[#0e384c]/5 overflow-x-hidden">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-wrap xl:flex-nowrap justify-between items-center py-8"
      >
        {infoItems.map((item, idx) => (
          <ContactInfoItem
            key={item.title}
            {...item}
            showDivider={idx < infoItems.length - 1}
          />
        ))}
      </motion.div>
    </Container>
  </section>
);

export default ContactInfoBar;