import { useTranslation } from 'react-i18next';
import { Education, OnAddEducationType } from '../types/Education';
import styles from './educationBlock.module.css';
import { useAppSelector } from '../../../app/hooks';
import { selectResumeOriginal } from '../../../features/resumeEditor/selectors';
import { ChangeEvent, useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

type EducationBlockProps = {
	onAddEducation: OnAddEducationType;
};

export default function EducationBlock({ onAddEducation }: EducationBlockProps): JSX.Element {
	const { t } = useTranslation();
	const resumeOriginal = useAppSelector(selectResumeOriginal);
	const [educations, setEducations] = useState<Education[]>(resumeOriginal.education);

	const handleAddNewEducation = (): void => {
		const newOrderNumber = educations.length + 1;
		const newEducation = {
			orderNumber: newOrderNumber,
			institutionName: '',
			degree: '',
			fieldOfStudy: '',
			startDate: '',
			endDate: '',
		};
		setEducations(() => [...educations, newEducation]);
	};

	const handleEditEducation = (event: ChangeEvent<HTMLInputElement>, orderNumber: number): void => {
		const { name: key, value } = event.target;
		setEducations((prevEducations) =>
			prevEducations.map((ed) => (ed.orderNumber === orderNumber ? { ...ed, [key]: value } : ed))
		);
	};

	useEffect(() => {
		onAddEducation(educations);
	}, [educations]);

	return (
		<div className={styles.mainBlock}>
			<h3>{t('educations')}</h3>
			{educations?.map((ed: Education) => (
				<div key={ed.orderNumber}>
					<div className={styles.inputBlock}>
						<input
							id={`institutionNameId${ed.orderNumber}`}
							className={styles.myInput}
							type="text"
							name="institutionName"
							value={ed.institutionName}
							onChange={(e) => handleEditEducation(e, ed.orderNumber)}
							required
							aria-label={t('institutionNamePlaceholder')}
						/>
						<span className={styles.placeholder}>{t('institutionNamePlaceholder')}</span>
					</div>
					<div className={styles.inputBlock}>
						<input
							id={`degreeId${ed.orderNumber}`}
							className={styles.myInput}
							type="text"
							name="degree"
							value={ed.degree}
							onChange={(e) => handleEditEducation(e, ed.orderNumber)}
							required
							aria-label={t('degreePlaceholder')}
						/>
						<span className={styles.placeholder}>{t('degreePlaceholder')}</span>
					</div>
					<div className={styles.inputBlock}>
						<input
							id={`fieldOfStudyId${ed.orderNumber}`}
							className={styles.myInput}
							type="text"
							name="fieldOfStudy"
							value={ed.fieldOfStudy}
							onChange={(e) => handleEditEducation(e, ed.orderNumber)}
							required
							aria-label={t('fieldOfStudyPlaceholder')}
						/>
						<span className={styles.placeholder}>{t('fieldOfStudyPlaceholder')}</span>
					</div>
					<div className={styles.inputBlock}>
						<input
							id={`startDateId${ed.orderNumber}`}
							className={styles.myInput}
							type="date"
							name="startDate"
							value={ed.startDate}
							onChange={(e) => handleEditEducation(e, ed.orderNumber)}
							required
							aria-label={t('startDatePlaceholder')}
						/>
						<span className={styles.placeholderDate}>{t('startDatePlaceholder')}</span>
					</div>
					<div className={styles.inputBlock}>
						<input
							id={`endDateId${ed.orderNumber}`}
							className={styles.myInput}
							type="date"
							name="endDate"
							value={ed.endDate}
							onChange={(e) => handleEditEducation(e, ed.orderNumber)}
							required
							aria-label={t('endDatePlaceholder')}
						/>
						<span className={styles.placeholderDate}>{t('endDatePlaceholder')}</span>
					</div>
				</div>
			))}
			<button className={styles.addBtn} type="button" onClick={handleAddNewEducation}>
				<AddIcon />
				{t('addNewEducation')}
			</button>
		</div>
	);
}
