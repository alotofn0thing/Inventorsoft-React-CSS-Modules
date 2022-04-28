import { useState } from 'react';

import toTop from '../../assets/icons/toTop.svg';

import styles from './ToTopBtn.module.scss';

export const ToTopBtn = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 200) {
			setVisible(true);
		} else if (scrolled <= 200) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	window.addEventListener('scroll', toggleVisible);
	return (
		<div
			className={styles.toTop}
			onClick={scrollToTop}
			style={{ display: visible ? 'inline' : 'none' }}
		>
			<a href='#header'>
				<img src={toTop} alt='toTop' />
			</a>
		</div>
	);
};
