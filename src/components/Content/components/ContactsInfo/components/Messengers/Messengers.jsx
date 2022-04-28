import styles from './Messengers.module.scss';

import whatsapp from '../../../../../../assets/icons/messengers_whatsapp.svg';
import viber from '../../../../../../assets/icons/messengers_viber.svg';
import facebook from '../../../../../../assets/icons/messengers_facebook.svg';
import telegram from '../../../../../../assets/icons/messengers_telegram.svg';

export const Messengers = () => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>We are online</h3>
			<div className={styles.links}>
				<div className={styles.link}>
					<div>
						<img src={whatsapp} alt='whatsApp' />
					</div>
					<p>WhatsApp</p>
				</div>
				<div className={styles.link}>
					<div>
						<img src={viber} alt='viber' />
					</div>
					<p>Viber</p>
				</div>
				<div className={styles.link}>
					<div>
						<img src={facebook} alt='facebook' />
					</div>
					<p>Messenger</p>
				</div>
				<div className={styles.link}>
					<div>
						<img src={telegram} alt='telegram' />
					</div>
					<p>Telegram</p>
				</div>
			</div>
		</div>
	);
};
