import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  const features = [
    {
      title: 'World-Class Curriculum',
      description: 'Designed by industry experts with global standards',
    },
    {
      title: 'Personalized Learning',
      description: 'Tailored approaches for each student&apos;s unique needs',
    },
    {
      title: 'Expert Mentorship',
      description: 'Learn from accomplished professionals and thought leaders',
    },
    {
      title: 'Career Support',
      description: 'Placement assistance and professional development',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 text-balance">
                About Hong Kong Academy
              </h2>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                Founded on the principles of excellence and innovation, Hong Kong Academy has been a beacon of quality education for over a decade. We&apos;re committed to nurturing talent and fostering growth.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4"
                >
                  <CheckCircle2 className="text-red-700 flex-shrink-0 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-blue-100/20 rounded-3xl" />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl"
            >
              <div className="space-y-4 text-center">
                <p className="text-6xl">🎓</p>
                <h3 className="text-2xl font-bold text-gray-900">Transforming Lives</h3>
                <p className="text-gray-600">Through quality education and mentorship</p>
                <div className="bg-red-100 rounded-lg p-4 mt-6">
                  <p className="font-semibold text-red-700">Join Our Community</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
