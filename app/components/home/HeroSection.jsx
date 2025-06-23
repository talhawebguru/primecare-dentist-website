"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { FaUserMd, FaHandHoldingMedical, FaWallet, FaArrowRight } from "react-icons/fa";
import VectorImg from "@/public/images/hero/Vector.png";
import Container from "../common/Container";

const features = [
  {
    icon: <FaUserMd className="w-6 h-6 text-white" />,
    label: (
      <>
        Experience
        <br />
        Doctor
      </>
    ),
  },
  {
    icon: <FaHandHoldingMedical className="w-6 h-6 text-white" />,
    label: (
      <>
        Personalized
        <br />
        Care
      </>
    ),
  },
  {
    icon: <FaWallet className="w-6 h-6 text-white" />,
    label: (
      <>
        Flexible
        <br />
        Payment Option
      </>
    ),
  },
];

const FeatureCard = ({ icon, label }) => (
  <motion.div
    className="relative grow flex items-center gap-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl cursor-pointer overflow-hidden group"
    whileHover="hover"
    initial="rest"
    animate="rest"
  >
    {/* Animated radial background */}
    <motion.div
      variants={{
        rest: { scale: 0, opacity: 0 },
        hover: {
          scale: 4,
          opacity: 1,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #046DDD 0%, #046DDD 100%, transparent 100%)",
      }}
    />
    <div className="relative z-10 w-12 h-12 flex items-center justify-center">
      {icon}
    </div>
    <div className="relative z-10">
      <p className="text-white font-onest leading-snug">{label}</p>
    </div>
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#0357b1] to-[#046ddd] relative pt-12 sm:pt-20 pb-20 sm:pb-32  lg:h-[calc(100vh-104px)] lg:max-h-[900px] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center z-10">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-onest md:leading-[67.2px]">
              Exceptional dental
              <br />
              care for every stage
              <br />
              of your journey
            </h1>
            <p className="text-base text-white/90 font-onest leading-7 max-w-lg">
              We are committed to providing top-notch dental care in a
              comfortable and friendly environment.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 px-6 py-4 bg-white rounded-[14px] outline outline-white/10 text-secondary text-base font-semibold font-onest leading-[17.6px] transition hover:bg-secondary hover:text-white hover:outline-white hover:outline hover:scale-110 hover:shadow-lg group cursor-pointer"
            >
              Book Appointment
              <FaArrowRight className="text-secondary group-hover:text-white" />
            </motion.button>
            <hr className="my-6 border-white/10" />
            {/* Features with animated hover */}
            <div className="flex items-stretch flex-wrap sm:flex-nowrap justify-between gap-4">
              {features.map((feature, idx) => (
                <FeatureCard
                  key={idx}
                  icon={feature.icon}
                  label={feature.label}
                />
              ))}
            </div>
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
                className="sm:rounded-[40px] object-cover"
                priority
              />
              <Image
                src="/images/hero/dental3.png"
                alt="Dental Treatment"
                width={178}
                height={180}
                className="sm:rounded-[40px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <Image
                src="/images/hero/dental4.png"
                alt="Dental Procedure"
                width={178}
                height={180}
                className="sm:rounded-[40px] object-cover"
              />
              <Image
                src="/images/hero/dental2.png"
                alt="Dental Office"
                width={178}
                height={389}
                className="sm:rounded-[40px] object-cover"
              />
            </div>
            <div className="flex items-center">
              <Image
                src="/images/hero/dental1.png"
                alt="Dental Team"
                width={178}
                height={389}
                className="sm:rounded-[40px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
      {/* Vector Image at Bottom */}
      <Image
        src={VectorImg}
        alt="Decorative Vector"
        className="absolute bottom-0 left-0 w-full h-48 lg:h-auto object-cover  pointer-events-none select-none z-20"
      />
    </section>
  );
};

export default HeroSection;
