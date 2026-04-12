import { Play, Instagram, Youtube, Linkedin, Facebook, Mail, MessageCircle, MapPin, Star } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/anitech_rajlav/new-meeting";
const WHATSAPP_URL = "https://wa.me/916205834086";

const navGroups = [
  {
    heading: "Services",
    links: [
      { label: "Explainer Videos", href: "#work" },
      { label: "SaaS Demo Videos", href: "#work" },
      { label: "Onboarding Videos", href: "#work" },
      { label: "Social Media Ads", href: "#work" },
      { label: "2D / 3D Animation", href: "#work" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Work", href: "#portfolio" },
      { label: "How It Works", href: "#process" },
      { label: "Pricing", href: "#pricing" },
      { label: "Testimonials", href: "#" },
      { label: "Get Free Script", href: "#lead-form" },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/rajlav_anitech/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@rajlavanitech", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/rajlav-anitech/posts/?feedView=all", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/people/Rajlav-VFX-And-Animation/61555758506870/", label: "Facebook" },
];

const ratingBadges = [
  { platform: "Google", stars: 5.0, reviews: "48 reviews" },
  { platform: "Clutch", stars: 4.9, reviews: "32 reviews" },
  { platform: "Upwork", stars: 4.9, reviews: "Top Rated" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/6">
      {/* Top CTA strip */}
      <div className="border-b border-white/6 py-6">
        <div className="container px-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            Ready to grow your brand with video?{" "}
            <span className="text-white font-medium">Let's talk strategy — it's free.</span>
          </p>
          <a
            href={CALENDLY_URL}
            onClick={(e) => {
              e.preventDefault();
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
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/20 flex items-center justify-center">
                <Play className="w-4.5 h-4.5 text-primary fill-primary" />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white">
                Rajlav <span className="text-primary">Animation</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              The #1 animation agency for SaaS companies, startups, and growing brands. We turn complex products into irresistible video stories that convert.
            </p>

            {/* Rating badges */}
            <div className="flex flex-wrap gap-3 mb-7">
              {ratingBadges.map((badge) => (
                <div
                  key={badge.platform}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-500/8 border border-amber-500/15"
                >
                  <div className="flex">
                    {Array.from({ length: Math.floor(badge.stars) }).map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div>
                    <div className="text-[10px] text-amber-300 font-bold leading-none">{badge.platform}</div>
                    <div className="text-[9px] text-gray-500 leading-none mt-0.5">{badge.reviews}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
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

          {/* Nav columns */}
          {navGroups.map((group) => (
            <div key={group.heading}>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
                {group.heading}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-green-400 transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-white group-hover:text-green-300 text-xs">WhatsApp</div>
                    <div>+91 62058 34086</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@anitech.rajlav.co.in"
                  className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors group"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-white group-hover:text-primary text-xs">Email</div>
                    <div>hello@anitech.rajlav.co.in</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-white text-xs">Location</div>
                    <div>India · Remote Worldwide</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Rajlav Animation. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-gray-600 text-xs">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <span className="text-gray-700">SaaS Explainer Experts · India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
