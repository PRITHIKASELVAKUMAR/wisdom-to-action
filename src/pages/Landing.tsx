import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-community.png";
import logoIcon from "@/assets/logo-icon.png";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="flex flex-1 flex-col items-center px-6 pb-12 pt-16">
        {/* Logo */}
        <motion.img
          src={logoIcon}
          alt="Wisdom to Action"
          className="mb-4 h-16 w-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
        />

        {/* Title */}
        <motion.h1
          className="mb-2 text-center text-3xl font-bold text-foreground"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Wisdom to Action
        </motion.h1>

        <motion.p
          className="mb-8 text-center text-base text-muted"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Share what you know. Help your community grow.
        </motion.p>

        {/* Hero Illustration */}
        <motion.img
          src={heroImage}
          alt="Community sharing knowledge under a tree"
          className="mb-10 w-full max-w-sm rounded-3xl outline outline-1 -outline-offset-1 outline-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />

        {/* CTA Buttons */}
        <motion.div
          className="flex w-full max-w-sm flex-col gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.button
            onClick={() => navigate("/home")}
            className="h-14 w-full rounded-full bg-primary text-lg font-semibold text-primary-foreground shadow-primary-glow transition-all duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
          >
            Get Started
          </motion.button>
          <motion.button
            onClick={() => navigate("/home")}
            className="h-14 w-full rounded-full bg-card text-lg font-medium text-foreground shadow-card transition-all duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
          >
            Explore Knowledge
          </motion.button>
          <button
            onClick={() => navigate("/home")}
            className="mt-1 text-center text-sm font-medium text-muted underline decoration-border underline-offset-4 transition-colors hover:text-primary"
          >
            Already have an account? Login
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
