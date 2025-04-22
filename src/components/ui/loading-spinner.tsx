
import React from "react";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

export function LoadingSpinner({
  size = "md",
  className,
  text
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-12 w-12"
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Loader className={cn("animate-spin text-primary", sizeClasses[size], className)} />
      {text && <p className="mt-3 text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}
