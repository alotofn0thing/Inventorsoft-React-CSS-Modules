import { Nav } from './components/Nav/Nav';
import { ContactsSection } from './components/ContactsSection/ContactsSection';
import { Type } from './components/Type/Type';
import { Follow } from './components/Follow/Follow';
import { Copyright } from './components/Copyright/Copyright';

import logo from '../../assets/icons/footer_logo.svg';

import styles from './Footer.module.scss';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<div>
						<img src={logo} alt='logo' />
					</div>
					<h3 className={styles.title}>
						<b>the best</b> real estate in spain
					</h3>
				</div>
				<Nav />
				<div className={styles.content}>
					<ContactsSection />
					<Type />
					<Follow />
				</div>
				<Copyright />
			</div>
		</footer>
	);
};
