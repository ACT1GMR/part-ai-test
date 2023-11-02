import logo from './../../../../assets/images/chingal-logo.png';
import localization from '../../../../constant/localization';
import { Link } from 'react-router-dom';
export default function Logo() {
  return (
    <div className='flex-none'>
      <Link to='/part-ai-test'>
        <img src={logo} alt={localization.logo} />
      </Link>
    </div>
  );
}
