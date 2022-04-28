import { Link } from 'react-router-dom';

import logo from '../../../../assets/icons/nav_logo.svg';

import styles from './Navigation.module.scss';

export const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<div className={styles.container}>
				<Link className={styles.logo} to='/'>
					<img src={logo} alt='logo' />
				</Link>
				<div className={styles.menuContainer}>
					<div className={styles.menu}>
						<Link to='/cities'>Cities</Link>
						<Link to='/properties'>Properties</Link>
						<Link to='/blog'>Blog</Link>
						<Link to='/video'>Video</Link>
						<Link to='/contacts'>Contacts</Link>
					</div>
					<div className={styles.auth}>
						<Link className='Blog' to='/log-in'>
							Log In
						</Link>
						<span className={styles.separator}></span>
						<Link className='Blog' to='/sign-up'>
							Sign up
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
