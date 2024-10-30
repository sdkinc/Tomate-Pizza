import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import styles from './signUp.module.css';
import { register } from '../auth/authSlice';
import NewUserDto from './types/NewUserDto';

const SignUp: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { isLoading } = useSelector((state: RootState) => state.auth);
	const [formData, setFormData] = useState<NewUserDto>({ login: '', email: '', password: '' });
	const [errors, setErrors] = useState<{ login?: string; email?: string; password?: string }>({});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const validate = (): boolean => {
		const newErrors: { login?: string; email?: string; password?: string } = {};
		if (!formData.login) {
			newErrors.login = 'Login is required';
		}
		if (!formData.email) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Email address is invalid';
		}
		if (!formData.password) {
			newErrors.password = 'Password is required';
		} else if (formData.password.length < 6) {
			newErrors.password = 'Password must be at least 6 characters';
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		if (validate()) {
			dispatch(register(formData));
		}
	};

	return (
		<div className={styles.signUpBox}>
			<div className={styles.logoBox}>
				<a href="/" className={styles.logoBoxHome}>
					<img className={styles.logo} src="/logoML.png" alt="MLdoc-icon" />
					<span className={styles.textLogo}>MultilingualDocs</span>
				</a>
			</div>
			<div className={styles.mainContainer}>
				<div className={styles.signUpBlock}>
					<div className={styles.signUpBox}>
						<div className={styles.loginHeaderContainer}>
							<h1 className={styles.title}>Sign Up</h1>
							<p className={styles.loginContainer}>
								Already have an account?
								<a href="/signin" className={styles.linkLogin}>
									Sign In
								</a>
							</p>
						</div>
						<form onSubmit={handleSubmit}>
							<div className={styles.inputContainer}>
								<label className={styles.email} htmlFor="login">
									Login
								</label>
								<input
									type="text"
									id="login"
									name="login"
									className={styles.emailInput}
									onChange={handleChange}
									value={formData.login}
								/>
								{errors.login && <p className={styles.error}>{errors.login}</p>}
							</div>
							<div className={styles.inputContainer}>
								<label className={styles.email} htmlFor="email">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className={styles.emailInput}
									onChange={handleChange}
									value={formData.email}
								/>
								{errors.email && <p className={styles.error}>{errors.email}</p>}
							</div>
							<div className={styles.passwordContainer}>
								<label className={styles.password} htmlFor="password">
									Password
								</label>
								<input
									type="password"
									id="password"
									name="password"
									className={styles.passwordInput}
									onChange={handleChange}
									value={formData.password}
								/>
								{errors.password && <p className={styles.error}>{errors.password}</p>}
							</div>
							<div className={styles.button}>
								<button
									type="submit"
									className={isLoading ? styles.buttonNoFullCorrect : styles.buttonContinue}
									disabled={isLoading}
								>
									<div className={styles.buttonContinueText}>Register</div>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
