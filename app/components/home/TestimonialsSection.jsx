'use client';
import { motion } from "motion/react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import Container from "../common/Container";
import { TbDental } from "react-icons/tb";

const testimonials = [
  {
    text: `I want to say thank you to my doctor Steve! Vivamus sagittis massa vitae bibendum rhoncus. Duis cursus.” “Thank you for helping me overcome my fear of the dentist! Vivamus sagittis massa vitae bibendum rhoncus. Duis cursus.`,
    name: "jenny wilson",
    role: "Patient",
    image: "/images/testimonials/author-1.png",
  },
  {
    text: `I want to say thank you to my doctor Steve! Vivamus sagittis massa vitae bibendum rhoncus. Duis cursus.” “Thank you for helping me overcome my fear of the dentist! Vivamus sagittis massa vitae bibendum rhoncus. Duis cursus.`,
    name: "Dianne Russell",
    role: "Patient",
    image: "/images/testimonials/author-2.png",
  },
  {
    text: `I want to say thank you to my doctor Steve! Vivamus sagittis massa vitae bibendum rhoncus. Duis cursus.” “Thank you for helping me overcome my fear of the dentist! Vivamus sagittis massa vitae bibendum rhoncus. Duis cursus.`,
    name: "Jane Cooper",
    role: "Patient",
    image: "/images/testimonials/author-3.png",
  },
];

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-[#f9fcff] rounded-[30px] p-8 flex flex-col h-full shadow-none outline outline-[#0e384c]/5"
  >
    <FaQuoteLeft className="text-[#1e84b5] w-8 h-8 mb-6" />
    <p className="text-[#527282] text-base font-normal font-onest leading-7 mb-8 whitespace-pre-line">
      {testimonial.text}
    </p>
    <div className="flex items-center gap-4 mt-auto">
      <div className="relative w-12 h-12 rounded-full overflow-hidden">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover"
          sizes="48px"
        />
      </div>
      <div>
        <div className="text-[#0e384c] text-xl font-semibold font-onest leading-normal capitalize">
          {testimonial.name}
        </div>
        <div className="text-[#527282] text-base font-normal font-onest leading-7">{testimonial.role}</div>
      </div>
    </div>
  </motion.div>
);

const TestimonialsSection = () => (
  <section className="py-[100px] bg-white">
    <Container>
      <div className="text-center mb-16">
        <div className="flex justify-center gap-2 items-center mb-2">
          <TbDental className="text-[#1e84b5]" size={20} />
          <span className="text-[#1e84b5] text-sm font-semibold font-onest leading-none">Testimonials</span>
        </div>
        <h2 className="text-[#0e384c] text-[40px] font-bold font-onest leading-[48px] mb-4">
          Listen from our happy patients
        </h2>
        <p className="text-[#527282] text-base font-normal font-onest leading-7 max-w-2xl mx-auto">
          The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and<br className="hidden md:block" />
          specialist dental treatments. With dental practices throughout the world.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} index={idx} />
        ))}
      </div>
    </Container>
  </section>
);

export default TestimonialsSection;