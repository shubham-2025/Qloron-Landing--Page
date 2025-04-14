import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./swiperCustom.css"; // for overriding swiper default styles

const services = [
  {
    title: "Web Development",
    description: "We build responsive and modern websites using the latest technologies.",
    image: "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "App Development",
    description: "Cross-platform and native apps that users love the Design.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Cloud Solutions",
    description: "Reliable and scalable cloud infrastructure tailored to your needs.",
    image: "https://plus.unsplash.com/premium_photo-1681487942927-e1a2786e6036?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWQlMjBzb2x1dGlvbnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "AI Integration",
    description: "Leverage artificial intelligence to power smarter decisions.",
    image: "https://media.istockphoto.com/id/2159943769/photo/humanoid-robot-hand-is-holding-glowing-futuristic-processor-metal-hand-of-humanoid-robot.webp?a=1&b=1&s=612x612&w=0&k=20&c=PYPNFFx3YVy0DPWi4NZxkEwy-60flWdmJB14_SU_MMo=",
  },
  {
    title: "UI/UX Design",
    description: "Designs that are not just beautiful but also intuitive.",
    image:  "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dWklMkZ1eHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "DevOps Developer",
    description: "Efficient development pipelines for rapid delivery.",
    image: "https://images.unsplash.com/photo-1667372335937-d03be6fb0a9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2b3BzfGVufDB8fDB8fHww",
  },
];

const Services = () => {
  return (
    <>
      {/* Heading Section */}
      <section id="services" className="bg-gradient-to-b from-white to-[#E6F8F7] py-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <motion.h2
            className="text-4xl font-bold text-[#00BBA7] mb-10"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
        </div>
      </section>

      {/* Carousel Section (Outside) */}
      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white/30 backdrop-blur-md rounded-xl shadow-xl overflow-hidden transition hover:scale-105 duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#00BBA7] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <button className="flex items-center gap-2 bg-[#00BBA7] text-white px-4 py-2 rounded-full hover:bg-[#009e8f] transition">
                    Learn More <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Services;
