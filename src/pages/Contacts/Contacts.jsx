import { Header } from '../../components/Header/Header';
import { Content } from '../../components/Content/Content';
import { Footer } from '../../components/Footer/Footer';
import { ToTopBtn } from '../../components/ToTopBtn/ToTopBtn';

import styles from './Contacts.module.scss';

export const Contacts = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Content />
			<Footer />
			<ToTopBtn />
		</div>
	);
};
