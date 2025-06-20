'use client';
import { motion } from "motion/react";
import Image from "next/image";
import { FaUserFriends, FaTooth } from "react-icons/fa";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { TbDental } from "react-icons/tb";

const features = [
  {
    icon: <FaUserFriends className="text-white w-8 h-8" />,
    title: "Personalized Care For Patient",
    description: "We understand that each patient is\nunique, and listen to concerns.",
  },
  {
    icon: <FaTooth className="text-white w-8 h-8" />,
    title: "Cutting Edge Technology",
    description: "We invest in the latest dental\ntechnology to give you.",
  },
  {
    icon: <MdOutlineFamilyRestroom className="text-white w-8 h-8" />,
    title: "Family Friendly",
    description: "No matter your age or dental needs, we\nare here to help.",
  },
];

const stats = [
  {
    label: "Years Of Experience",
    value: (
      <>
        <span className="text-[#0e384c] text-[40px] font-bold font-onest leading-[48px]">20</span>
        <span className="text-[#0e384c] text-[40px] font-bold font-onest leading-[48px]">+</span>
      </>
    ),
    index: "01",
  },
  {
    label: "Happy Patients",
    value: (
      <>
        <span className="text-[#0e384c] text-[40px] font-bold font-onest leading-[48px]">5</span>
        <span className="text-[#0e384c] text-[40px] font-bold font-onest leading-[48px]">M+</span>
      </>
    ),
    index: "02",
  },
  {
    label: "Treatment Completed",
    value: (
      <>
        <span className="text-[#0e384c] text-[40px] font-bold font-onest leading-[48px]">986</span>
        <span className="text-[#0e384c] text-[40px] font-bold font-onest leading-[48px]">+</span>
      </>
    ),
    index: "03",
  },
];

const WhyChooseFeature = ({ icon, title, description, isLast }) => (
  <div className={`w-full flex flex-col justify-center items-start ${!isLast ? "pb-[31px] border-b border-white/10" : ""}`}>
    <div className="flex items-center w-full">
      <div className="pr-5 flex flex-col justify-start items-start">
        <div className="p-6 bg-white/10 rounded-[30px] flex items-center justify-center">
          <span className="w-12 h-12 flex items-center justify-center">{icon}</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-start gap-1">
        <div className="text-white text-xl font-semibold font-onest leading-normal">{title}</div>
        <div className="text-white text-base font-normal font-onest leading-7 whitespace-pre-line">{description}</div>
      </div>
    </div>
  </div>
);

const WhyChooseStat = ({ label, value, index, showDivider }) => (
  <div className="flex-1 min-w-[180px] max-w-[240px] relative flex flex-col gap-5 pr-0">
    <div className="text-[#0e384c] text-sm font-normal font-onest leading-relaxed mb-2">{index}</div>
    <div className="flex flex-col gap-2.5">
      <div className="flex items-start h-12">
        <div className="flex  justify-center items-center">{value}</div>
      </div>
      <div className="text-[#0e384c] text-xl font-semibold font-onest leading-normal">{label}</div>
    </div>
    {showDivider && (
      <div className="hidden md:block w-px h-[90px] absolute right-0 top-2 bg-[#0e384c]/10" />
    )}
  </div>
);

const WhyChooseUs = () => (
  <section className="relative bg-[#f9fcff] ">
      <div className="flex flex-col lg:flex-row w-full min-h-[700px]">
        {/* Left: Image with overlayed glassmorphism card */}
        <div className="relative flex-1 flex items-center justify-center min-h-[500px]">
          <Image
            src="/images/why-choose-bg-img.jpg"
            alt="Dentist with patient"
            fill
            className="object-cover rounded-[0px] lg:rounded-l-[0px] z-0"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 w-full max-w-[540px] mx-auto px-[40px] py-[80px] bg-white/10 rounded-[50px] outline outline-1 outline-white/10 backdrop-blur-[10px] flex flex-col gap-[30px]"
          >
            {features.map((feature, idx) => (
              <WhyChooseFeature
                key={feature.title}
                {...feature}
                isLast={idx === features.length - 1}
              />
            ))}
          </motion.div>
          {/* Overlay for darken effect */}
          <div className="absolute inset-0 bg-black/20 rounded-[0px] lg:rounded-l-[0px] z-0" />
        </div>
        {/* Right: Content */}
        <div className="flex-1 flex flex-col justify-center px-0 lg:px-[80px] py-12 lg:py-0 bg-[#f9fcff]">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-2"
          >
            <TbDental className="text-[#1e84b5]" size={20} />
            <span className="text-[#1e84b5] text-sm font-semibold font-onest leading-none">Why Choose Us</span>
          </motion.div>
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#0e384c] text-[40px] font-bold font-onest leading-[48px] mb-2"
          >
            Exceptional dental care tailored to your needs
          </motion.h2>
          {/* Bold Paragraph */}
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[#0e384c] text-base font-bold font-onest leading-7 mb-2"
          >
            We take the time to understand your individual needs and goals, creating customized treatment plans to help you achieve optimal oral health.
          </motion.p>
          {/* Sub Paragraph */}
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#527282] text-base font-normal font-onest leading-7 mb-8"
          >
            we believe that your dental experience should be more than just a routine visit. Our goal is to provide comprehensive, personalized care in a welcoming environment, where your comfort and well-being come first.
          </motion.p>
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-row items-stretch justify-between gap-0 divide-x divide-[#0e384c]/10 bg-transparent"
          >
            {stats.map((stat, idx) => (
              <WhyChooseStat
                key={stat.label}
                {...stat}
                showDivider={idx < stats.length - 1}
              />
            ))}
          </motion.div>
        </div>
      </div>
  </section>
);

export default WhyChooseUs;