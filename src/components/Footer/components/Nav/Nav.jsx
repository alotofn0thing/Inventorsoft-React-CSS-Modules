import { Link } from 'react-router-dom';

import styles from './Nav.module.scss';

export const Nav = () => {
	return (
		<div className={styles.container}>
			<div className={styles.nav}>
				<Link to='/cities'>All cities</Link>
				<Link to='/blog'>Blog</Link>
				<Link to='/video'>Video</Link>
				<Link to='/contacts'>Contacts</Link>
			</div>
		</div>
	);
};
