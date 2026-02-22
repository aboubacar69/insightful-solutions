import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import aboutImg from "@/assets/about.jpg";

const values = [
  "Expertise",
  "Rigueur",
  "Innovation",
  "Accompagnement personnalisé",
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={aboutImg}
              alt="À propos de notre cabinet"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              À propos de notre cabinet
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-8">
              Fort d'une expertise reconnue dans les domaines de l'évaluation, de
              la statistique et du consulting, notre cabinet accompagne les
              organisations dans leurs projets stratégiques. Nous allions rigueur
              méthodologique et innovation pour apporter des solutions
              personnalisées et à forte valeur ajoutée.
            </p>
            <div className="space-y-4">
              {values.map((value, i) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
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
