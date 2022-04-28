import styles from './SubscribeForm.module.scss';

export const SubscribeForm = () => {
	return (
		<form className={styles.form} onSubmit=''>
			<div className={styles.container}>
				<input
					className={styles.input}
					name='email'
					type='email'
					placeholder='Your email'
					// onChange={handleChange}
				/>

				<button className={styles.btn}>Subscribe</button>
			</div>
		</form>
	);
};
