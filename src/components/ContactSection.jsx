import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitch,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      className="py-24 px-4 relative bg-gradient-to-b from-background to-secondary/20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-4xl">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center relative">
          Get In{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Touch
          </span>
          <span className="block w-28 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mt-4 rounded-full"></span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Let’s connect and bring ideas to life. Whether it’s a project,
          collaboration, or just a friendly hello — I’d love to hear from you.
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Email */}
          <div className="p-8 rounded-2xl backdrop-blur-lg bg-white/5 shadow-lg border border-white/10 flex flex-col items-center text-center group hover:scale-105 transition-transform">
            <div className="p-5 rounded-full bg-gradient-to-tr from-primary to-purple-500 text-white shadow-md group-hover:scale-110 transition-transform">
              <Mail className="h-7 w-7" />
            </div>
            <h4 className="font-semibold text-lg mt-4">Email</h4>
            <a
              href="mailto:Ateebamir36@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors mt-1"
            >
              Ateeb.amir36@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="p-8 rounded-2xl backdrop-blur-lg bg-white/5 shadow-lg border border-white/10 flex flex-col items-center text-center group hover:scale-105 transition-transform">
            <div className="p-5 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 text-white shadow-md group-hover:scale-110 transition-transform">
              <Phone className="h-7 w-7" />
            </div>
            <h4 className="font-semibold text-lg mt-4">Phone</h4>
            <a
              href="tel:0340-6511270"
              className="text-muted-foreground hover:text-primary transition-colors mt-1"
            >
              0340-6511270
            </a>
          </div>

          {/* Location */}
          <div className="p-8 rounded-2xl backdrop-blur-lg bg-white/5 shadow-lg border border-white/10 flex flex-col items-center text-center group hover:scale-105 transition-transform">
            <div className="p-5 rounded-full bg-gradient-to-tr from-pink-500 to-red-400 text-white shadow-md group-hover:scale-110 transition-transform">
              <MapPin className="h-7 w-7" />
            </div>
            <h4 className="font-semibold text-lg mt-4">Location</h4>
            <p className="text-muted-foreground mt-1">Lahore, Pakistan</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h4 className="font-semibold text-lg mb-6">Connect With Me</h4>
          <div className="flex space-x-6 justify-center">
            <a
              href="#"
              target="_blank"
              className="p-3 rounded-full bg-white/5 hover:bg-primary/20 transition-colors shadow-md"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              target="_blank"
              className="p-3 rounded-full bg-white/5 hover:bg-primary/20 transition-colors shadow-md"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              target="_blank"
              className="p-3 rounded-full bg-white/5 hover:bg-primary/20 transition-colors shadow-md"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              target="_blank"
              className="p-3 rounded-full bg-white/5 hover:bg-primary/20 transition-colors shadow-md"
            >
              <Twitch className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
