import { motion } from "framer-motion";
import { Heart, BookmarkSimple, ShareNetwork } from "phosphor-react";

interface KnowledgeCardProps {
  title: string;
  author: string;
  location: string;
  category: string;
  summary: string;
  imageUrl?: string;
  likes: number;
  onClick?: () => void;
}

const KnowledgeCard = ({
  title,
  author,
  location,
  category,
  summary,
  imageUrl,
  likes,
  onClick,
}: KnowledgeCardProps) => {
  return (
    <motion.div
      className="cursor-pointer rounded-3xl bg-card p-5 shadow-card"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
      onClick={onClick}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="mb-4 h-44 w-full rounded-xl object-cover outline outline-1 -outline-offset-1 outline-border"
          loading="lazy"
        />
      )}
      <div className="mb-2 flex items-center gap-2">
        <span className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {category}
        </span>
        <span className="text-xs text-muted">{location}</span>
      </div>
      <h3 className="mb-1 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mb-1 text-sm text-muted">by {author}</p>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">{summary}</p>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1.5 text-muted transition-colors hover:text-primary">
          <Heart size={20} weight="regular" />
          <span className="text-sm">{likes}</span>
        </button>
        <button className="text-muted transition-colors hover:text-primary">
          <BookmarkSimple size={20} weight="regular" />
        </button>
        <button className="text-muted transition-colors hover:text-primary">
          <ShareNetwork size={20} weight="regular" />
        </button>
      </div>
    </motion.div>
  );
};

export default KnowledgeCard;
