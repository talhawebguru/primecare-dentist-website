"use client";
import { motion } from "motion/react";
import Image from "next/image";
import {
  FaRegSmile,
  FaUserMd,
  FaAmbulance,
  FaMicroscope,
  FaCheckCircle,
} from "react-icons/fa";
import { TbDental } from "react-icons/tb";
import { MdGroups } from "react-icons/md";
import Container from "../common/Container";

const aboutFeatures = [
  {
    icon: <FaUserMd className="text-secondary w-5 h-5" />,
    label: "Experienced Team",
  },
  {
    icon: <FaAmbulance className="text-secondary w-5 h-5" />,
    label: "Emergency Dental Services",
  },
  {
    icon: <FaMicroscope className="text-secondary w-5 h-5" />,
    label: "State-of-the-Art Technology",
  },
  {
    icon: <FaCheckCircle className="text-secondary w-5 h-5" />,
    label: "Comprehensive Services",
  },
];

const AboutSection = () => (
  <section className="py-12 lg:py-18 md:py-[100px] bg-white overflow-x-hidden">
    <Container>
      <div className="flex flex-col lg:flex-row flex-wrap items-center gap-10">
        {/* Left: Image with Happy Patients */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative lg:flex-1 w-full h-[520px] lg:h-auto lg:min-w-[320px] lg:max-w-[590px] flex justify-center"
        >
          <Image
            src="/images/dental-chair.png"
            alt="Modern Dental Facility"
            width={590}
            height={655}
            className="rounded-[40px] object-cover w-full h-auto"
            priority
          />
          {/* Happy Patients Badge */}
          <div className="absolute left-12 bottom-16 w-[175px]">
            <div className="p-6 bg-white/10 rounded-[40px] outline  outline-white/10 backdrop-blur-[5px] flex flex-col items-start">
              <div className="mb-4 rounded-[14px] outline outline-white/10 p-2 flex items-center justify-center bg-white/10">
                <FaRegSmile className="text-white w-7 h-7" />
              </div>
              <div>
                <div className="text-white text-xl font-semibold font-onest leading-normal">
                  875 +
                </div>
                <div className="text-white text-base font-normal font-onest leading-7">
                  Happy Patients
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Right: About Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 min-w-[320px] max-w-[650px] flex flex-col gap-6"
        >
          {/* About Us Label */}
          <div className="flex items-center gap-2">
            <TbDental className="text-secondary" size={20} />
            <span className="text-secondary text-sm font-semibold font-onest leading-none">
              About Us
            </span>
          </div>
          {/* Heading */}
          <h2 className="text-primary text-3xl sm:text-[40px] font-bold font-onest sm:leading-[48px]">
            The evolution of our company
            <br />
            and the people who made It
            <br />
            possible
          </h2>
          {/* Paragraph */}
          <p className="text-[#527282] text-base font-normal font-onest leading-7">
            The goal of our clinic is to provide friendly, caring dentistry and
            the highest level of
            <br />
            general, cosmetic and specialist dental treatments With dental
            practice throughout
            <br />
            the world.
          </p>
          {/* Features & Years of Experience */}
          <div className="flex flex-wrap gap-8 items-center">
            {/* Features List */}
            <div className="flex flex-col gap-5 flex-1 min-w-[220px]">
              {aboutFeatures.map((feature) => (
                <div key={feature.label} className="flex items-center gap-3">
                  <span className="w-[38px] h-[38px] flex items-center justify-center bg-secondary/10 rounded-[12px]">
                    {feature.icon}
                  </span>
                  <span className="text-primary text-xl font-semibold font-onest leading-normal">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
            {/* Years of Experience */}
            <div className="flex flex-col items-start bg-secondary rounded-[30px] p-8 min-w-[180px] max-w-[220px]">
              <div className="mb-4 bg-white rounded-xl flex items-center justify-center w-14 h-14">
                <FaUserMd className="text-secondary" size={48} />
              </div>
              <div className="text-white text-[40px] font-bold font-onest leading-[48px]">
                25 +
              </div>
              <div className="text-white text-base font-normal font-onest leading-7">
                Years Of Experience
              </div>
            </div>
          </div>
          {/* Read More Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            className="mt-4 inline-flex items-center w-fit gap-3 bg-secondary rounded-[14px] px-7 py-[17px] text-white text-base font-semibold font-onest leading-[17.6px] transition-all cursor-pointer"
          >
            Read More
            <svg className="w-4 h-3.5" viewBox="0 0 16 14" fill="none">
              <path
                d="M1 7H15M15 7L9 1M15 7L9 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </Container>
  </section>
);

export default AboutSection;
