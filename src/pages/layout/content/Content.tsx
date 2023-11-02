import BreadCrumb from './..//content/breadcrumb/BreadCrumb';

export default function Content({ children }) {
  return (
    <div className='h-[100vh] bg-[url("/noise.png")] p-[48px]'>
      <BreadCrumb />
      {children}
    </div>
  );
}
