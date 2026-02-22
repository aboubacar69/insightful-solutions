import {
  Building2, MapPin, Phone, Mail, Instagram, Twitter, Facebook, Linkedin,
  Home, Briefcase, Info, MessageSquare, BookOpen, BarChart3, Monitor
} from "lucide-react";

const quickLinks = [
  { label: "Accueil", href: "#accueil", icon: Home },
  { label: "Services", href: "#services", icon: Briefcase },
  { label: "À Propos", href: "#apropos", icon: Info },
  { label: "Contact", href: "#contact", icon: MessageSquare },
];

const serviceLinks = [
  { label: "Études et Évaluations", href: "#services", icon: BookOpen },
  { label: "Statistiques & Économétrie", href: "#services", icon: BarChart3 },
  { label: "Consulting & Logiciels", href: "#services", icon: Monitor },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-narrow section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 - Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-bold">ConsultPro</span>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed font-serif">
              Cabinet de conseil et d'études spécialisé en évaluation, statistiques et solutions logicielles innovantes.
            </p>
          </div>

          {/* Col 2 - Quick links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Liens rapides</h4>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {quickLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-1.5 text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Services */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Nos Services</h4>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {serviceLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-1.5 text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Contactez-nous</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                Dakar, Sénégal
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                +221 77 000 00 00
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                contact@consultpro.com
              </li>
            </ul>

            <div className="flex gap-3 mt-5">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "X" },
                { icon: Facebook, label: "Facebook" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 text-center text-sm text-secondary-foreground/50">
          © {new Date().getFullYear()} ConsultPro. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
