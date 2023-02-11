import {FieldErrorsImpl, UseFormRegister} from 'react-hook-form';

import InputErrorMessage from './InputErrorMessage';

import {classNames} from '../utils/functions';

export function Input({
  label,
  placeholder = '',
  type = 'text',
  name = 'input',
  rules = {},
  errors = {},
  register,
  ...props
}: {
  label?: string;
  placeholder?: string;
  type?: string;
  name?: string;
  pattern?: string;
  rules: any;
  autoComplete?: string;
  errors?: FieldErrorsImpl<{
    [x: string]: any;
  }>;
  register: UseFormRegister<any>;
}) {
  return (
    <div>
      {label && (
        <label htmlFor={`${name}_input`} className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        id={`${name}_input`}
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        {...props}
        className={classNames(
          errors[name]
            ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
            : 'border-gray-200 focus:border-indigo-500 focus:ring-indigo-500',
          'block w-full appearance-none rounded-md border-2 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none sm:text-sm'
        )}
      />
      <InputErrorMessage error={errors[name]} />
    </div>
  );
}
