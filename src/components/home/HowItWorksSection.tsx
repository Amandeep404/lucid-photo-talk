
import React from "react";
import { MousePointerClick, WandSparkles, TrendingUp } from "lucide-react";

const HOW_IT_WORKS = [
  {
    icon: <MousePointerClick className="w-8 h-8 text-rose-500 animate-bounce" />,
    title: "1. Upload Image",
    desc: "Drop, browse, or snap a photo. Captionify works with PNG & JPEG.",
    cardClass: "animate-glow-card"
  },
  {
    icon: <WandSparkles className="w-8 h-8 text-primary animate-spin-slow" />,
    title: "2. AI Does Magic",
    desc: "Our AI analyzes objects, scenes & context with next-gen models.",
    cardClass: ""
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-500 animate-bounce" />,
    title: "3. Get Your Caption",
    desc: "Grab your new, natural-sounding caption—ideal for accessibility, SEO, or sharing.",
    cardClass: ""
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
              ${step.cardClass} animate-fade-in`}
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
      <style>
        {`
        @keyframes glow-card {
          0%,100% { box-shadow: 0 0 32px 8px #f6c1f8a3,0 2px 6px rgba(126,105,171,0.10); }
          20% { box-shadow: 0 0 28px 4px #9b87f599,0 1px 4px rgba(139,93,246,0.10); }
          40% { box-shadow: 0 0 36px 18px #f6c1f8cc,0 1px 12px rgba(126,105,171,0.14);}
          60% { box-shadow: 0 0 56px 24px #f6bcff88,0 1px 12px rgba(139,93,246,0.16);}
          80% { box-shadow: 0 0 24px 12px #9b87f52c,0 1px 12px rgba(139,93,246,0.12);}
        }
        .animate-glow-card {
          animation: glow-card 2.8s ease-in-out infinite alternate;
        }
        `}
      </style>
    </section>
  );
}
