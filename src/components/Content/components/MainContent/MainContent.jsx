import { Link } from 'react-router-dom';

import { ContactForm } from './ContactForm/ContactForm';

import map from '../../../../assets/images/map.svg';

import styles from './MainContent.module.scss';

export const MainContent = () => {
	return (
		<div className={styles.contact}>
			<p className={styles.heading}>
				We are always in touch and will be happy to resolve any of your
				questions.
			</p>

			<div className={styles.container}>
				<div className={styles.map}>
					<img src={map} alt='map' />
				</div>

				<div className={styles.form}>
					<h2>Contact us</h2>
					<ContactForm />
					<div className={styles.privacy}>
						<Link to='/privacy'>Privacy policy</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
