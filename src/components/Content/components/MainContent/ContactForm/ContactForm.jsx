import styles from './ContactForm.module.scss';

export const ContactForm = () => {
	return (
		<form className={styles.form} onSubmit=''>
			<input
				className={styles.input}
				name='name'
				type='text'
				placeholder='Name'
				// onChange={handleChange}
			/>

			<input
				className={styles.input}
				name='phone'
				type='tel'
				placeholder='Phone'
				// onChange={handleChange}
			/>

			<input
				className={styles.input}
				name='email'
				type='email'
				placeholder='E-mail'
				// onChange={handleChange}
			/>

			<textarea
				className={styles.textarea}
				name='messageText'
				placeholder='Message'
				rows={'4'}
				// onChange={handleChange}
			></textarea>

			<button className={styles.btn} type='submit'>
				Send
			</button>
		</form>
	);
};
