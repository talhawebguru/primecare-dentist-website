'use client';
import { motion } from "motion/react";
import { FaRegClipboard, FaUserMd, FaHandsHelping } from 'react-icons/fa';
import Container from "../common/Container";
import { TbDental } from "react-icons/tb";

const processSteps = [
  {
    icon: <FaRegClipboard className="text-secondary" size={48} />,
    title: "Initial Consultation",
    description:
      "Your journey begins with an in-depth consultation. We'll listen to your concerns, discuss your goals.",
  },
  {
    icon: <FaUserMd className="text-secondary" size={48} />,
    title: "Treatment By Experts",
    description:
      "Once the plan is finalized, we'll proceed with your treatment. Our expert team will guide you.",
  },
  {
    icon: <FaHandsHelping className="text-secondary" size={48} />,
    title: "Follow-Up Care",
    description:
      "After your treatment, we'll schedule any necessary follow-up appointments to monitor your progress.",
  },
];

const ProcessStep = ({ step, index, isLast }) => (
  <div className="relative flex items-start gap-14 min-h-[120px]">
    {/* Vertical line */}
    {!isLast && (
      <div className="absolute left-9 top-20 h-[80px] w-px bg-primary/5 z-0" />
    )}
    {/* Icon + Number */}
    <div className="relative z-10">
      <div className="w-20 h-20 flex items-center justify-center">
        <div className="w-20 h-20 bg-white rounded-[20px] outline outline-[#0e384c]/10 flex items-center justify-center relative">
          {step.icon}
          {/* Number badge */}
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-md">
            <span className="text-white text-base font-bold font-onest leading-loose">{index + 1}</span>
          </div>
        </div>
      </div>
    </div>
    {/* Step Content */}
    <div className="flex flex-col gap-2 pt-1">
      <div className="text-primary text-xl font-semibold font-onest leading-normal">{step.title}</div>
      <div className="text-[#527282] text-base font-normal font-onest leading-7">{step.description}</div>
    </div>
  </div>
);

const ProcessSection = () => (
  <section className="py-12 sm:py-[100px] bg-white overflow-x-hidden">
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Title, Heading, Paragraph, Button */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col gap-8"
        >
          {/* Our Process Label */}
          <div className="flex items-center gap-2 mb-2">
            <TbDental className="text-secondary" size={20} />
            <span className="text-secondary text-sm font-semibold font-onest leading-none">Our Process</span>
          </div>
          {/* Heading */}
          <h2 className="text-primary text-3xl sm:text-[40px] font-bold font-onest sm:leading-[48px]">
            A Step by Step Guide to Our <br className="hidden sm:block" />
            Dental Care Process
          </h2>
          {/* Paragraph */}
          <p className="text-[#527282] text-base font-normal font-onest leading-7 max-w-xl">
            The goal of our clinic is to provide friendly, caring dentistry and the highest<br />
            level of general, cosmetic, and specialist dental treatments. With dental<br />
            practices throughout the world.
          </p>
          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            className="mt-2 cursor-pointer flex items-center gap-3 bg-secondary rounded-[14px] px-7 py-[17px] text-white text-base font-semibold font-onest leading-[17.6px] transition-all w-fit"
          >
            Get In Touch
            <svg className="w-4 h-3.5" viewBox="0 0 16 14" fill="none">
              <path d="M1 7H15M15 7L9 1M15 7L9 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </motion.div>
        {/* Right: Steps */}
        <div className="flex flex-col gap-10 sm:gap-[60px] pt-3">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProcessStep step={step} index={idx} isLast={idx === processSteps.length - 1} />
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default ProcessSection;