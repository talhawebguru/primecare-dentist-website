'use client';
import { motion } from "motion/react";
import Image from "next/image";
import Container from "../common/Container";
import { FaArrowRight } from "react-icons/fa6";
import { TbDental } from "react-icons/tb";

const posts = [
  {
    title: "The Importance Regular Dental Check-Ups",
    excerpt:
      "Maintaining a healthy smile requires consistent care and good habits.\nBrush and floss daily to […]",
    image: "/images/blog/blog-1.png",
    link: "#",
  },
  {
    title: "How Often Should You Really Visit the Dentist?",
    excerpt:
      "Maintaining a healthy smile requires consistent care and good habits.\nBrush and floss daily to […]",
    image: "/images/blog/blog-2.png",
    link: "#",
  },
  {
    title: "Benefit of regular Dental Checkup",
    excerpt:
      "Maintaining a healthy smile requires consistent care and good habits.\nBrush and floss daily to […]",
    image: "/images/blog/blog-1.png",
    link: "#",
  },
  {
    title: "Pediatric Dental Care Importance",
    excerpt:
      "Maintaining a healthy smile requires consistent care and good habits.\nBrush and floss daily to […]",
    image: "/images/blog/blog-2.png",
    link: "#",
  },
];

const BlogCard = ({ post, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-[40px] outline outline-[#0e384c]/5 p-[21px] flex items-start gap-6 w-full h-[281px] min-w-[320px] max-w-full"
  >
    <div className="rounded-[40px] overflow-hidden min-w-[291.5px] max-w-[291.5px] h-[239px] flex items-center">
      <Image
        src={post.image}
        alt={post.title}
        width={291}
        height={239}
        className="object-cover w-[291.5px] h-[239px]"
        priority={index === 0}
      />
    </div>
    <div className="flex flex-col justify-center items-start flex-1 pl-5">
      <h3 className="text-[#0e384c] text-xl font-semibold font-onest leading-normal mb-2 whitespace-pre-line">
        {post.title}
      </h3>
      <div className="border-b border-[#0e384c]/5 pb-4 mb-4 w-full">
        <p className="text-[#0e384c] text-base font-normal font-onest leading-7 whitespace-pre-line">
          {post.excerpt}
        </p>
      </div>
      <a
        href={post.link}
        className="flex items-center gap-2 text-[#1e84b5] text-base font-semibold font-onest leading-relaxed hover:underline"
      >
        Read More <FaArrowRight className="w-4 h-4" />
      </a>
    </div>
  </motion.div>
);

const BlogSection = () => (
  <section className="py-[100px] bg-[#f8fbff]">
    <Container>
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center ga-2 mb-2">
          <TbDental className="text-[#1e84b5]" size={20} />
          <span className="text-[#1e84b5] text-sm font-semibold font-onest leading-none">
            Blog & Articles
          </span>
        </div>
        <h2 className="text-center text-[#0e384c] text-[40px] font-bold font-onest leading-[48px] mb-2">
          Our latest dental tips and news
        </h2>
        <p className="text-center text-[#527282] text-base font-normal font-onest leading-7 max-w-2xl">
          The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and
          <br className="hidden md:block" />
          specialist dental treatments. With dental practices throughout the world.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.slice(0, 2).map((post, idx) => (
          <BlogCard key={post.title} post={post} index={idx} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {posts.slice(2, 4).map((post, idx) => (
          <BlogCard key={post.title} post={post} index={idx + 2} />
        ))}
      </div>
    </Container>
  </section>
);

export default BlogSection;