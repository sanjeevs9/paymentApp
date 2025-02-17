"use client";

import { ReactNode } from "react";
import "../styles.css"

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className="bg-red-400"
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
      dwdwd
    </button>
  );
};
