'use client';
import { motion } from "motion/react";
import Image from "next/image";
import { FaUserMd, FaHandHoldingMedical, FaWallet } from 'react-icons/fa';
import VectorImg from "@/public/images/hero/Vector.png";
import Container from "../common/Container";

const HeroSection = () => {
  return (
    <section className="bg-[rgba(14,56,76,1)] relative pt-20 pb-32 overflow-hidden h-[calc(100vh-104px)] max-h-[900px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center z-10">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white font-onest leading-[67.2px]">
              Exceptional dental<br />
              care for every stage<br />
              of your journey
            </h1>
            <p className="text-base text-white/90 font-onest leading-7 max-w-lg">
              We are committed to providing top-notch dental care in a
              comfortable and friendly environment.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 bg-[#1e84b5] text-white px-5 py-4 rounded-2xl text-base font-semibold font-onest leading-none"
            >
              Book Appointment
              <svg className="w-4 h-3.5" viewBox="0 0 16 14" fill="none">
                <path d="M1 7H15M15 7L9 1M15 7L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            <hr className="my-6 border-white/10" />
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-between gap-4"
            >
              <div className="flex items-center gap-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center">
                  <FaUserMd className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-onest leading-snug">
                    Experience<br />Doctor
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center">
                  <FaHandHoldingMedical className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-onest leading-snug">
                    Personalized<br />Care
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center">
                  <FaWallet className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-onest leading-snug">
                    Flexible<br />Payment Option
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center gap-6"
          >
            <div className="space-y-6">
              <Image
                src="/images/hero/dental5.png"
                alt="Dental Care"
                width={178}
                height={389}
                className="rounded-[40px] object-cover"
                priority
              />
              <Image
                src="/images/hero/dental3.png"
                alt="Dental Treatment"
                width={178}
                height={180}
                className="rounded-[40px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <Image
                src="/images/hero/dental4.png"
                alt="Dental Procedure"
                width={178}
                height={180}
                className="rounded-[40px] object-cover"
              />
              <Image
                src="/images/hero/dental2.png"
                alt="Dental Office"
                width={178}
                height={389}
                className="rounded-[40px] object-cover"
              />
            </div>
            <div className="flex items-center">
              <Image
                src="/images/hero/dental1.png"
                alt="Dental Team"
                width={178}
                height={389}
                className="rounded-[40px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
           {/* Vector Image at Bottom */}
        <Image
          src={VectorImg}
          alt="Decorative Vector"
          className="absolute bottom-0 left-0 w-full h-auto object-cover  pointer-events-none select-none z-20"
        />
    </section>
  );
};

export default HeroSection;
