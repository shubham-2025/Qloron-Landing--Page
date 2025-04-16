// src/pages/MoreJobs.jsx
import React, { useState } from "react";
import { FaFileAlt, FaFileUpload, FaUser } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import CurrentOpenings from "./CurrentOpenings";
import Footer from "../components/Footer";

// Reusable step card component
const StepCard = ({ icon: Icon, step, title }) => (
  <div className="flex flex-col items-center text-teal-700 w-40">
    <Icon className="text-5xl mb-4" />
    <h3 className="text-xl font-bold mb-1">STEP {step}</h3>
    <p className="text-gray-700 text-sm text-center">{title}</p>
  </div>
);

const MoreJobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="pt-20 max-w-7xl mx-auto px-4">
      
      {/* How to Apply Section */}
      <section className="text-center bg-gradient-to-b from-white to-[#E6F8F7] py-20">
        
      
        <h2 className="text-4xl font-bold text-[#00BBA7] mb-10">How to Apply</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <StepCard icon={FaFileAlt} step="1" title="Apply Job" />

          <HiOutlineArrowNarrowRight className="text-3xl text-teal-500 hidden md:block" />

          <StepCard icon={FaFileUpload} step="2" title="Upload your CV" />

          <HiOutlineArrowNarrowRight className="text-3xl text-teal-500 hidden md:block" />

          <StepCard icon={FaUser} step="3" title="Get an Email for Technical Round" />
        </div>

        <CurrentOpenings setSelectedJob={setSelectedJob} />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MoreJobs;
