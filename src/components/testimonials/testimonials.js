import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import './testimonials.css';
import testimonials from '../../data/testimonials';

const fadeUpVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="title">O QUE DIZEM NOSSOS CLIENTES</h2>
      <h3 className="subtitle">Mantemos o anonimato para privacidade de vocês</h3>
      <button className="depo-button">Deixe seu depoimento</button>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        style={{ height: '100%' }}
      >
        {testimonials.map(({ nome, texto }, index) => (
          <SwiperSlide key={index}>
            <AnimatePresence mode="wait">
              <motion.div
                className="testimonial"
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6 }}
              >
                <p className="text">"{texto}"</p>
                <p className="author">– {nome}</p>
              </motion.div>
            </AnimatePresence>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;



