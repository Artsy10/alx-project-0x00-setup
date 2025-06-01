// components/Button.tsx
import React from "react";

interface ButtonProps {
  title: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
}

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-5 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
  return (
    <button className={`bg-blue-600 text-white ${sizeClasses[size]} ${shape}`}>
      {title}
    </button>
  );
};

export default Button;
