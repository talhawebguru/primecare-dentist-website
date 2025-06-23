'use client';
import { motion } from "motion/react";
import Image from "next/image";
import Container from "../common/Container";
import { TbDental } from "react-icons/tb";

const team = [
  {
    name: "Dr.Rohini Joe",
    role: "Senior Chauffeur",
    image: "/images/team/team-1.png",
  },
  {
    name: "Taylor Smith",
    role: "City Tour Guide",
    image: "/images/team/team-2.png",
  },
  {
    name: "Jordan Brown",
    role: "Distance Driver",
    image: "/images/team/team-3.png",
  },
  {
    name: "Jacob Jones",
    role: "Dentist",
    image: "/images/team/team-4.png",
  },
];

const TeamCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="w-[297.5px] flex flex-col items-center gap-[19px]"
  >
    <div className="w-full max-w-[297.5px] flex flex-col items-center overflow-hidden">
      <div className="w-full rounded-[30px] overflow-hidden flex flex-col items-center">
        <Image
          src={member.image}
          alt={member.name}
          width={297}
          height={357}
          className="w-[297.5px] h-[357px] object-cover"
          priority={index === 0}
        />
      </div>
    </div>
    <div className="w-full max-w-[297.5px] flex flex-col items-center">
      <div className="flex flex-col items-center gap-1">
        <div className="py-0.5 flex justify-center items-start">
          <div className="text-center text-[#0e384c] text-xl font-semibold font-onest leading-normal">{member.name}</div>
        </div>
        <div className="pb-0.5 flex flex-col items-center">
          <div className="text-center text-[#527282] text-base font-normal font-onest leading-7">{member.role}</div>
        </div>
      </div>
    </div>
  </motion.div>
);

const TeamSection = () => (
  <section className="py-[100px] bg-white overflow-x-hidden">
    <Container>
      <div className="flex flex-col items-center gap-5">
        {/* Section Header */}
        <div className="w-full max-w-[845px] pb-5 flex flex-col items-center mx-auto relative">
          {/* Our Team label */}
          <div className="flex items-center mb-2">
            <TbDental className="text-[#1e84b5]" size={20} />
            <span className="text-[#1e84b5] text-sm font-semibold font-onest leading-none">Our Team</span>
          </div>
          {/* Heading */}
          <h2 className="text-center text-[#0e384c] text-[40px] font-bold font-onest leading-[48px] mb-2">
            Experienced and caring dental team
          </h2>
          {/* Description */}
          <p className="text-center text-[#527282] text-base font-normal font-onest leading-7">
            The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and<br className="hidden md:block" />
            specialist dental treatments. With dental practices throughout the world.
          </p>
        </div>
        {/* Team Grid */}
        <div className="w-full flex flex-wrap justify-center items-center gap-[30px]">
          {team.map((member, idx) => (
            <TeamCard key={member.name} member={member} index={idx} />
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default TeamSection;