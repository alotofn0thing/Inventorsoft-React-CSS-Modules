import { SubscribeForm } from './components/SubscribeForm/SubscribeForm';

import facebook from '../../../../assets/icons/footer_facebook.svg';
import youtube from '../../../../assets/icons/footer_youtube.svg';
import linkedin from '../../../../assets/icons/footer_linkedin.svg';
import instagram from '../../../../assets/icons/footer_instagram.svg';
import tip from '../../../../assets/icons/tip.svg';

import styles from './Follow.module.scss';

export const Follow = () => {
	return (
		<div>
			<h4>Follow us:</h4>

			<div className={styles.socialItems}>
				<div className={styles.group}>
					<div className={styles.item}>
						<div>
							<img src={facebook} alt='facebook' />
						</div>
						<p>Facebook</p>
					</div>
					<div className={styles.item}>
						<div>
							<img src={youtube} alt='youtube' />
						</div>
						<p>YouTube</p>
					</div>
				</div>

				<div className={styles.group}>
					<div className={styles.item}>
						<div>
							<img src={linkedin} alt='linkedin' />
						</div>
						<p>Linkedin</p>
					</div>
					<div className={styles.item}>
						<div>
							<img src={instagram} alt='instagram' />
						</div>
						<p>Instagram</p>
					</div>
				</div>
			</div>

			<div className={styles.form}>
				<div className={styles.message}>
					<p>Subscribe to new objects</p>
					<img src={tip} alt='tip' />
				</div>
				<SubscribeForm />
			</div>
		</div>
	);
};
