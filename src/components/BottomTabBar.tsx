import { useLocation, useNavigate } from "react-router-dom";
import { House, MagnifyingGlass, Plus, User } from "phosphor-react";
import { motion } from "framer-motion";

const tabs = [
  { icon: House, label: "Home", path: "/home" },
  { icon: MagnifyingGlass, label: "Search", path: "/search" },
  { icon: Plus, label: "Publish", path: "/publish", isCenter: true },
  { icon: User, label: "Profile", path: "/profile" },
];

const BottomTabBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background shadow-nav">
      <div className="mx-auto flex h-20 max-w-lg items-center justify-around px-6">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          const Icon = tab.icon;

          if (tab.isCenter) {
            return (
              <motion.button
                key={tab.path}
                onClick={() => navigate(tab.path)}
                className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary shadow-primary-glow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
              >
                <Icon size={28} weight="bold" className="text-primary-foreground" />
              </motion.button>
            );
          }

          return (
            <motion.button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center gap-1 transition-colors duration-200 ${
                isActive ? "text-primary" : "text-muted"
              }`}
              whileTap={{ scale: 0.96 }}
            >
              <Icon size={28} weight={isActive ? "fill" : "regular"} />
              <span className="text-xs font-medium tracking-wide">{tab.label}</span>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomTabBar;
