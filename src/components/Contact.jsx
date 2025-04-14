// src/components/Contact.jsx
import React, { useState } from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    image: "https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2Zlc3Npb25hbCUyMHdvbWVufGVufDB8fDB8fHww",
    name: "Kaia Everett",
    role: "Founder, Elemental Payments",
    quote:
      "Untitled UI has been a huge time-saver for our startup. The easy-to-use dashboard and reports make tracking our finances a breeze and have cut out tons of manual work for our team.",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=60",
    name: "Jade Thompson",
    role: "Marketing Lead, NovaSync",
    quote:
      "The experience with this platform has been phenomenal. We’ve boosted productivity and our team absolutely loves the user-friendly design.",
    rating: 4,
  },
  {
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=60",
    name: "Miles Carter",
    role: "CTO, FinEdge",
    quote:
      "One of the best tools we’ve integrated so far. Everything works seamlessly, and support is super responsive.",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=600&q=60",
    name: "Amara Lee",
    role: "Head of Ops, LumiTech",
    quote:
      "We went from spreadsheets to streamlined workflows within days. It’s intuitive, efficient, and powerful.",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=60",
    name: "Ethan Brooks",
    role: "Design Director, Vibe Studio",
    quote:
      "Clean design, smart features, and stellar customer service. Couldn’t ask for more.",
    rating: 4,
  }
];

const Contact = () => {
  const [isSolo, setIsSolo] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
  };

  return (
    <section className=" contact bg-gradient-to-b from-white to-[#E6F8F7] py-20">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <form className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#49B2A9]">How can we help?</h2>
          <p className="text-gray-500">Our friendly team would love to hear from you.</p>

          <div>
            <input
              type="text"
              placeholder="Good Name !"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none"
            />
            <div className="text-green-500 text-sm mt-1 flex items-center">
              <FaCheckCircle className="mr-1" />
              Looks good!
            </div>
          </div>

          <div>
            <input
              type="email"
              placeholder="Email !"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none"
            />
            <div className="text-green-500 text-sm mt-1 flex items-center">
              <FaCheckCircle className="mr-1" />
              Email looks valid
            </div>
          </div>

          <input
            type="tel"
            placeholder="Phone Number !"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none"
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => setIsSolo(true)}
              className={`flex-1 p-4 border rounded-lg flex flex-col items-start transition hover:shadow-md ${
                isSolo ? "border-blue-600 bg-blue-50" : "border-gray-300"
              }`}
            >
              <span className="font-medium">I'm a solo creator</span>
              <span className="text-sm text-gray-500">Smarter invoicing, tax compliance & reporting.</span>
            </button>

            <button
              type="button"
              onClick={() => setIsSolo(false)}
              className={`flex-1 p-4 border rounded-lg flex flex-col items-start transition hover:shadow-md ${
                !isSolo ? "border-blue-600 bg-blue-50" : "border-gray-300"
              }`}
            >
              <span className="font-medium">I'm part of a team</span>
              <span className="text-sm text-gray-500">Run and grow your entire business seamlessly.</span>
            </button>
          </div>

          <button
  type="submit"
  className="w-full bg-[#00BBA7] text-white py-3 rounded hover:bg-[#00a193] transition"
>
  Get in touch!
</button>

        </form>

        <div>
        <Slider {...settings}>
  {testimonials.map((t, i) => (
    <div
      key={i}
      className="relative h-[620px] rounded-xl overflow-hidden shadow-lg"
    >
      {/* Background Image */}
      <img
        src={t.image}
        alt={t.name}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8 text-white">
        <p className="text-lg italic mb-4">"{t.quote}"</p>
        <div className="flex items-center text-yellow-400 mb-2">
          {[...Array(t.rating)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <p className="font-bold text-2xl">{t.name}</p>
        <p className="text-sm text-gray-200">{t.role}</p>
      </div>
    </div>
  ))}
</Slider>

        </div>
      </div>
    </section>
  );
};

export default Contact;