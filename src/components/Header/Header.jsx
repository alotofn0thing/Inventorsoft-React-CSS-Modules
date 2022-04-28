import { HeaderTop } from './components/HeaderTop/HeaderTop';
import { Navigation } from './components/Navigation/Navigation';

import styles from './Header.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<HeaderTop />
			<Navigation />
		</header>
	);
};
