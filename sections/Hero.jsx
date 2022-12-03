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
    className={"flex justify-center items-center flex-col relative z=10"}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
        METAVERSE
        </motion.h1>
      </div>

  </motion.div>

  />
    Hero section
  </section>
);

export default Hero;
