import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Careers = () => {
    const jobs = [
      {
        title: "Frontend Developer",
        type: "Full-Time",
        location: "Pune, India (In-Office)",
        level: "Mid-Level",
        tech: ["React", "Tailwind", "TypeScript"],
        description: "We're looking for a skilled React developer to build scalable UIs.",
      },
      {
        title: "Backend Developer",
        type: "Remote",
        location: "Remote (Work From Home)",
        level: "Senior",
        tech: ["Node.js", "MongoDB", "AWS"],
        description: "Own the backend infrastructure and work on scalable cloud systems.",
      },
      {
        title: "UI/UX Designer",
        type: "Internship",
        location: "Mumbai, India (Hybrid)",
        level: "Intern",
        tech: ["Figma", "Adobe XD", "Illustrator"],
        description: "Help shape the design language of our next-gen products.",
      },
      {
        title: "DevOps Engineer",
        type: "Full-Time",
        location: "Bangalore, India (In-Office)",
        level: "Mid-Level",
        tech: ["Docker", "Kubernetes", "CI/CD", "AWS"],
        description: "Maintain infrastructure automation and deployment pipelines.",
      },
      {
        title: "Content Strategist",
        type: "Part-Time",
        location: "Delhi, India (Remote)",
        level: "Junior",
        tech: ["SEO", "Content Writing", "Notion"],
        description: "Craft compelling brand stories and manage digital content.",
      },
      {
        title: "Product Manager",
        type: "Full-Time",
        location: "Chennai, India (Hybrid)",
        level: "Senior",
        tech: ["Agile", "Jira", "Figma", "Analytics"],
        description: "Lead cross-functional teams to deliver product success.",
      },
    ];
    
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id="careers" className="bg-gradient-to-b from-white to-[#E6F8F7] py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#00BBA7] mb-10">Careers at Qloron</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {jobs.map((job, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-left cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
              <p className="text-sm text-gray-600 mb-1">📍 {job.location}</p>
              <p className="text-sm text-gray-600 mb-1">💼 {job.type}</p>
              <p className="text-sm text-gray-600 mb-3">🧠 {job.level}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {job.tech.map((tech, i) => (
                  <span key={i} className="bg-[#E6F8F7] text-[#00BBA7] text-xs px-2 py-1 rounded-full">{tech}</span>
                ))}
              </div>

              <AnimatePresence>
                {expanded === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-gray-700 text-sm"
                  >
                    <p>{job.description}</p>
                    <a
                    href={`mailto:careers@qloron.com?subject=Application for ${job.title}`}
                    className="inline-block mt-4 px-4 py-2 bg-[#00BBA7] text-white rounded-full text-sm hover:bg-[#00a193] transition"
                    >
                    Apply Now
                  </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
        <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        >
        <a
        href="/morejobs"
        className="flex items-center gap-2 px-6 py-3 bg-[#00BBA7] text-white rounded-full shadow-md hover:bg-[#009e90] transition-all"
        >
      <span className="text-lg font-semibold">More Jobs</span>
      <motion.span
        animate={{ x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowRight size={20} />
      </motion.span>
    </a>
  </motion.div>
</div>

      </div>
    </section>
  );
};

export default Careers;
