'use client';
import { useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import Container from "../common/Container";
import { TbDental } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-[#f9fcff] rounded-[30px] p-8 flex flex-col h-full shadow-none outline outline-[#0e384c]/5"
  >
    <FaQuoteLeft className="text-secondary w-8 h-8 mb-6" />
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
        <div className="text-primary text-xl font-semibold font-onest leading-normal capitalize">
          {testimonial.name}
        </div>
        <div className="text-[#527282] text-base font-normal font-onest leading-7">{testimonial.role}</div>
      </div>
    </div>
  </motion.div>
);

const TestimonialsSection = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-12 sm:py-[100px] bg-white overflow-x-hidden">
      <Container>
        <div className="text-center mb-16">
          <div className="flex justify-center gap-2 items-center mb-2">
            <TbDental className="text-secondary" size={20} />
            <span className="text-secondary text-sm font-semibold font-onest leading-none">Testimonials</span>
          </div>
          <h2 className="text-primary text-3xl sm:text-[40px] font-bold font-onest sm:leading-[48px] mb-4">
            Listen from our happy patients
          </h2>
          <p className="text-[#527282] text-base font-normal font-onest leading-7 max-w-2xl mx-auto">
            The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and
            <br className="hidden md:block" />
            specialist dental treatments. With dental practices throughout the world.
          </p>
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={32}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
            onSwiper={swiper => (swiperRef.current = swiper)}
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={testimonial.name}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Pagination Arrows */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              className="testimonial-prev w-10 h-10 flex items-center justify-center rounded-full border border-[#1e84b5] text-secondary hover:bg-secondary hover:text-white transition"
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="testimonial-next w-10 h-10 flex items-center justify-center rounded-full border border-[#1e84b5] text-secondary hover:bg-secondary hover:text-white transition"
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;