import { Info } from './components/Info/Info';
import { Messengers } from './components/Messengers/Messengers';

import styles from './ContactsInfo.module.scss';

export const ContactsInfo = () => {
	return (
		<div className={styles.container}>
			<Info />
			<Messengers />
		</div>
	);
};
