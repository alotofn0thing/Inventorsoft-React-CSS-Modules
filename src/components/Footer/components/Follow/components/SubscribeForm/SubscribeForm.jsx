import { useForm } from 'react-hook-form';

import styles from './SubscribeForm.module.scss';

export const SubscribeForm = () => {
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
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.container}>
				<div className={styles.formcont}>
					<input
						className={styles.input}
						type='email'
						placeholder='Your email'
						onChange={handleChange}
						{...register('email', {
							required: 'Enter your e-mail address',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Enter a valid email address',
							},
						})}
					/>
					<button className={styles.btn}>Subscribe</button>
				</div>
				{errors?.email && <span>{errors?.email?.message || 'Error!'}</span>}
			</div>
		</form>
	);
};
