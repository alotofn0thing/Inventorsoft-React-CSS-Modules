import { ContactUs } from './components/ContactUs/ContactUs';

import { MainContent } from './components/MainContent/MainContent';
import { ContactsInfo } from './components/ContactsInfo/ContactsInfo';

import styles from './Content.module.scss';

export const Content = () => {
	return (
		<>
			<ContactUs />
			<div className={styles.body}>
				<MainContent />
				<ContactsInfo />
			</div>
		</>
	);
};
