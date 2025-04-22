
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("border-t py-6 bg-background", className)}>
      <div className="container flex flex-col items-center justify-center gap-4 px-4 md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">
          © 2025 Captionify | All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link
            to="/terms"
            className="underline-offset-4 hover:underline hover:text-foreground"
          >
            Terms
          </Link>
          <Link
            to="/privacy"
            className="underline-offset-4 hover:underline hover:text-foreground"
          >
            Privacy
          </Link>
          <Link
            to="/contact"
            className="underline-offset-4 hover:underline hover:text-foreground"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
