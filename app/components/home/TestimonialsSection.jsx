'use client';
import { motion } from "motion/react";
import Image from "next/image";
import Container from "../common/Container";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "The care and attention I received was outstanding. The team made me feel comfortable throughout my treatment.",
      name: "Sarah Parker",
      role: "Patient",
      image: "/images/testimonials/patient1.jpg"
    },
    {
      text: "Exceptional service and professionalism. I couldn't be happier with the results of my dental treatment.",
      name: "Michael Brown",
      role: "Patient",
      image: "/images/testimonials/patient2.jpg"
    },
    {
      text: "The best dental experience I've ever had. The staff is friendly and the facilities are top-notch.",
      name: "Emma Wilson",
      role: "Patient",
      image: "/images/testimonials/patient3.jpg"
    }
  ];

  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E3547] mb-4">
            Listen from our happy patients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our patients have to say about their experience with our dental care services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1E3547]">{testimonial.name}</h3>
                  <p className="text-[#0075FF]">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
