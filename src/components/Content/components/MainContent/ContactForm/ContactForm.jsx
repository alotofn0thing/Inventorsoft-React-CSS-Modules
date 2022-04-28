import { useForm } from 'react-hook-form';

import styles from './ContactForm.module.scss';

export const ContactForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onBlur',
	});

	const handleChange = () => {};
	const onSubmit = data => {
		alert(JSON.stringify(data));
		reset();
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.container}>
				<input
					className={styles.input}
					placeholder='Name'
					onChange={handleChange}
					{...register('Name', {
						required: 'Enter your name',
						minLength: {
							value: 3,
							message: 'At least 3 characters',
						},
					})}
				/>
				{errors?.Name && <span>{errors?.Name?.message || 'Error!'}</span>}
			</div>
			<div className={styles.container}>
				<input
					className={styles.input}
					type='tel'
					placeholder='Phone'
					onChange={handleChange}
					{...register('phone', {
						required: 'Enter your phone number',
						pattern: {
							value:
								/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
							message: 'Enter a valid phone number',
						},
						minLength: {
							value: 6,
							message: 'Enter a valid phone number',
						},
						maxLength: 15,
					})}
				/>
				{errors?.phone && <span>{errors?.phone?.message || 'Error!'}</span>}
			</div>
			<div className={styles.container}>
				<input
					className={styles.input}
					type='email'
					placeholder='E-mail'
					onChange={handleChange}
					{...register('email', {
						required: 'Enter your e-mail address',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'Enter a valid email address',
						},
					})}
				/>
				{errors?.email && <span>{errors?.email?.message || 'Error!'}</span>}
			</div>
			<div className={styles.container}>
				<textarea
					className={styles.textarea}
					placeholder='Message'
					rows='4'
					onChange={handleChange}
					{...register('text', {
						required: 'Enter your message',
						minLength: {
							value: 6,
							message: 'At least 6 characters',
						},
					})}
				></textarea>
				{errors?.text && <span>{errors?.text?.message || 'Error!'}</span>}
			</div>

			<button className={styles.btn} type='submit'>
				Send
			</button>
		</form>
	);
};
