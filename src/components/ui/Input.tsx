import React from 'react';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  error?: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  value,
  onChange,
  className = '',
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <input
        value={value}
        onChange={handleChange}
        className={`block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 px-3 text-base placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 dark:text-gray-300 transition-colors ${
          error ? 'border-red-500 dark:border-red-500' : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{error}</p>}
    </div>
  );
};

export default Input;