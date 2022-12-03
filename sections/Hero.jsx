'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import {slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
  <motion.div
    variant={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  />
    Hero section
  </section>
);

export default Hero;
