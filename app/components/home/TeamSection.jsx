'use client';
import { motion } from "motion/react";
import Image from "next/image";
import Container from "../common/Container";

const TeamSection = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Dentist",
      image: "/images/team/doctor1.jpg",
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      image: "/images/team/doctor2.jpg",
    },
    {
      name: "Dr. Emily Davis",
      role: "Dental Surgeon",
      image: "/images/team/doctor3.jpg",
    },
    {
      name: "Dr. James Wilson",
      role: "Periodontist",
      image: "/images/team/doctor4.jpg",
    },
  ];

  return (
    <section className="py-20 bg-[#F8FBFF]">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E3547] mb-4">
            Experienced and caring dental team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our team of experienced dental professionals dedicated to providing you with exceptional care
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#1E3547] mb-1">{member.name}</h3>
                <p className="text-[#0075FF]">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
