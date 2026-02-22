import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import aboutImg from "@/assets/about.jpg";

const values = [
  "Expertise",
  "Rigueur",
  "Innovation",
  "Accompagnement personnalisé",
];

const shortText =
  "Fort d'une expertise reconnue dans les domaines de l'évaluation, de la statistique et du consulting, notre cabinet accompagne les organisations dans leurs projets stratégiques.";

const fullText =
  "Fort d'une expertise reconnue dans les domaines de l'évaluation, de la statistique et du consulting, notre cabinet accompagne les organisations dans leurs projets stratégiques. Nous allions rigueur méthodologique et innovation pour apporter des solutions personnalisées et à forte valeur ajoutée. Notre équipe pluridisciplinaire met à votre disposition un savoir-faire unique pour répondre aux défis complexes de votre secteur. Que ce soit pour des études d'impact, des analyses économétriques ou la conception de solutions logicielles, nous nous engageons à fournir des résultats concrets et mesurables qui contribuent durablement à votre succès.";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="apropos" className="section-padding" ref={ref}>
      <div className="container-narrow">
        {/* Title first */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            À propos de notre cabinet
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={aboutImg}
              alt="À propos de notre cabinet"
              className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-4 font-serif">
              {expanded ? fullText : shortText}
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-primary font-semibold mb-8 hover:brightness-110 transition-all"
            >
              {expanded ? (
                <>
                  Réduire <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  En savoir plus <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="space-y-4">
              {values.map((value, i) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
