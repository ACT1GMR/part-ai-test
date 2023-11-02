import sun from './../../../../../assets/icons/sun.png';
import moon from './../../../../../assets/icons/moon.png';
import clsxm from '../../../../../helper/clsxm';
export default function DarkModeControl() {
  return (
    <div className='mr-[24px] flex w-[92px] flex-row items-center items-center justify-center justify-center rounded-[20px] border border-[#182040] p-[6px]'>
      <Control src={sun} />
      <Control src={moon} active />
    </div>
  );
}

function Control({ src, active = false }) {
  return (
    <div
      className={clsxm(
        'flex h-[36px] w-[36px] items-center justify-center rounded-[13px]',
        active && 'bg-[#0559FD]',
      )}
    >
      <img src={src} className='h-[24px] w-[24px]' />
    </div>
  );
}
