import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'whatsapp' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm";
  
  const variants = {
    primary: "bg-blue-900 text-white hover:bg-blue-800 hover:shadow-blue-900/30",
    whatsapp: "bg-green-600 text-white hover:bg-green-700 hover:shadow-green-600/30",
    outline: "border-2 border-blue-900 text-blue-900 hover:bg-blue-50"
  };

  const widthStyles = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;