import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CategoryChipProps {
  icon: ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoryChip = ({ icon, label, isActive, onClick }: CategoryChipProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={`flex shrink-0 items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
        isActive
          ? "bg-primary text-primary-foreground shadow-primary-glow"
          : "bg-card text-foreground shadow-card"
      }`}
      whileTap={{ scale: 0.96 }}
    >
      {icon}
      <span>{label}</span>
    </motion.button>
  );
};

export default CategoryChip;
