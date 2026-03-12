import { motion } from "framer-motion";
import { Microphone, VideoCamera, Image, PencilSimple, Sparkle } from "phosphor-react";
import AppShell from "@/components/AppShell";

const uploadOptions = [
  { icon: Microphone, label: "Record Voice", description: "Speak your knowledge, AI converts to text", color: "bg-primary/10 text-primary" },
  { icon: VideoCamera, label: "Upload Video", description: "Share a demonstration or tutorial", color: "bg-accent/10 text-accent" },
  { icon: Image, label: "Upload Image", description: "Share photos of practices or plants", color: "bg-ring/10 text-ring" },
  { icon: PencilSimple, label: "Write Text", description: "Type your knowledge directly", color: "bg-muted/10 text-muted-foreground" },
];

const Publish = () => {
  return (
    <AppShell>
      <div className="px-6 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="mb-2 text-2xl font-bold text-foreground">Share Your Knowledge</h1>
          <p className="mb-8 text-base text-muted">
            Your wisdom can help communities thrive. Choose how you'd like to share.
          </p>
        </motion.div>

        {/* Voice Input Hero */}
        <motion.button
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-primary-glow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", duration: 0.6, bounce: 0.2 }}
        >
          <Microphone size={36} weight="fill" className="text-primary-foreground" />
        </motion.button>
        <p className="mb-8 text-center text-sm text-muted">Tap to start speaking</p>

        {/* Upload Options */}
        <div className="flex flex-col gap-3">
          {uploadOptions.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <motion.button
                key={opt.label}
                className="flex items-center gap-4 rounded-3xl bg-card p-5 text-left shadow-card transition-all duration-200"
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${opt.color}`}>
                  <Icon size={24} weight="regular" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{opt.label}</h3>
                  <p className="text-sm text-muted">{opt.description}</p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* AI Features */}
        <motion.div
          className="mt-8 rounded-3xl bg-primary/5 p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <div className="mb-3 flex items-center gap-2">
            <Sparkle size={20} weight="fill" className="text-primary" />
            <h3 className="text-base font-semibold text-foreground">AI-Powered Features</h3>
          </div>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li>• Speech to text conversion</li>
            <li>• Auto translation to multiple languages</li>
            <li>• Smart tagging and categorization</li>
            <li>• Content summarization</li>
          </ul>
        </motion.div>
      </div>
    </AppShell>
  );
};

export default Publish;
