import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center pt-38 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight text-balance"
              >
                Transform Your Future with{' '}
                <span className="text-red-700">Excellence in Education</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-600 mt-6 leading-relaxed text-balance"
              >
                Discover flexible learning formats tailored to your pace. Expert instruction from industry leaders.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-accent text-white px-8 py-4 rounded-lg font-semibold bg-red-700 transition-colors flex items-center justify-center gap-2 group cursor-pointer">
                Start Learning
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-accent text-red-700 px-8 py-4 rounded-lg font-semibold hover:bg-accent/5 transition-colors cursor-pointer">
                Learn More
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div>
                <p className="text-3xl font-bold text-red-700">500+</p>
                <p className="text-gray-600 text-sm">Active Students</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-red-700">50+</p>
                <p className="text-gray-600 text-sm">Expert Instructors</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-red-700">98%</p>
                <p className="text-gray-600 text-sm">Success Rate</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block relative h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-blue-100 rounded-3xl" />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zfvVu1LfuGesQz5eY9RznAMFHF3kV7.png"
                alt="Hong Kong Academy Logo"
                className="w-48 h-48 object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
