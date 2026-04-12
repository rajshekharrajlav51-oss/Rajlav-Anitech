import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      className="fixed bottom-8 right-8 z-50 group"
    >
      <a
        href="https://wa.me/916205834086?text=Hi! I want to discuss video production for my SaaS."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3"
      >
        {/* Tooltip */}
        <span className="absolute right-16 bg-white text-gray-900 text-sm font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
          Chat on WhatsApp
        </span>

        {/* Button */}
        <div className="relative w-16 h-16 rounded-full bg-green-500 hover:bg-green-400 transition-colors flex items-center justify-center shadow-[0_4px_20px_rgba(34,197,94,0.5)] cursor-pointer">
          {/* Pulse rings */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-10 animation-delay-300" />
          <MessageCircle className="w-8 h-8 text-white fill-white" />
        </div>
      </a>
    </motion.div>
  );
}
