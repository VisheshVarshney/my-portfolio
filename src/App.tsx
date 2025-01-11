import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Mail, Send, Code, Cloud } from 'lucide-react';

declare global {
  interface Window {
    VANTA: {
      NET: (config: any) => any;
    };
    THREE: any;
  }
}

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const backdropBlur = useTransform(scrollYProgress, [0, 0.25], ['blur(0px)', 'blur(5px)']);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current && window.VANTA) {
      setVantaEffect(
        window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xb5b5d9,
          backgroundColor: 0x0b0b0b,
          points: 15.00,
          maxDistance: 25.00,
          spacing: 17.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={vantaRef} className="min-h-screen text-white overflow-x-hidden">
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ backdropFilter: backdropBlur }}
      />
      <div
        className="custom-cursor"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ scale }}
      >
        <div className="container mx-auto px-4 z-10 text-center overflow-hidden">
          <motion.h1
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-8xl font-bold mb-4"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Vishesh Varshney
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-300 mb-8"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            Aspiring Full Stack Developer
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="min-h-screen flex items-center py-20"
        style={{ opacity }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold mb-12" style={{ fontFamily: "'Clash Display', sans-serif" }}>About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
            >
              <p className="text-xl leading-relaxed" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                I'm a B.Tech CSE student passionate about full stack development.
                Currently mastering the MERN stack and building exciting projects.
                My journey in tech is driven by curiosity and the desire to create
                impactful solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Clash Display', sans-serif" }}>Skills</h3>
              <div className="flex flex-wrap gap-4">
                {['Python', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white/10 rounded-full" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold mb-12" style={{ fontFamily: "'Clash Display', sans-serif" }}>Projects</h2>
          <div className="space-y-20">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <Code className="w-8 h-8" />
                <h3 className="text-3xl font-bold" style={{ fontFamily: "'Clash Display', sans-serif" }}>MUJ Connect</h3>
              </div>
              <p className="text-xl text-gray-300 mb-6" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                A comprehensive social media platform for college students,
                facilitating connections and information sharing.
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-white/10 rounded-full" style={{ fontFamily: "'Satoshi', sans-serif" }}>In Progress</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <Cloud className="w-8 h-8" />
                <h3 className="text-3xl font-bold" style={{ fontFamily: "'Clash Display', sans-serif" }}>WeatherCast</h3>
              </div>
              <p className="text-xl text-gray-300 mb-6" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                A weather prediction and display application providing accurate
                forecasts and current weather conditions.
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-white/10 rounded-full" style={{ fontFamily: "'Satoshi', sans-serif" }}>Completed</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold mb-12" style={{ fontFamily: "'Clash Display', sans-serif" }}>Contact</h2>
          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
              action="https://formspree.io/f/mzzzyjjj"
              method="POST"
            >
              <div>
                <label className="block text-xl mb-2" style={{ fontFamily: "'Clash Display', sans-serif" }}>Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-white/30"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                  required
                />
              </div>
              <div>
                <label className="block text-xl mb-2" style={{ fontFamily: "'Clash Display', sans-serif" }}>Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-white/30"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                  required
                />
              </div>
              <div>
                <label className="block text-xl mb-2" style={{ fontFamily: "'Clash Display', sans-serif" }}>Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-white/30"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white/10 hover:bg-white/20 text-white py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all"
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </motion.form>

            <div className="flex justify-center gap-8 mt-12">
              <a
                href="https://github.com/visheshvarshney"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="mailto:varshneyvisheshin@gmail.com"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;