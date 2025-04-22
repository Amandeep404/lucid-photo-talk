
import React from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/page-layout";
import { Upload, Search, MessageSquare, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-10 text-center gradient-text">About Captionify</h1>
        
        {/* What is Captionify */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What is Captionify?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Captionify uses advanced AI to generate accurate and descriptive captions for 
            your images automatically. Our technology analyzes visual content and generates
            human-like captions that effectively communicate the context, subjects, and activities
            within images - making content creation faster and improving accessibility.
          </p>
        </div>
        
        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">How Captionify Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-accent/30 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Upload className="text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2">Upload Image</h3>
              <p className="text-muted-foreground">
                Simply upload your image from your device or drag and drop it into the uploader.
              </p>
            </div>
            
            <div className="bg-accent/30 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Search className="text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our AI processes the image, identifying objects, scenes, people, and their relationships.
              </p>
            </div>
            
            <div className="bg-accent/30 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2">Get Caption</h3>
              <p className="text-muted-foreground">
                A descriptive, accurate caption is generated that you can copy, edit, or share.
              </p>
            </div>
          </div>
        </div>
        
        {/* Use Cases */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none">
            <li className="flex items-center gap-2 p-3 rounded bg-secondary/10">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Content creators needing quick image descriptions</span>
            </li>
            <li className="flex items-center gap-2 p-3 rounded bg-secondary/10">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Accessibility improvements for websites</span>
            </li>
            <li className="flex items-center gap-2 p-3 rounded bg-secondary/10">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Social media managers handling multiple posts</span>
            </li>
            <li className="flex items-center gap-2 p-3 rounded bg-secondary/10">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Website developers implementing alt text</span>
            </li>
          </ul>
        </div>
        
        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">FAQ</h2>
          <div className="space-y-4">
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="font-medium mb-2">What image formats are supported?</h3>
              <p className="text-muted-foreground">Currently JPEG and PNG formats are supported.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="font-medium mb-2">Is there a limit to file size?</h3>
              <p className="text-muted-foreground">Yes, maximum 3MB per image.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="font-medium mb-2">How accurate are the captions?</h3>
              <p className="text-muted-foreground">
                Our AI produces captions with high accuracy for common objects and scenes.
                Each caption comes with a confidence score to indicate reliability.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="font-medium mb-2">Can I edit the generated captions?</h3>
              <p className="text-muted-foreground">
                Yes, you can copy the caption and edit it to your liking in your own applications.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-2">
            Have questions or feedback? Reach out to us:
          </p>
          <p className="font-medium">help@captionify.example</p>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/upload"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-lg transition-all group"
          >
            <span>Try Captionify Now</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
