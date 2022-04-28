import stars from '../../../../assets/icons/stars.svg';
import smartphone from '../../../../assets/icons/footer_smartphone.svg';
import mail from '../../../../assets/icons/footer_mail.svg';
import location from '../../../../assets/icons/location.svg';

import styles from './ContactsSection.module.scss';

export const ContactsSection = () => {
	return (
		<div>
			<h4>Contacts:</h4>
			<div className={styles.contacts}>
				<div className={styles.item}>
					<div className={styles.container}>
						<img src={smartphone} alt='phone_icon' />
					</div>
					<p>+34 (965) 020 - 784</p>
				</div>

				<div className={styles.item}>
					<div className={styles.container}>
						<img className={styles.mail} src={mail} alt='mail' />
					</div>

					<p>sales@wtgspain.com</p>
				</div>

				<div className={styles.item}>
					<div className={styles.container}>
						<img className={styles.location} src={location} alt='location' />
					</div>
					<p className={styles.address}>
						Centro Comercial «Playa Flamenca» &nbsp; C/ Niagara, 63 Local 60/PB,
						first floor, 03189 - Orihuela Costa (Alicante), Spain
					</p>
				</div>

				<div className={styles.stars}>
					<span>Reating 4.9/5:</span>
					<img src={stars} alt='stars' />
					<span>820 votes</span>
				</div>
			</div>
		</div>
	);
};
