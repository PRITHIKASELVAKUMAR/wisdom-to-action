import { useState } from "react";
import { motion } from "framer-motion";
import { MagnifyingGlass, Plant, FirstAid, Drop, HandHeart, Leaf, Fire } from "phosphor-react";
import AppShell from "@/components/AppShell";
import KnowledgeCard from "@/components/KnowledgeCard";
import CategoryChip from "@/components/CategoryChip";
import heroImage from "@/assets/hero-community.png";

const categories = [
  { icon: <Plant size={20} />, label: "Farming" },
  { icon: <FirstAid size={20} />, label: "Herbal Medicine" },
  { icon: <Drop size={20} />, label: "Water Conservation" },
  { icon: <HandHeart size={20} />, label: "Traditional Crafts" },
  { icon: <Leaf size={20} />, label: "Sustainable Living" },
];

const trendingPractices = [
  {
    title: "Natural Pest Control with Neem Leaves",
    author: "Rajamma Devi",
    location: "Alangulam Village",
    category: "Farming",
    summary: "A time-tested method using neem leaf extract to protect crops without harmful chemicals. This practice has been used for generations.",
    imageUrl: heroImage,
    likes: 147,
  },
  {
    title: "Rainwater Harvesting Using Traditional Bunds",
    author: "Krishnan Pillai",
    location: "Thanjavur District",
    category: "Water Conservation",
    summary: "Building small earthen bunds to capture and store rainwater, recharging groundwater levels during monsoon season.",
    likes: 89,
  },
  {
    title: "Turmeric & Tulsi Remedy for Common Cold",
    author: "Lakshmi Amma",
    location: "Wayanad, Kerala",
    category: "Herbal Medicine",
    summary: "A simple home remedy combining fresh turmeric and tulsi leaves, passed down through five generations of healers.",
    likes: 203,
  },
  {
    title: "Bamboo Weaving for Water Filters",
    author: "Mohan Das",
    location: "Tripura",
    category: "Traditional Crafts",
    summary: "Artisans create bamboo-based water filtration units that purify stream water using layers of charcoal and sand.",
    likes: 56,
  },
];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = activeCategory
    ? trendingPractices.filter((p) => p.category === activeCategory)
    : trendingPractices;

  return (
    <AppShell>
      <div className="px-6 pt-12">
        {/* Header */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm font-medium text-muted">Welcome back 👋</p>
          <h1 className="text-2xl font-bold text-foreground">Your Wisdom, Our Future.</h1>
        </motion.div>

        {/* Search */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <MagnifyingGlass
            size={22}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="text"
            placeholder="Search knowledge..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-14 w-full rounded-2xl bg-input pl-12 pr-4 text-foreground placeholder:text-muted focus:outline-none focus:ring-[3px] focus:ring-ring"
          />
        </motion.div>

        {/* Categories */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <h2 className="mb-3 text-lg font-semibold text-foreground">Categories</h2>
          <div className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <CategoryChip
                key={cat.label}
                icon={cat.icon}
                label={cat.label}
                isActive={activeCategory === cat.label}
                onClick={() =>
                  setActiveCategory(activeCategory === cat.label ? null : cat.label)
                }
              />
            ))}
          </div>
        </motion.div>

        {/* Trending */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div className="mb-4 flex items-center gap-2">
            <Fire size={22} className="text-accent" weight="fill" />
            <h2 className="text-lg font-semibold text-foreground">
              {activeCategory ? activeCategory : "Trending Practices"}
            </h2>
          </div>
          <div className="flex flex-col gap-4 pb-4">
            {filtered.map((practice, i) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.08, duration: 0.4 }}
              >
                <KnowledgeCard {...practice} />
              </motion.div>
            ))}
          </div>
          {filtered.length > 0 && (
            <motion.button
              className="mb-4 h-12 w-full rounded-2xl bg-card text-sm font-medium text-foreground shadow-card transition-all duration-200"
              whileTap={{ scale: 0.98 }}
            >
              Load More
            </motion.button>
          )}
        </motion.div>
      </div>
    </AppShell>
  );
};

export default Home;
