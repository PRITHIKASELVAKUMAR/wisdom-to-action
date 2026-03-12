import { useState } from "react";
import { motion } from "framer-motion";
import { MagnifyingGlass } from "phosphor-react";
import AppShell from "@/components/AppShell";
import KnowledgeCard from "@/components/KnowledgeCard";

const allKnowledge = [
  { title: "Composting with Kitchen Waste", author: "Savitha Bai", location: "Mysuru", category: "Sustainable Living", summary: "Turn everyday kitchen scraps into nutrient-rich compost for your home garden in just 30 days.", likes: 72 },
  { title: "Herbal Toothpaste from Neem Bark", author: "Gopal Reddy", location: "Anantapur", category: "Herbal Medicine", summary: "A traditional recipe for making natural toothpaste using neem bark powder and clove oil.", likes: 134 },
  { title: "Drip Irrigation from Clay Pots", author: "Meena Kumari", location: "Jodhpur", category: "Water Conservation", summary: "Buried clay pot irrigation technique that saves up to 70% water compared to flood irrigation.", likes: 201 },
];

const Search = () => {
  const [query, setQuery] = useState("");
  const results = query
    ? allKnowledge.filter(
        (k) =>
          k.title.toLowerCase().includes(query.toLowerCase()) ||
          k.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AppShell>
      <div className="px-6 pt-12">
        <h1 className="mb-6 text-2xl font-bold text-foreground">Search Knowledge</h1>
        <div className="relative mb-6">
          <MagnifyingGlass size={22} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Try 'herbal', 'water', 'composting'..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-14 w-full rounded-2xl bg-input pl-12 pr-4 text-foreground placeholder:text-muted focus:outline-none focus:ring-[3px] focus:ring-ring"
          />
        </div>
        {query && results.length === 0 && (
          <p className="text-center text-muted">No results found for "{query}"</p>
        )}
        <div className="flex flex-col gap-4">
          {results.map((k) => (
            <KnowledgeCard key={k.title} {...k} />
          ))}
        </div>
        {!query && (
          <div className="mt-12 text-center">
            <MagnifyingGlass size={48} className="mx-auto mb-4 text-border" />
            <p className="text-muted">Search for farming techniques, remedies, and more</p>
          </div>
        )}
      </div>
    </AppShell>
  );
};

export default Search;
