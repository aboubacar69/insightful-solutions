import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, BookOpen, Monitor, ArrowRight } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Études et Évaluations",
    description:
      "Analyses approfondies et évaluations rigoureuses pour éclairer vos décisions stratégiques et optimiser vos projets.",
  },
  {
    icon: BarChart3,
    title: "Statistiques & Économétrie",
    description:
      "Modélisation statistique avancée et analyses économétriques pour transformer vos données en avantages compétitifs.",
  },
  {
    icon: Monitor,
    title: "Consulting & Logiciels",
    description:
      "Conseil expert et solutions logicielles sur mesure pour digitaliser et moderniser vos processus métier.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" as const },
  }),
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-muted" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-serif">
            Des solutions complètes pour répondre à vos besoins stratégiques
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -8, boxShadow: "0 20px 40px -12px hsl(var(--primary) / 0.2)" }}
              className="group bg-card rounded-2xl p-8 shadow-sm border border-border cursor-pointer transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-500">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 font-serif">{service.description}</p>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Découvrir <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
