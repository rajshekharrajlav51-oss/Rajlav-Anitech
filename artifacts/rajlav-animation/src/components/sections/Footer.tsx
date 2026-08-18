import { Code2, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Youtube } from "lucide-react";
import { Link } from "wouter";
import { services, site } from "@/lib/seo-data";

const CALENDLY_URL = "https://calendly.com/anitech_rajlav/new-meeting";
const WHATSAPP_URL = "https://wa.me/916205834086";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/rajlav_anitech/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@rajlavanitech", label: "YouTube" },
  { icon: Linkedin, href: site.linkedIn, label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/6">
      <div className="border-b border-white/6 py-6">
        <div className="container px-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            Have a project in mind? <span className="text-white font-medium">Let's build your next digital product.</span>
          </p>
          <a
            href={CALENDLY_URL}
            onClick={(event) => {
              event.preventDefault();
              window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
            }}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-semibold hover:bg-primary/25 transition-colors"
          >
            Get Free Consultation
          </a>
        </div>
      </div>

      <div className="container px-4 mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/20 flex items-center justify-center">
                <Code2 className="w-4.5 h-4.5 text-primary" />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white">
                Rajlav <span className="text-primary">Technologies</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-sm">
              AI & Software Development Company serving Noida, Delhi NCR, Uttar Pradesh and remote clients with AI, software, web, mobile, SaaS and business automation solutions.
            </p>
            <p className="text-gray-500 text-xs leading-relaxed mb-7 max-w-sm">
              Also known as Rajlav Anitech, Rajlav Technologies is the technology/software division of the Rajlav ecosystem.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 hover:bg-primary/8 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Services</h2>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {service.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Company</h2>
            <ul className="space-y-3">
              {[
                ["About", "/about"],
                ["Portfolio", "/portfolio"],
                ["Contact", "/contact"],
                ["Privacy Policy", "/privacy-policy"],
                ["Terms & Conditions", "/terms-and-conditions"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Contact</h2>
            <ul className="space-y-4 text-sm">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-400 hover:text-green-400 transition-colors group">
                  <MessageCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-white group-hover:text-green-300 text-xs">WhatsApp</div>
                    <div>{site.phone}</div>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors group">
                  <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-white group-hover:text-primary text-xs">Email</div>
                    <div>{site.email}</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-white text-xs">Location</div>
                    <div>Noida, Uttar Pradesh, India</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Rajlav Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-gray-600 text-xs">
            <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-gray-400 transition-colors">Terms & Conditions</Link>
            <span className="text-gray-700">Noida / Delhi NCR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
