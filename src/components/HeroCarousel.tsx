import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Excellence en Consulting",
    subtitle: "Des solutions stratégiques sur mesure pour accélérer votre croissance et optimiser vos performances.",
  },
  {
    image: hero2,
    title: "Analyse & Statistiques",
    subtitle: "Exploitez la puissance des données pour des décisions éclairées et un avantage concurrentiel durable.",
  },
  {
    image: hero3,
    title: "Accompagnement Expert",
    subtitle: "Une équipe d'experts dédiée à la réussite de vos projets les plus ambitieux.",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="accueil" className="relative h-screen min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex items-center h-full">
        <div className="container-narrow px-4 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
                {slides[current].title}
              </h1>
              <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
                {slides[current].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:brightness-110 transition-all text-center"
                >
                  Nous contacter
                </a>
                <a
                  href="#apropos"
                  className="border-2 border-secondary-foreground/30 text-secondary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-secondary-foreground/10 transition-all text-center"
                >
                  En savoir plus
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>


      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-primary" : "w-2.5 bg-secondary-foreground/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
