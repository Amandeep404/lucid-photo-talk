
import React from "react";
import { TrendingUp, ArrowRight } from "lucide-react";

export default function ShowcaseSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto gap-10 md:gap-12 py-6 mb-0 relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
      {/* Example Image */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-background/80 via-accent/30 to-primary/10 min-h-[18rem] aspect-[4/3] max-w-lg w-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          alt="Example input"
          className="w-full h-60 object-cover rounded-xl border border-white/60 shadow-lg transition-transform duration-300 hover:scale-105"
        />
        {/* Animated overlay */}
        <div className="absolute top-7 left-7 w-12 h-12 rounded-full bg-gradient-to-br from-primary/40 to-white/60 blur-xl opacity-40 pointer-events-none animate-pulse" />
      </div>
      {/* Arrow, Caption Card */}
      <div className="flex flex-col items-start md:pl-4 w-full md:w-auto">
        <div className="flex items-center mb-3 animate-fade-in" style={{ animationDelay: "0.35s" }}>
          <ArrowRight size={28} className="text-primary animate-slide-in-right" />
          <span className="ml-2 text-base text-muted-foreground font-semibold">
            In seconds, you get…
          </span>
        </div>
        <div className="relative bg-white/75 dark:bg-card/90 border-0 rounded-2xl p-8 shadow-2xl glass-morphism w-full max-w-lg min-w-[220px] animate-scale-in" style={{ animationDelay: "0.45s" }}>
          <h3 className="text-lg font-extrabold text-primary flex items-center gap-2 mb-1">
            <TrendingUp className="text-green-500 animate-pulse" />
            Generated Caption:
          </h3>
          <p className="text-lg md:text-[20px] font-semibold leading-snug text-foreground transition-colors duration-100 drop-shadow-sm">
            &quot;A sleek gray laptop computer with illuminated keyboard displaying code on its screen in a dimly lit environment.&quot;
          </p>
          {/* Sparkles */}
          <span className="absolute -top-3 -right-2 text-2xl text-yellow-400 animate-pulse pointer-events-none">✨</span>
        </div>
      </div>
    </section>
  );
}
