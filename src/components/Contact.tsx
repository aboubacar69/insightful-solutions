import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, Users, Target, Send, XCircle, Star, TrendingUp, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const reasons = [
  {
    icon: Award,
    decorIcon: Star,
    title: "Expertise reconnue",
    description: "Des professionnels qualifiés avec une solide expérience dans leurs domaines respectifs.",
    color: "from-primary/20 to-accent",
  },
  {
    icon: Users,
    decorIcon: TrendingUp,
    title: "Solutions personnalisées",
    description: "Des approches adaptées à vos besoins spécifiques pour des résultats concrets et mesurables.",
    color: "from-accent to-primary/20",
  },
  {
    icon: Target,
    decorIcon: ShieldCheck,
    title: "Accompagnement stratégique",
    description: "Un suivi continu et un engagement total envers la réussite de vos projets.",
    color: "from-primary/20 to-accent",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Le nom est requis";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email invalide";
    if (!form.message.trim()) e.message = "Le message est requis";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    toast({ title: "Message envoyé !", description: "Nous vous répondrons dans les plus brefs délais." });
    setForm({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  const handleReset = () => {
    setForm({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  return (
    <section id="contact" className="section-padding bg-muted" ref={ref}>
      <div className="container-narrow">
        {/* Why choose us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi nous choisir ?</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative bg-card rounded-2xl p-8 text-center shadow-sm border border-border overflow-hidden group"
            >
              {/* Decorative gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Decorative icon in corner */}
              <r.decorIcon className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/30 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:rotate-12 transition-all duration-500">
                  <r.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold mb-3 font-serif">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-serif">{r.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contactez-nous</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-10" />

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Nom complet"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input
                  type="email"
                  placeholder="Email professionnel"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Téléphone (optionnel)"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>
            <div>
              <textarea
                rows={5}
                placeholder="Votre message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
              {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Envoyer
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3.5 rounded-xl border border-border text-muted-foreground font-semibold hover:bg-muted transition-all flex items-center justify-center gap-2"
              >
                <XCircle className="w-5 h-5" />
                Annuler
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
