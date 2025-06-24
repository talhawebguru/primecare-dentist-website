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
    className="bg-white rounded-[40px] outline outline-[#0e384c]/5 p-[20px] flex flex-col lg:flex-row items-start gap-6 w-full max-w-full"
  >
    <div className="flex-1 rounded-[40px] overflow-hidden w-full flex items-center">
      <Image
        src={post.image}
        alt={post.title}
        width={291}
        height={239}
        className="object-cover w-full "
      />
    </div>
    <div className="flex-1 flex flex-col justify-center items-start pl-0 lg:pl-5 w-full">
      <h3 className="text-primary text-xl font-semibold font-onest leading-normal mb-2 whitespace-pre-line">
        {post.title}
      </h3>
      <div className="border-b border-[#0e384c]/5 pb-4 mb-4 w-full">
        <p className="text-primary text-base font-normal font-onest leading-7 whitespace-pre-line">
          {post.excerpt}
        </p>
      </div>
      <a
        href={post.link}
        className="flex items-center gap-2 text-secondary text-base font-semibold font-onest leading-relaxed hover:underline"
      >
        Read More <FaArrowRight className="w-4 h-4" />
      </a>
    </div>
  </motion.div>
);

const BlogSection = () => (
  <section className="py-12 sm:py-[100px] bg-[#f8fbff] overflow-x-hidden">
    <Container>
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-2 mb-2">
          <TbDental className="text-secondary" size={20} />
          <span className="text-secondary text-sm font-semibold font-onest leading-none">
            Blog & Articles
          </span>
        </div>
        <h2 className="text-center text-primary text-3xl sm:text-[40px] font-bold font-onest sm:leading-[48px] mb-2">
          Our latest dental tips and news
        </h2>
        <p className="text-center text-[#527282] text-base font-normal font-onest leading-7 max-w-2xl">
          The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and
          <br className="hidden md:block" />
          specialist dental treatments. With dental practices throughout the world.
        </p>
      </div>
      {/* Responsive: stack all cards on mobile, 2 columns on md+, 2 rows on lg+ */}
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="flex-1 min-w-0">
            <BlogCard post={posts[0]} index={0} />
          </div>
          <div className="flex-1 min-w-0">
            <BlogCard post={posts[1]} index={1} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="flex-1 min-w-0">
            <BlogCard post={posts[2]} index={2} />
          </div>
          <div className="flex-1 min-w-0">
            <BlogCard post={posts[3]} index={3} />
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default BlogSection;