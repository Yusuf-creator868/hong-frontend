import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function StatItem({ value, suffix = "", label, delay }) {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = Number(value);

    const duration = 2000;
    const incrementTime = 20;
    const step = end / (duration / incrementTime);

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="
        group
        text-center
        p-8
        rounded-3xl
        bg-white
        border
        border-gray-100
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <h3
        className="
          text-5xl
          md:text-6xl
          font-bold
          text-red-700
          mb-3
        "
      >
        {count}
        {suffix}
      </h3>

      <p className="text-gray-600 text-lg font-medium">
        {label}
      </p>
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-red-700 font-semibold mb-3 tracking-wide uppercase">
            Our Results
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Impact by Numbers
          </h2>

          <p className="text-gray-500 text-lg mt-5 max-w-2xl mx-auto">
            Professional language education trusted by hundreds of students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem
            value={500}
            suffix="+"
            label="Students Graduated"
            delay={0}
          />

          <StatItem
            value={15}
            suffix="+"
            label="Years of Excellence"
            delay={0.2}
          />

          <StatItem
            value={98}
            suffix="%"
            label="Student Satisfaction"
            delay={0.4}
          />

          <StatItem
            value={50}
            suffix="+"
            label="Expert Educators"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}