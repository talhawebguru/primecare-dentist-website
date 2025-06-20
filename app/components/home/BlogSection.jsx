'use client';
import { motion } from "motion/react";
import Image from "next/image";
import Container from "../common/Container";

const BlogSection = () => {
  const posts = [
    {
      title: "The Importance of Regular Dental Check-ups",
      excerpt: "Learn why regular dental check-ups are crucial for maintaining optimal oral health...",
      image: "/images/blog/dental-checkup.jpg",
      date: "June 15, 2025"
    },
    {
      title: "Modern Dental Technologies",
      excerpt: "Discover the latest technologies we use to provide better dental care...",
      image: "/images/blog/dental-tech.jpg",
      date: "June 12, 2025"
    },
    {
      title: "Tips for Better Oral Hygiene",
      excerpt: "Expert advice on maintaining good oral hygiene for a healthier smile...",
      image: "/images/blog/oral-hygiene.jpg",
      date: "June 10, 2025"
    }
  ];

  return (
    <section className="py-20 bg-[#F8FBFF]">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E3547] mb-4">
            Our latest dental tips and news
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest articles and updates on dental care
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-[#0075FF] mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-[#1E3547] mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-[#0075FF] font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
