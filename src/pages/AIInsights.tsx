import { motion } from "framer-motion";
import { Sparkle, TrendUp, Leaf, Drop } from "phosphor-react";
import AppShell from "@/components/AppShell";

const insights = [
  {
    icon: <Drop size={24} className="text-ring" />,
    title: "Water Efficiency",
    stat: "25% more efficient",
    description: "Your rainwater harvesting practice saves more water than the district average.",
    progress: 75,
  },
  {
    icon: <Leaf size={24} className="text-primary" />,
    title: "Soil Health",
    stat: "Excellent",
    description: "Composting practices in your region show improved soil nutrient levels.",
    progress: 90,
  },
  {
    icon: <TrendUp size={24} className="text-accent" />,
    title: "Community Impact",
    stat: "147 farmers helped",
    description: "Your shared knowledge reached farmers across 12 villages this season.",
    progress: 60,
  },
];

const suggestions = [
  "Try intercropping with legumes to naturally fix nitrogen in soil",
  "Mulching with dried leaves can reduce water usage by 30%",
  "Companion planting marigolds near tomatoes deters pests naturally",
];

const AIInsights = () => {
  return (
    <AppShell>
      <div className="px-6 pt-12">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-2 flex items-center gap-2">
            <Sparkle size={24} weight="fill" className="text-primary" />
            <h1 className="text-2xl font-bold text-foreground">AI Insights</h1>
          </div>
          <p className="text-base text-muted">Smart analysis of your community's practices</p>
        </motion.div>

        {/* Impact Scores */}
        <div className="mb-8 flex flex-col gap-4">
          {insights.map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-3xl bg-card p-5 shadow-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
            >
              <div className="mb-3 flex items-center gap-3">
                {item.icon}
                <div>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm font-medium text-primary">{item.stat}</p>
                </div>
              </div>
              <p className="mb-3 text-sm text-muted">{item.description}</p>
              <div className="h-2 w-full overflow-hidden rounded-full bg-background">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${item.progress}%` }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <h2 className="mb-4 text-lg font-semibold text-foreground">Eco-Friendly Suggestions</h2>
          <div className="flex flex-col gap-3">
            {suggestions.map((s, i) => (
              <div key={i} className="rounded-2xl bg-primary/5 p-4">
                <p className="text-sm text-foreground">💡 {s}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AppShell>
  );
};

export default AIInsights;
