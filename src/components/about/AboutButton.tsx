import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  href?: string;
}

export function AboutButton({ variant = 'primary', href, className = '', children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-neue-montreal font-medium transition-transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-[#051A24] text-white rounded-full px-7 py-3 shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0),inset_0_2px_8px_0_rgba(255,255,255,0.5)]",
    secondary: "bg-white text-[#051A24] rounded-full px-7 py-3 shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)]",
    tertiary: "bg-white text-[#0D212C] rounded-full px-7 py-3 shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)]"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
