
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/page-layout";
import { AlertTriangle } from "lucide-react";

interface ErrorPageProps {
  errorMessage?: string;
}

export default function ErrorPage({ errorMessage = "We couldn't process your request." }: ErrorPageProps) {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="max-w-xl mx-auto py-12 text-center">
        <div className="flex justify-center mb-6">
          <AlertTriangle size={64} className="text-destructive" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Oops! An Error Has Occurred</h1>
        <p className="text-lg text-muted-foreground mb-8">
          {errorMessage}
        </p>
        
        <div className="bg-card border rounded-lg p-6 shadow-md mb-8">
          <h2 className="font-medium mb-4">Possible solutions:</h2>
          <ul className="text-left space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span>Make sure your file is under 3MB</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span>Check that your file is JPEG or PNG format</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span>Try a different image</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span>Check your internet connection</span>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
          >
            Try Again
          </button>
          <Link
            to="/"
            className="px-4 py-2 border border-input rounded-md hover:bg-accent/50"
          >
            Return to Home
          </Link>
        </div>
        
        <div className="mt-8 pt-4 border-t">
          <p className="text-sm text-muted-foreground mb-2">Need more help?</p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="text-primary hover:underline text-sm"
            >
              Contact Support
            </Link>
            <button
              onClick={() => alert("Error reported to our team!")}
              className="text-primary hover:underline text-sm"
            >
              Report This Error
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
