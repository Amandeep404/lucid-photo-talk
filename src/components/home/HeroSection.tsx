
import React from "react";
import { ArrowRight, WandSparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative w-full py-24 flex flex-col items-center justify-center">
      {/* Animated Gradient Blobs */}
      <div>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 w-[130vw] h-[60vw] max-w-6xl bg-gradient-to-br from-primary/40 via-secondary/40 to-accent/30 rounded-full blur-3xl opacity-40 animate-pulse-slow" />
        <div className="absolute right-0 top-28 w-60 h-60 bg-gradient-to-tr from-secondary/30 to-primary/30 rounded-full blur-2xl opacity-30 animate-spin-slow" />
        <div className="absolute left-8 bottom-0 w-40 h-40 bg-gradient-to-tl from-primary/30 to-purple-300/40 rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>
      {/* Sparkles */}
      <WandSparkles className="absolute left-12 top-10 text-yellow-300/70 w-14 h-14 animate-pulse pointer-events-none" />
      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight drop-shadow-xl text-center mb-7 animate-fade-in bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Unleash <span className="relative font-extrabold">AI-Powered</span>
        <br />
        <span className="relative">
          Image <span className="px-2 py-1 bg-white/30 rounded-xl shadow-lg mr-2">Captioning</span>
        </span>
        <span className="ml-2 relative">
          <WandSparkles className="inline w-8 h-8 text-yellow-400 drop-shadow animate-fade-in" />
        </span>
      </h1>
      {/* Subheadline */}
      <p className="text-xl md:text-2xl text-muted-foreground text-center mt-3 mb-12 font-medium max-w-2xl animate-fade-in" style={{ animationDelay: "0.15s", animationFillMode: "both" }}>
        Turn images into captivating, human-level captions instantly.<br className="hidden md:inline" />
        <span className="text-primary ml-2">Boost accessibility, engagement, and creativity.</span>
      </p>
      {/* CTA Button */}
      <Link
        to="/upload"
        className="group bg-gradient-to-r from-primary via-secondary to-rose-300 hover:from-secondary hover:to-primary shadow-2xl hover:scale-105 active:scale-98 transition-all duration-200 px-10 py-5 rounded-2xl text-white font-bold text-lg md:text-xl border-0 relative overflow-hidden animate-scale-in cursor-pointer flex items-center justify-center gap-3"
        style={{
          boxShadow: "0 8px 36px 4px rgba(139,93,246,0.18), 0 2px 8px rgba(126,105,171,0.18)",
        }}
      >
        <ArrowRight className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-2" />
        <span>
          Get Started – <span className="font-extrabold underline decoration-wavy underline-offset-4">It&#39;s Free</span>
        </span>
        {/* Button Sparkle */}
        <WandSparkles className="absolute -right-6 -top-3 w-10 h-10 text-yellow-300/70 animate-pulse-slow pointer-events-none" />
      </Link>
      {/* Scroll indicator */}
      <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 flex flex-col items-center">
        <span className="w-[30px] h-[30px] bg-gradient-to-b from-accent/60 to-foreground/10 rounded-full blur-md opacity-60" />
        <span className="inline-block animate-bounce text-primary text-3xl mt-2">&#8595;</span>
      </div>
    </section>
  );
}
