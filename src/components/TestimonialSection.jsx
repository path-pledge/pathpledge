import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Bharti Gajmoti",
    message:
      "Ayush Sir is a best mentor, his teaching skills is very good, simple and logical always, I'm very happy to learn with PathPledge Academy.",
    image: "https://i.imgur.com/Ee55rhh.png",
  },
  {
    name: "Parshuram Rathod",
    message:
      "Simple way to explain with example by Ayush Sir. One of the best trading academy in India. From basic to advance, it's like I am going to change my life.",
    image: "https://i.imgur.com/JgwXLtE.png",
  },
  {
    name: "Priya Pandey",
    message:
      "Best institute for Trading, provides a great learning experience to beginners. Ayush Patel teaches from basics till advanced in all markets.",
    image: "https://i.imgur.com/XN7Bxq1.png",
  },
  {
    name: "Ishwar Ballal",
    message:
      "Ayush Sir !! is one of the best mentors of my life. The content includes everything for trading efficiently. Highly recommended.",
    image: "https://i.imgur.com/kjZkhDw.png",
  },
  {
    name: "Saroj Nayak",
    message:
      "Perfect platform to learn stock market trading. I love this course for its focus on Risk Management. Special thanks to our mentor Ayush Sir.",
    image: "https://i.imgur.com/xKHxk3y.png",
  },
  {
    name: "Dhaneshwar Dewangan",
    message:
      "Amazing experience improved my minor mistakes. A new point of view for psychology, life & technical management. Thank you PathPledge!",
    image: "https://i.imgur.com/nxKxuEv.png",
  },
  {
    name: "Aman Anand",
    message:
      "Very good place to learn trading for a beginner. Ayush sir is fabulous and his teaching is very simple and easy to understand.",
    image: "https://i.imgur.com/3UlRw60.png",
  },
  {
    name: "Pravin Dabhi",
    message:
      "One of the best trading institutes in India. They made learning easy to understand. Would recommend to anyone.",
    image: "https://i.imgur.com/Lplz1xj.png",
  },
  {
    name: "Swaraj Verma",
    message:
      "This is the best platform for new traders and my experience was excellent. Loved it and enjoyed it very much.",
    image: "https://i.imgur.com/NzMRPPM.png",
  },
  {
    name: "Yāda Dārling143",
    message:
      "Ayush Sir teaches everything clearly, including psychology and real life problems. It's an amazing course!",
    image: "https://i.imgur.com/7d5g8qv.png",
  },
];

export const TestimonialSection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-20 px-4 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <h2 className="text-5xl font-extrabold  text-gray-800">From Our Students...</h2>
        <p className="text-gray-600 mt-2 text-xl ">What our learners say about us</p>
      </motion.div>

      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="px-4"
          >
            <div className="bg-white p-6 rounded-2xl shadow-md h-full flex flex-col items-start justify-start hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-lg">
                    {item.name[0]}
                  </div>
                )}
                <div>
                  <h4 className="text-md font-semibold text-gray-900">{item.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#facc15" strokeWidth={0} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 font-serif">{item.message}</p>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
};
