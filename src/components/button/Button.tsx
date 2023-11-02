import clsxm from '../../helper/clsxm';
import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { ClipLoader, MoonLoader, SyncLoader } from 'react-spinners';

export enum INPUT_TYPES {
  TEXT = 'text',
  NUMBER = 'number',
  EMAIL = 'email',
  PASSWORD = 'password',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  isLoading?: boolean;
}

export default function Button({
  className,
  children,
  isLoading,
  ...props
}: Props) {
  return (
    <button
      className={clsxm(
        'rounded-[16px] bg-[#0559FD] px-[24px] py-[16px] text-white shadow-2xl',
        isLoading && 'relative',
        className,
      )}
      {...props}
    >
      {isLoading && (
        <SyncLoader size={5} className='absolute start-5' color='#fff' />
      )}
      {children}
    </button>
  );
}
