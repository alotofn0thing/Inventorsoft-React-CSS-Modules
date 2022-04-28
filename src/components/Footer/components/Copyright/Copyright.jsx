import styles from './Copyright.module.scss';

export const Copyright = () => {
	return (
		<div className={styles.copyright}>
			<p>
				The company "WTG Spain" specializes in the investment and sale of real
				estate in Spain, and the provision of legal and consulting services.
				<br />
				All rights reserved. "WTG Spain" - The Best Real Estate in Spain. ©
				Copyright 2007 - 2020.
			</p>
		</div>
	);
};
