import Logo from './../header/Logo/Logo';
import LeftControl from './LeftControl/LeftControl';

export default function Header() {
  return (
    <div className='flex h-[148px] max-h-[148px] w-full flex-none flex-row items-center justify-items-center border-b border-[#182040] px-[24px]'>
      <Logo />
      <LeftControl />
    </div>
  );
}
