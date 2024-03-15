import React from 'react'

interface ButtonProps {
    label: string;
    disabled: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }

const Button = ({label, disabled, onClick}: ButtonProps) => {
    // Define button styles
  const buttonClasses = `
  inline-flex items-center px-4 py-2 bg-slate-500 hover:bg-slate-700 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700
  ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
`;
  return (
    <>
      <button type="submit" className={buttonClasses} onClick={onClick}>
          {label}
        </button>
    </>
  )
}

export default Button
