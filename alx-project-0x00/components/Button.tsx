import React from 'react';

type ButtonProps = {
  title: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
};

const Button: React.FC<ButtonProps> = ({ title, size = 'medium', shape = 'rounded-md' }) => {
  let padding = '';
  let fontSize = '';

  // Set padding and font size based on size prop
  switch (size) {
    case 'small':
      padding = 'px-3 py-1';
      fontSize = 'text-sm';
      break;
    case 'medium':
      padding = 'px-4 py-2';
      fontSize = 'text-base';
      break;
    case 'large':
      padding = 'px-6 py-3';
      fontSize = 'text-lg';
      break;
  }

  return (
    <button className={`bg-blue-600 text-white ${padding} ${fontSize} ${shape}`}>
      {title}
    </button>
  );
};

export default Button;
