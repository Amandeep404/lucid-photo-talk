
import React, { useState, useRef, DragEvent, ChangeEvent } from "react";
import { cn } from "@/lib/utils";
import { Upload, Image } from "lucide-react";

interface FileInputProps {
  onFileSelect: (file: File) => void;
  acceptedTypes?: string;
  maxSizeMB?: number;
  className?: string;
}

export const FileInput = ({
  onFileSelect,
  acceptedTypes = "image/jpeg, image/png",
  maxSizeMB = 3,
  className,
}: FileInputProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const validateFile = (file: File): boolean => {
    // Check file type
    if (!acceptedTypes.includes(file.type)) {
      setError(`Invalid file type. Please upload ${acceptedTypes.replace(/image\/|,/g, " ")}.`);
      return false;
    }

    // Check file size (convert MB to bytes)
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      setError(`File too large. Please upload a file smaller than ${maxSizeMB}MB.`);
      return false;
    }

    setError(null);
    return true;
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        onFileSelect(file);
      }
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        onFileSelect(file);
      }
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full">
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "flex flex-col items-center justify-center w-full px-4 py-10 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-200",
          isDragging ? "border-primary bg-accent/50" : "border-border bg-muted/50 hover:bg-accent/30",
          className
        )}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          {isDragging ? (
            <Image className="w-12 h-12 mb-3 text-primary animate-pulse" />
          ) : (
            <Upload className="w-12 h-12 mb-3 text-primary" />
          )}
          <p className="mb-2 text-lg font-semibold text-center">
            {isDragging ? "Drop to upload" : "Drag & Drop your image here"}
          </p>
          <p className="text-sm text-muted-foreground text-center mb-3">or click to browse</p>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/80 transition-colors"
          >
            Browse Files
          </button>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept={acceptedTypes}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
      <p className="mt-2 text-sm text-muted-foreground">
        Supported formats: JPEG, PNG • Maximum file size: {maxSizeMB}MB
      </p>
    </div>
  );
};
