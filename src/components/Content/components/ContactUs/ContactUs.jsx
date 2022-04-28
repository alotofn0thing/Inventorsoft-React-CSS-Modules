import styles from './ContactUs.module.scss';

import girlSVG from '../../../../assets/images/contacts_img.svg';
import shapeSVG from '../../../../assets/images/contacts_shape.svg';

export const ContactUs = () => {
	return (
		<div className={styles.container}>
			<div>
				<img src={shapeSVG} alt='shape' />
			</div>
			..
			<div className={styles.heading}>
				<div className={styles.company}>
					<span className={styles.decorator} />
					<h4>wtg spain</h4>
				</div>

				<div className={styles.text}>
					<h2 className={styles.title}>
						Do you need <span>some help</span>?
					</h2>
					<p>
						Contact us right now and our team will do everything to help you.
					</p>
				</div>

				<button className={styles.btn}>Contact us</button>
			</div>
			<div>
				<img src={girlSVG} alt='girl' />
			</div>
		</div>
	);
};
