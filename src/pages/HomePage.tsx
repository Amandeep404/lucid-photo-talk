
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Upload } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";

export default function HomePage() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center text-center pt-8 pb-16">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold mb-6 tracking-tight gradient-text">
          AI-Powered Image Captioning
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-12">
          Transform images into descriptive captions automatically using AI.
        </p>

        {/* CTA Button */}
        <Link
          to="/upload"
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-lg mb-16 transition-all group"
        >
          <Upload size={18} />
          <span>Get Started</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>

        {/* Example Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl">
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Example input" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-start mb-2">
              <ArrowRight className="text-primary" />
            </div>
            <div className="bg-card border rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-medium mb-2">Generated Caption:</h3>
              <p className="text-lg">
                "A sleek gray laptop computer with illuminated keyboard displaying code on its screen in a dimly lit environment."
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-20 w-full max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-6 bg-accent/40 rounded-lg border">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 text-white font-bold text-lg">1</div>
              <h3 className="font-medium text-lg mb-2">Upload</h3>
              <p className="text-center text-muted-foreground">
                Upload any image from your device or drag and drop it.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-accent/40 rounded-lg border">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 text-white font-bold text-lg">2</div>
              <h3 className="font-medium text-lg mb-2">Process</h3>
              <p className="text-center text-muted-foreground">
                Our AI analyzes the image to identify objects, scenes and actions.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-accent/40 rounded-lg border">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 text-white font-bold text-lg">3</div>
              <h3 className="font-medium text-lg mb-2">Caption</h3>
              <p className="text-center text-muted-foreground">
                Get an accurate, detailed caption you can copy or share instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
