import { Link } from 'react-router-dom';

import mail from '../../../../assets/icons/header_mail.svg';
import phone from '../../../../assets/icons/header_phone.svg';
import whatsapp from '../../../../assets/icons/header_whatsapp.svg';
import heart from '../../../../assets/icons/header_heart.svg';
import flag from '../../../../assets/icons/header_lang.svg';

import styles from './HeaderTop.module.scss';

export const HeaderTop = () => {
	return (
		<div className={styles.topHeader}>
			<div className={styles.container}>
				<div className={styles.contacts}>
					<div className={styles.email}>
						<a href='mailto:sales@wtgspain.com'>
							<img src={mail} alt='mail' />
							sales@wtgspain.com
						</a>
					</div>
					<div className={styles.phone}>
						<a href='tel:+34 965 020784'>
							<img src={phone} alt='phone' />
							+34 965 020784
						</a>
					</div>
					<div className={styles.whatsapp}>
						<Link to='/'>
							<img src={whatsapp} alt='whatsapp' />
							WhatsApp
						</Link>
					</div>
				</div>
				<div className={styles.langContainer}>
					<div className={styles.like}>
						<img src={heart} alt='heart' />
					</div>
					<div className={styles.lang}>
						<img src={flag} alt='flag' />
					</div>
				</div>
			</div>
		</div>
	);
};
