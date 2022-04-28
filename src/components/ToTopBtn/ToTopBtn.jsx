import toTop from '../../assets/icons/toTop.svg';

import styles from './ToTopBtn.module.scss';

export const ToTopBtn = () => {
	return (
		<div className={styles.toTop}>
			<a href='#header'>
				<img src={toTop} alt='toTop' />
			</a>
		</div>
	);
};
