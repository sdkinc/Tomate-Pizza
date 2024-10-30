import { useTranslation } from 'react-i18next';
import { Experience, OnAddExperiencesType } from '../types/Experience';
import styles from './experienceBlock.module.css';
import { useAppSelector } from '../../../app/hooks';
import { selectResumeOriginal } from '../../../features/resumeEditor/selectors';
import { ChangeEvent, useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

type ExperienceBlockProps = {
	onAddExperiences: OnAddExperiencesType;
};

export default function ExperienceBlock({ onAddExperiences }: ExperienceBlockProps): JSX.Element {
	const { t } = useTranslation();
	const resumeOriginal = useAppSelector(selectResumeOriginal);
	const [experiences, setExperiences] = useState<Experience[]>(resumeOriginal.experiences);

	const handleAddNewExperience = (): void => {
		const newOrderNumber = experiences.length + 1;
		const newExperience = {
			orderNumber: newOrderNumber,
			jobTitle: '',
			companyName: '',
			startDate: '',
			endDate: '',
			responsibilities: '',
		};
		setExperiences(() => [...experiences, newExperience]);
	};

	const handleEditExperience = (
		event: ChangeEvent<HTMLInputElement>,
		orderNumber: number
	): void => {
		const { name: key, value } = event.target;
		setExperiences((prevExperiences) =>
			prevExperiences.map((exp) =>
				exp.orderNumber === orderNumber ? { ...exp, [key]: value } : exp
			)
		);
	};

	useEffect(() => {
		onAddExperiences(experiences);
	}, [experiences]);

	return (
		<div className={styles.mainBlock}>
			<h3>{t('workExperience')}</h3>
			{experiences?.map((exp: Experience) => (
				<div key={exp.orderNumber}>
					<div className={styles.inputBlock}>
						<input
							id={`jobTitleId${exp.orderNumber}`}
							className={styles.myInput}
							type="text"
							name="jobTitle"
							value={exp.jobTitle}
							onChange={(e) => handleEditExperience(e, exp.orderNumber)}
							required
							aria-label={t('jobTitlePlaceholder')}
						/>
						<span className={styles.placeholder}>{t('jobTitlePlaceholder')}</span>
					</div>
					<div className={styles.inputBlock}>
						<input
							id={`companyNameId${exp.orderNumber}`}
							className={styles.myInput}
							type="text"
							name="companyName"
							value={exp.companyName}
							onChange={(e) => handleEditExperience(e, exp.orderNumber)}
							required
							aria-label={t('companyNamePlaceholder')}
						/>
						<span className={styles.placeholder}>{t('companyNamePlaceholder')}</span>
					</div>
					<div className={styles.inputDateBlock}>
						<input
							id={`startDateId${exp.orderNumber}`}
							className={styles.myInput}
							type="date"
							name="startDate"
							value={exp.startDate}
							onChange={(e) => handleEditExperience(e, exp.orderNumber)}
							required
							aria-label={t('startDatePlaceholder')}
						/>
						<span className={styles.placeholderDate}>{t('startDatePlaceholder')}</span>
					</div>
					<div className={styles.inputDateBlock}>
						<input
							id={`endDateId${exp.orderNumber}`}
							className={styles.myInput}
							type="date"
							name="endDate"
							value={exp.endDate}
							onChange={(e) => handleEditExperience(e, exp.orderNumber)}
							required
							aria-label={t('endDatePlaceholder')}
						/>
						<span className={styles.placeholderDate}>{t('endDatePlaceholder')}</span>
					</div>
					<div className={styles.inputBlock}>
						<input
							id={`responsibilitiesId${exp.orderNumber}`}
							className={styles.myInput}
							type="text"
							name="responsibilities"
							value={exp.responsibilities}
							onChange={(e) => handleEditExperience(e, exp.orderNumber)}
							required
							aria-label={t('responsibilitiesPlaceholder')}
						/>
						<span className={styles.placeholder}>{t('responsibilitiesPlaceholder')}</span>
					</div>
				</div>
			))}
			<button className={styles.addBtn} type="button" onClick={handleAddNewExperience}>
				<AddIcon />
				{t('addWorkExperience')}
			</button>
		</div>
	);
}
