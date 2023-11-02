import DarkModeControl from './../LeftControl/DarkModeControl/DarkModeControl';
import SearchBar from './../LeftControl/SearchBar/SearchBar';

export default function LeftControl() {
  return (
    <div className='grow-1 flex flex-1 flex-row-reverse'>
      <div className='align-items-center flex flex-row'>
        <SearchBar />
        <DarkModeControl />
      </div>
    </div>
  );
}
