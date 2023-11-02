import clsxm from '../../helper/clsxm';
import { InputHTMLAttributes } from 'react';

export enum INPUT_TYPES {
  TEXT = 'text',
  NUMBER = 'number',
  EMAIL = 'email',
  PASSWORD = 'password',
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string | undefined;
  containerClassName?: string;
  label?: string;
  type?: INPUT_TYPES;
}

export default function Input({
  className,
  containerClassName,
  type = INPUT_TYPES.TEXT,
  ...props
}: Props) {
  return (
    <div className={clsxm(containerClassName)}>
      <input
        type={type}
        className={clsxm(
          'h-[36px] rounded-[12px] border border-[#2F3756] bg-transparent p-[12px] text-[#fff]',
          className,
        )}
        {...props}
      />
    </div>
  );
}
