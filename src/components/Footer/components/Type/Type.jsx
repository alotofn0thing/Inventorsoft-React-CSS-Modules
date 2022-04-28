import { Link } from 'react-router-dom';

import styles from './Type.module.scss';

export const Type = () => {
	return (
		<div className={styles.container}>
			<h4 className={styles.title}>Type:</h4>
			<div className={styles.links}>
				<Link to='/'>Appartaments</Link>
				<Link to='/'>Penthousses</Link>
				<Link to='/'>Townhouses</Link>
				<Link to='/'>Commercial</Link>
				<Link to='/'>Bungalows</Link>
				<Link to='/'>Duplexes</Link>
				<Link to='/'>Villas</Link>
			</div>
		</div>
	);
};
