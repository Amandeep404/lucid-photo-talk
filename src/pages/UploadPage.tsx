
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/page-layout";
import { FileInput } from "@/components/ui/file-input";
import { useCaption } from "@/context/caption-context";
import { ArrowLeft } from "lucide-react";

export default function UploadPage() {
  const { uploadImage } = useCaption();
  const navigate = useNavigate();

  const handleFileSelect = (file: File) => {
    uploadImage(file);
    // Navigate to processing page after uploading
    navigate("/processing");
  };

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Upload Your Image</h1>
        
        <div className="bg-card rounded-lg shadow-lg p-8 mb-6 border">
          <FileInput onFileSelect={handleFileSelect} />
        </div>

        <Link
          to="/"
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary gap-1 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
      </div>
    </PageLayout>
  );
}
