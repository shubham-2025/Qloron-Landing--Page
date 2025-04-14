import React from "react";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-[#E6F8F7] py-20"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        {/* Section Title with Top-Right Icon */}
        <div className="relative mb-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#49B2A9]" // Lighter shade
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h2>

          {/* Arrow Icon Top-Right */}
          <motion.a
            href="/about/details"
            className="absolute top-1 right-1 text-[#00BBA7] hover:text-[#49B2A9] transition-colors"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            title="Explore more about us"
          >
            <ArrowRightCircle size={28} />
          </motion.a>
        </div>

          {/* Description */}
          <motion.p
          className="text-black text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          >
          At <span className="font-semibold text-[#00BBA7]">Qloron</span>, we combine creativity and tech to craft digital experiences that inspire. From interactive UI design and powerful backends to cloud solutions, AI, and VFX, we turn futuristic ideas into reality.
          </motion.p>


          {/* Core Values Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
         {[
         {
        title: "Innovation-Driven",
        desc: "We explore emerging technologies to bring fresh, transformative ideas to life.",
        icon: "🚀",
        },
        {
        title: "Client-Focused",
        desc: "Your vision fuels our process. We co-create with a user-first mindset.",
        icon: "🤝",
      },
      {
        title: "Full-Stack Powerhouse",
        desc: "From cloud backend to pixel-perfect frontend, we do it all under one roof.",
        icon: "🧠",
      },
    ].map((item, index) => (
    <motion.div
      key={index}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 * index, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-4xl mb-4">{item.icon}</div>
      <h3 className="text-xl font-semibold text-[#00BBA7] mb-2">{item.title}</h3>
      <p className="text-black mb-10 max-w-xl mx-auto">{item.desc}</p>
    </motion.div>
  ))}
</div>

        {/* Meet the Team */}
<div className="mt-20 text-center">
  <motion.h3
    className="text-3xl font-bold text-[#00BBA7] mb-4"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    Meet Our Team
  </motion.h3>
  
  <p className="text-black mb-10 max-w-xl mx-auto">
    Our dynamic team consists of developers, designers, researchers, and dreamers who love turning ideas into scalable, creative digital solutions.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
    {[
      { name: "Shubham Mahapure", role: "Frontend Developer", emoji: "🎨" },
      { name: "Aarti Sharma", role: "AI/ML Engineer", emoji: "🧠" },
      { name: "Rahul Verma", role: "Backend Architect", emoji: "🔧" },
      { name: "Neha Kapoor", role: "UI/UX Designer", emoji: "✨" },
    ].map((member, i) => (
      <motion.div
        key={i}
        className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 * i, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-4xl mb-3">{member.emoji}</div>
        <h4 className="text-xl font-semibold text-[#00BBA7]">{member.name}</h4>
        <p className="text-black mb-10 max-w-xl mx-auto">{member.role}</p>
      </motion.div>
    ))}
  </div>
</div>

       {/* Company Timeline */}
<div className="mt-20 text-center">
  <motion.h3
    className="text-3xl font-bold text-[#00BBA7] mb-4"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    Our Journey
  </motion.h3>

  <p className="text-black mb-10 max-w-xl mx-auto">
    From our humble beginnings to transforming industries—here’s our story so far.
  </p>

  <div className="space-y-8 border-l-4 border-[#A0F0E7] pl-6 max-w-xl mx-auto">
    {[
      { year: "2021", event: "Qloron was founded by tech enthusiasts with a shared vision." },
      { year: "2022", event: "Built our first full-stack platform for a global client." },
      { year: "2023", event: "Expanded into AI, VFX, and pixel streaming services." },
      { year: "2024", event: "Onboarded Fortune 500 clients and scaled globally." },
      { year: "2025", event: "Continued our seamless journey of innovation and impact, delivering success at scale across new global markets." },
    ].map((step, index) => (
      <motion.div
        key={index}
        className="relative"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 * index }}
      >
        <div className="absolute w-3 h-3 bg-[#00BBA7] rounded-full -left-[0.65rem] top-2.5"></div>
        <div className="ml-4">
          <h4 className="text-xl font-semibold text-[#00BBA7]">{step.year}</h4>
          <p className="text-black">{step.event}</p>
        </div>
      </motion.div>
    ))}
  </div>
</div>


       {/* Optional Video or Image Background */}
<div className="mt-20 rounded-xl overflow-hidden shadow-lg">
  <motion.h3
    className="text-3xl font-bold text-[#00BBA7] mb-6"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    Inside Qloron
  </motion.h3>
  
          <div className="rounded-lg overflow-hidden max-w-4xl mx-auto">
            <iframe
              className="w-full aspect-video rounded-lg"
              src="https://www.youtube.com/embed/VlSAxVlaLo4" // Replace with your video
              title="Qloron Office Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
