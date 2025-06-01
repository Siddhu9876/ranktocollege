import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: SelectOption[];
  label?: string;
  onChange: (value: string) => void;
  error?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  label,
  value,
  onChange,
  error,
  placeholder,
  className = '',
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={handleChange}
          className={`block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-base focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 dark:text-gray-300 transition-colors ${
            error ? 'border-red-500 dark:border-red-500' : ''
          } ${className}`}
          {...props}
        >
          {placeholder && (
            <option value="\" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
      {error && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{error}</p>}
    </div>
  );
};

export default Select;