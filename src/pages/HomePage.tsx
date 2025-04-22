
import React from "react";
import { PageLayout } from "@/components/layout/page-layout";
import HeroSection from "@/components/home/HeroSection";
import ShowcaseSection from "@/components/home/ShowcaseSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";

export default function HomePage() {
  return (
    <PageLayout>
      <main>
        <HeroSection />
        <ShowcaseSection />
        <div className="max-w-3xl mx-auto my-12 border-t-2 border-accent/60 rounded-full opacity-80 animate-fade-in transition duration-100" />
        <HowItWorksSection />
      </main>
    </PageLayout>
  );
}
