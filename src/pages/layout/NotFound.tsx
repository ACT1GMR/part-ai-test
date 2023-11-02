import { Link } from 'react-router-dom';

import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <>
      <h1 className={styles.NotFound}>
        Page Not Found Sorry
        <br />
        <Link to='..'>Home</Link>
      </h1>
    </>
  );
}
