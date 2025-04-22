
import React, { createContext, useState, useContext, ReactNode } from "react";
import { CaptionResult, generateCaption } from "@/services/caption-service";

interface CaptionContextType {
  image: File | null;
  imageUrl: string | null;
  caption: CaptionResult | null;
  isProcessing: boolean;
  error: string | null;
  uploadImage: (file: File) => void;
  processImage: () => Promise<void>;
  resetState: () => void;
}

const CaptionContext = createContext<CaptionContextType | undefined>(undefined);

interface CaptionProviderProps {
  children: ReactNode;
}

export function CaptionProvider({ children }: CaptionProviderProps) {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [caption, setCaption] = useState<CaptionResult | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = (file: File) => {
    setImage(file);
    setImageUrl(URL.createObjectURL(file));
    setCaption(null);
    setError(null);
  };

  const processImage = async () => {
    if (!image) {
      setError("No image selected");
      return;
    }

    try {
      setIsProcessing(true);
      setError(null);
      
      const result = await generateCaption(image);
      setCaption(result);
    } catch (err) {
      setError("Error processing image. Please try again.");
      console.error("Error processing image:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  const resetState = () => {
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }
    setImage(null);
    setImageUrl(null);
    setCaption(null);
    setIsProcessing(false);
    setError(null);
  };

  return (
    <CaptionContext.Provider
      value={{
        image,
        imageUrl,
        caption,
        isProcessing,
        error,
        uploadImage,
        processImage,
        resetState
      }}
    >
      {children}
    </CaptionContext.Provider>
  );
}

export function useCaption() {
  const context = useContext(CaptionContext);
  if (context === undefined) {
    throw new Error("useCaption must be used within a CaptionProvider");
  }
  return context;
}
