
import React from "react";
import { MousePointerClick, WandSparkles, TrendingUp } from "lucide-react";

const HOW_IT_WORKS = [
  {
    icon: <MousePointerClick className="w-8 h-8 text-rose-500 animate-pulse" />,
    title: "1. Upload Image",
    desc: "Drop, browse, or snap a photo. Captionify works with PNG & JPEG.",
  },
  {
    icon: <WandSparkles className="w-8 h-8 text-primary animate-spin-slow" />,
    title: "2. AI Does Magic",
    desc: "Our AI analyzes objects, scenes & context with next-gen models.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-500 animate-bounce" />,
    title: "3. Get Your Caption",
    desc: "Grab your new, natural-sounding caption—ideal for accessibility, SEO, or sharing.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full py-10 md:py-14 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center gradient-text mb-10 animate-fade-in">
        How <span className="gradient-text">Captionify</span> Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {HOW_IT_WORKS.map((step, i) => (
          <div
            key={step.title}
            className={`flex flex-col items-center glass-morphism p-8 rounded-2xl shadow-xl border-0 backdrop-blur-xl hover-scale transition-transform
              ${i === 1 ? "scale-110 z-10 bg-gradient-to-br from-white/60 via-primary/10 to-secondary/10" : "bg-background/80"}
              animate-fade-in`}
            style={{ animationDelay: `${0.5 + i * 0.13}s`, animationFillMode: "both" }}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full mb-5 bg-gradient-to-tr from-primary/70 via-secondary/60 to-rose-200/10 shadow-lg ring-2 ring-primary/20">
              {step.icon}
            </div>
            <h3 className="font-bold text-lg md:text-xl mb-2 text-foreground text-center">{step.title}</h3>
            <p className="text-base text-muted-foreground font-medium text-center">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
