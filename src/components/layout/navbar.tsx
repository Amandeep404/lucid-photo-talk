
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header className={cn("border-b bg-background", className)}>
      <div className="container flex h-16 items-center px-4">
        <Link to="/" className="flex items-center gap-2 mr-8">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-bold">C</span>
          </div>
          <span className="font-bold text-xl tracking-tight">Captionify</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
          <Link
            to="/"
            className="transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="/upload"
            className="transition-colors hover:text-primary"
          >
            Upload
          </Link>
          <Link
            to="/about"
            className="transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            to="/help"
            className="transition-colors hover:text-primary"
          >
            Help
          </Link>
        </nav>
      </div>
    </header>
  );
}
