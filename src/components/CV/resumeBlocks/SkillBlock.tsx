import { useTranslation } from 'react-i18next';
import { OnAddSkillType, Skill } from '../types/Skill';
import styles from './skillBlock.module.css';
import { useAppSelector } from '../../../app/hooks';
import { selectResumeOriginal } from '../../../features/resumeEditor/selectors';
import { ChangeEvent, useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

type SkillBlockProps = {
	onAddSkill: OnAddSkillType;
};

export default function SkillBlock({ onAddSkill }: SkillBlockProps): JSX.Element {
	const { t } = useTranslation();
	const resumeOriginal = useAppSelector(selectResumeOriginal);
	const [skills, setSkills] = useState<Skill[]>(resumeOriginal.skills);

	const handleAddNewSkill = (): void => {
		const newOrderNumber = skills.length + 1;
		const newSkill = {
			orderNumber: newOrderNumber,
			name: '',
			proficiency: '',
		};
		setSkills(() => [...skills, newSkill]);
	};

	const handleEditSkill = (event: ChangeEvent<HTMLInputElement>, orderNumber: number): void => {
		const { name: key, value } = event.target;
		setSkills((prevSkills) =>
			prevSkills.map((skill) =>
				skill.orderNumber === orderNumber ? { ...skill, [key]: value } : skill
			)
		);
	};

	useEffect(() => {
		onAddSkill(skills);
	}, [skills]);

	return (
		<div className={styles.mainBlock}>
			<h3>{t('skills')}</h3>
			{skills?.map((skillItem: Skill) => (
				<div key={skillItem.orderNumber}>
					<div className={styles.inputBlock}>
						<input
							id={`nameSkillId${skillItem.orderNumber}`}
							className={styles.myInput}
							type="text"
							name="name"
							value={skillItem.name}
							onChange={(e) => handleEditSkill(e, skillItem.orderNumber)}
							required
							aria-label={t('nameSkillPlaceholder')}
						/>
						<span className={styles.placeholder}>{t('nameSkillPlaceholder')}</span>
					</div>
					<div className={styles.inputBlock}>
						<input
							id={`proficiencySkillId${skillItem.orderNumber}`}
							className={styles.myInput}
							type="text"
							name="proficiency"
							value={skillItem.proficiency}
							onChange={(e) => handleEditSkill(e, skillItem.orderNumber)}
							required
							aria-label={t('proficiencySkillPlaceholder')}
						/>
						<span className={styles.placeholder}>{t('proficiencySkillPlaceholder')}</span>
					</div>
				</div>
			))}
			<button className={styles.addBtn} type="button" onClick={handleAddNewSkill}>
				<AddIcon />
				{t('addNewSkill')}
			</button>
		</div>
	);
}
