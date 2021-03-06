import styles from './Info.module.scss';

import phone from '../../../../../../assets/icons/info_phone_blue.svg';
import email from '../../../../../../assets/icons/info_mail_blue.svg';

export const Info = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.decorator} />
			<div className={styles.container}>
				<div className={styles.item}>
					<h3 className={styles.title}>Phone</h3>
					<a className={styles.itemContainer} href='tel:+34 965 020784'>
						<img src={phone} alt='phone' />

						<p>+34 965 020784</p>
					</a>
				</div>

				<div className={styles.item}>
					<h3 className={styles.title}>Office in Spain</h3>
					<p>
						Centro Comercial Playa Flamenca C / Niagara, 63 Local 60/PB, first
						floor, 03189 - Orihuela Costa (Alicante), Spain
					</p>
				</div>

				<div className={styles.item}>
					<h3 className={styles.title}>E-mail</h3>
					<a className={styles.itemContainer} href='mailto:sales@wtgspain.com'>
						<img src={email} alt='email' />

						<p>sales@wtgspain.com</p>
					</a>
				</div>
			</div>
			<div className={styles.decorator} />
		</div>
	);
};
