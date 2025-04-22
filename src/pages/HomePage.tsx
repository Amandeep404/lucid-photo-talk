
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Upload, Image, Award, Check } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero background */}
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 z-0 select-none"
          aria-hidden
        >
          {/* Large background gradient blobs */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[90vw] h-[50vw] max-w-5xl bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/20 rounded-full blur-3xl opacity-70" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-secondary/30 via-primary/30 to-accent/10 rounded-full blur-2xl opacity-50" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center pt-16 pb-20">
          {/* Hero Section */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight gradient-text drop-shadow-lg mb-4 animate-fade-in">
            <span className="block">AI-Powered</span>
            <span className="block gradient-text bg-gradient-to-r from-primary to-secondary">Image Captioning</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 font-medium animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Transform your images into vivid, human-like captions instantly.<br className="hidden md:inline" /> Accessibility, storytelling, and content—now effortless.
          </p>

          {/* CTA Button with subtle 3D and icon motion */}
          <Link
            to="/upload"
            className="group flex items-center gap-3 md:gap-4 bg-gradient-to-r from-primary via-secondary to-purple-300 shadow-xl shadow-primary/20 hover:scale-105 active:scale-98 transition-all text-white font-bold text-lg md:text-xl px-8 py-4 rounded-xl mb-16 animate-fade-in relative overflow-hidden"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Upload size={22} className="group-hover:-translate-y-1 transition-transform duration-200" />
              <span>Get Started – It's Free</span>
              <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-200" />
            </span>
            {/* Glowing effect */}
            <span
              className="absolute z-0 bottom-0 right-4 w-16 h-16 bg-gradient-to-tr from-white/20 to-primary/30 rounded-full blur-xl opacity-20 animate-pulse"
              aria-hidden
            />
          </Link>

          {/* Example Showcase */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl w-full mb-8 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <div className="relative border-none rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white via-accent/50 to-secondary/20 backdrop-blur-xl glass-morphism flex items-center aspect-[4/3] justify-center min-h-[18rem]">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Example input"
                className="w-full h-64 object-cover rounded-2xl border border-white/40 shadow-lg"
              />
              {/* Decorative shine */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-white/40 to-primary/60 blur-xl opacity-40" />
            </div>
            <div className="flex flex-col justify-center items-start md:pl-4 animate-fade-in" style={{ animationDelay: '0.65s', animationFillMode: 'both' }}>
              <div className="flex items-center mb-3">
                <ArrowRight size={28} className="text-primary animate-slide-in" />
                <span className="ml-2 text-sm text-muted-foreground">In seconds, you get…</span>
              </div>
              <div className="relative w-full bg-card border-none rounded-xl p-7 shadow-lg glass-morphism">
                <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2"><Check className="text-green-500" />Generated Caption:</h3>
                <p className="text-lg md:text-xl font-medium text-foreground  transition-colors duration-200">
                  "A sleek gray laptop computer with illuminated keyboard displaying code on its screen in a dimly lit environment."
                </p>
                {/* Sparkle */}
                <span className="absolute -top-2 -right-2 text-2xl text-yellow-400 animate-pulse">✨</span>
              </div>
            </div>
          </div>

          {/* Decorative divider line */}
          <div className="h-[2px] w-24 bg-gradient-to-r from-primary via-secondary to-accent mb-16 mx-auto opacity-60 rounded-full animate-fade-in" style={{ animationDelay: '0.75s', animationFillMode: 'both' }} />

          {/* How It Works Section */}
          <div className="w-full max-w-5xl animate-fade-in" style={{ animationDelay: '0.85s', animationFillMode: 'both' }}>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center tracking-tight gradient-text">
              How Captionify Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center glass-morphism p-8 rounded-xl border-0 shadow-lg h-full hover:scale-105 transition-transform">
                <div className="w-14 h-14 bg-primary/85 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <Image className="text-white w-7 h-7" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Upload</h3>
                <p className="text-center text-muted-foreground font-medium text-base">
                  Quickly upload any image from your device—or just drag and drop it.
                </p>
              </div>
              <div className="flex flex-col items-center glass-morphism p-8 rounded-xl border-0 shadow-lg h-full hover:scale-105 transition-transform">
                <div className="w-14 h-14 bg-secondary/90 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <Award className="text-white w-7 h-7" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">AI Analyzes</h3>
                <p className="text-center text-muted-foreground font-medium text-base">
                  Our advanced AI understands your image—identifying objects, scenes & actions with accuracy.
                </p>
              </div>
              <div className="flex flex-col items-center glass-morphism p-8 rounded-xl border-0 shadow-lg h-full hover:scale-105 transition-transform">
                <div className="w-14 h-14 bg-accent/80 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <Check className="text-white w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Get Your Caption!</h3>
                <p className="text-center text-muted-foreground font-medium text-base">
                  Instantly receive a natural, descriptive caption—ready to copy, share, or use for accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

