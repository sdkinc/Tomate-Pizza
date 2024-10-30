import { useTranslation } from 'react-i18next';
import styles from './personalInfo.module.css';
import { ChangeEvent, useEffect, useState } from 'react';
import { OnAddPersonalInfoType, PersonalInfo } from '../types/PersonalInfo';
import { useAppSelector } from '../../../app/hooks';
import { selectResumeOriginal } from '../../../features/resumeEditor/selectors';

type PersonalInfoBlockProps = {
	onAddPersonalInfo: OnAddPersonalInfoType;
};

export default function PersonalInfoBlock({
	onAddPersonalInfo,
}: PersonalInfoBlockProps): JSX.Element {
	const { t } = useTranslation();
	const resumeOriginal = useAppSelector(selectResumeOriginal);
	const initialPersonalInfo: PersonalInfo = resumeOriginal.personalInfo || {
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		address: '',
	};
	const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(initialPersonalInfo);

	const handleEditPersonalInfo = (event: ChangeEvent<HTMLInputElement>): void => {
		const { name: key, value } = event.target;
		setPersonalInfo((prevPersonalInfo: PersonalInfo) => ({
			...prevPersonalInfo,
			[key]: value,
		}));
	};

	useEffect(() => {
		onAddPersonalInfo(personalInfo);
	}, [personalInfo]);

	return (
		<div className={styles.mainBlock}>
			<h3>{t('personalInfo')}</h3>
			<div className={styles.inputBlock}>
				<input
					id="firstNameId"
					className={styles.myInput}
					type="text"
					name="firstName"
					value={personalInfo.firstName}
					onChange={(e) => handleEditPersonalInfo(e)}
					required
					aria-label={t('firstNamePlaceholder')}
				/>
				<span className={styles.placeholder}>{t('firstNamePlaceholder')}</span>
			</div>
			<div className={styles.inputBlock}>
				<input
					id="lastNameId"
					className={styles.myInput}
					type="text"
					name="lastName"
					value={personalInfo.lastName}
					onChange={(e) => handleEditPersonalInfo(e)}
					required
					aria-label={t('lastNamePlaceholder')}
				/>
				<span className={styles.placeholder}>{t('lastNamePlaceholder')}</span>
			</div>
			<div className={styles.inputBlock}>
				<input
					id="emailId"
					className={styles.myInput}
					type="text"
					name="email"
					value={personalInfo.email}
					onChange={(e) => handleEditPersonalInfo(e)}
					required
					aria-label={t('emailPlaceholder')}
				/>
				<span className={styles.placeholder}>{t('email')}</span>
			</div>
			<div className={styles.inputBlock}>
				<input
					id="phoneNumberId"
					className={styles.myInput}
					type="text"
					name="phoneNumber"
					value={personalInfo.phoneNumber}
					onChange={(e) => handleEditPersonalInfo(e)}
					required
					aria-label={t('phoneNumberPlaceholder')}
				/>
				<span className={styles.placeholder}>{t('phoneNumberPlaceholder')}</span>
			</div>
			<div className={styles.inputBlock}>
				<input
					id="addressId"
					className={styles.myInput}
					type="text"
					name="address"
					value={personalInfo.address}
					onChange={(e) => handleEditPersonalInfo(e)}
					required
					aria-label={t('addressPlaceholder')}
				/>
				<span className={styles.placeholder}>{t('addressPlaceholder')}</span>
			</div>
		</div>
	);
}
