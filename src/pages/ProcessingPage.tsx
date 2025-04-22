
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/page-layout";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useCaption } from "@/context/caption-context";
import { XCircle } from "lucide-react";

export default function ProcessingPage() {
  const { image, imageUrl, isProcessing, error, processImage } = useCaption();
  const navigate = useNavigate();
  const [processingStep, setProcessingStep] = useState("Initializing...");
  const [timeRemaining, setTimeRemaining] = useState(3);
  
  // Redirect if no image is uploaded
  useEffect(() => {
    if (!image) {
      navigate("/upload");
    }
  }, [image, navigate]);

  // Start processing the image
  useEffect(() => {
    if (image && !isProcessing && !error) {
      const processAsync = async () => {
        await processImage();
        navigate("/results");
      };

      // Add small delay to show loading states
      setTimeout(() => {
        processAsync();
      }, 500);
    }
  }, [image, isProcessing, error, processImage, navigate]);

  // Update processing steps for visual feedback
  useEffect(() => {
    if (isProcessing) {
      const steps = [
        "Initializing...", 
        "Analyzing image...", 
        "Identifying objects...", 
        "Determining context...", 
        "Generating caption..."
      ];
      
      let currentStep = 0;
      const intervalId = setInterval(() => {
        if (currentStep < steps.length - 1) {
          currentStep++;
          setProcessingStep(steps[currentStep]);
        }
      }, 800);

      // Countdown timer effect
      const timerId = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timerId);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        clearInterval(intervalId);
        clearInterval(timerId);
      };
    }
  }, [isProcessing]);

  // Handle cancel processing
  const handleCancel = () => {
    navigate("/upload");
  };

  if (error) {
    return (
      <PageLayout>
        <div className="max-w-xl mx-auto flex flex-col items-center py-16">
          <div className="text-destructive mb-4">
            <XCircle size={48} />
          </div>
          <h1 className="text-2xl font-semibold mb-4">Processing Error</h1>
          <p className="text-muted-foreground mb-8 text-center">{error}</p>
          <button
            onClick={() => navigate("/upload")}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
          >
            Try Again
          </button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Processing Your Image...
        </h1>
        
        {imageUrl && (
          <div className="mb-8 relative">
            <div className="mx-auto max-w-sm border rounded-lg overflow-hidden shadow-lg">
              <img 
                src={imageUrl}
                alt="Uploaded"
                className="w-full h-64 object-contain bg-accent/20"
              />
            </div>
          </div>
        )}

        <div className="flex flex-col items-center py-8">
          <LoadingSpinner size="lg" />
          <p className="mt-4 text-lg">{processingStep}</p>
          <p className="mt-2 text-muted-foreground">
            Estimated time remaining: {timeRemaining} seconds
          </p>
        </div>

        <div className="text-center mt-4">
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-sm border border-input rounded-md hover:bg-accent/50 transition-colors"
          >
            Cancel Processing
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
