import { motion } from "framer-motion";
import { User, Gear, Translate, BookmarkSimple, Medal, SignOut } from "phosphor-react";
import AppShell from "@/components/AppShell";

const stats = [
  { label: "Shared", value: "12" },
  { label: "Saved", value: "34" },
  { label: "Helped", value: "892" },
];

const badges = ["🌱 First Share", "🌾 Farming Expert", "💧 Water Saver", "🏅 Community Hero"];

const menuItems = [
  { icon: BookmarkSimple, label: "Saved Posts" },
  { icon: Medal, label: "Badges & Recognition" },
  { icon: Translate, label: "Language Settings" },
  { icon: Gear, label: "Settings" },
  { icon: SignOut, label: "Log Out" },
];

const Profile = () => {
  return (
    <AppShell>
      <div className="px-6 pt-12">
        {/* Avatar & Name */}
        <motion.div
          className="mb-8 flex flex-col items-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <User size={40} weight="regular" className="text-primary" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Amrita Sundaram</h1>
          <p className="text-sm text-muted">Knowledge Keeper · Alangulam Village</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mb-6 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-1 flex-col items-center rounded-2xl bg-card p-4 shadow-card">
              <span className="text-2xl font-bold text-primary">{s.value}</span>
              <span className="text-xs text-muted">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Badges */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >
          <h2 className="mb-3 text-lg font-semibold text-foreground">Your Badges</h2>
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <span key={b} className="rounded-xl bg-card px-3 py-2 text-sm shadow-card">{b}</span>
            ))}
          </div>
        </motion.div>

        {/* Menu */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className="flex items-center gap-4 rounded-2xl bg-card p-4 text-left shadow-card transition-all duration-200 active:scale-[0.98]"
              >
                <Icon size={24} className="text-muted" />
                <span className="text-base font-medium text-foreground">{item.label}</span>
              </button>
            );
          })}
        </motion.div>
      </div>
    </AppShell>
  );
};

export default Profile;
