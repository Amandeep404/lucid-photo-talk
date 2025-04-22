
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Copy, CheckCheck, ThumbsUp, ThumbsDown, Share2 } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { useCaption } from "@/context/caption-context";

export default function ResultsPage() {
  const { imageUrl, caption } = useCaption();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState<"like" | "dislike" | null>(null);
  const [showFeedbackThanks, setShowFeedbackThanks] = useState(false);

  // Redirect if no results are available
  useEffect(() => {
    if (!imageUrl || !caption) {
      navigate("/upload");
    }
  }, [imageUrl, caption, navigate]);

  const handleCopy = () => {
    if (caption) {
      navigator.clipboard.writeText(caption.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleFeedback = (type: "like" | "dislike") => {
    setFeedback(type);
    setShowFeedbackThanks(true);
    // In a real app, you would send this feedback to your backend
  };

  const handleTryAnother = () => {
    navigate("/upload");
  };

  const handleShare = () => {
    // In a real app, this would open a share dialog
    alert("Sharing functionality would be implemented here!");
  };

  if (!imageUrl || !caption) {
    return null; // Will redirect in useEffect
  }

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Caption Result</h1>
        
        <div className="grid grid-cols-1 gap-8 mb-8">
          {/* Image Display */}
          <div className="border rounded-lg overflow-hidden shadow-lg mx-auto max-w-md">
            <img 
              src={imageUrl}
              alt="Processed"
              className="w-full h-64 object-contain bg-accent/20"
            />
          </div>
          
          {/* Caption Result */}
          <div className="bg-card border rounded-lg p-6 shadow-md">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-medium">Generated Caption:</h2>
              <div className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                {Math.round(caption.confidence * 100)}% confidence
              </div>
            </div>
            <div className="bg-accent/30 p-4 rounded-md mb-4">
              <p className="text-xl leading-relaxed">"{caption.text}"</p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-md transition-colors"
              >
                {copied ? <CheckCheck size={18} /> : <Copy size={18} />}
                <span>{copied ? "Copied!" : "Copy to Clipboard"}</span>
              </button>
              
              <button
                className="flex items-center gap-2 border border-input hover:bg-accent/50 px-4 py-2 rounded-md transition-colors"
                onClick={handleShare}
              >
                <Share2 size={18} />
                <span>Share Result</span>
              </button>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="bg-card border rounded-lg p-6 shadow-md">
            <h3 className="font-medium mb-4">How was this caption?</h3>
            
            {!showFeedbackThanks ? (
              <div className="flex gap-4">
                <button
                  onClick={() => handleFeedback("like")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    feedback === "like"
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : "border border-input hover:bg-accent/50"
                  }`}
                >
                  <ThumbsUp size={18} />
                  <span>Helpful</span>
                </button>
                
                <button
                  onClick={() => handleFeedback("dislike")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    feedback === "dislike"
                      ? "bg-red-100 text-red-700 border border-red-300"
                      : "border border-input hover:bg-accent/50"
                  }`}
                >
                  <ThumbsDown size={18} />
                  <span>Not Helpful</span>
                </button>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
                <p>Thank you for your feedback! This helps us improve our service.</p>
              </div>
            )}
          </div>
        </div>

        {/* Try Another Button */}
        <div className="flex justify-center">
          <button
            onClick={handleTryAnother}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Try Another Image
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
