import { useTranslation } from 'react-i18next';
import { OnAddTechnologyType, Technology } from '../types/Technology';
import styles from './technologyBlock.module.css';
import { ChangeEvent, useEffect, useState } from 'react';
import { Project } from '../types/Project';
import AddIcon from '@mui/icons-material/Add';

type TechnologyBlockProps = {
	onAddTechnology: OnAddTechnologyType;
	project: Project;
};

export default function TechnologyBlock({
	onAddTechnology,
	project,
}: TechnologyBlockProps): JSX.Element {
	const { t } = useTranslation();
	const [technologies, setTechnologies] = useState<Technology[]>(project.technologies);

	const handleAddNewTechnology = (): void => {
		const newOrderNumber = technologies.length + 1;
		const newTechnology = {
			orderNumber: newOrderNumber,
			name: '',
		};
		setTechnologies(() => [...technologies, newTechnology]);
	};

	const handleEditTechnology = (
		event: ChangeEvent<HTMLInputElement>,
		orderNumber: number
	): void => {
		const { name: key, value } = event.target;
		setTechnologies((prevTechnologies) =>
			prevTechnologies.map((tech) =>
				tech.orderNumber === orderNumber ? { ...tech, [key]: value } : tech
			)
		);
	};

	useEffect(() => {
		onAddTechnology(technologies);
	}, [technologies]);

	return (
		<div className={styles.mainBlock}>
			<strong>
				<em className={styles.title}>{t('technologies')}</em>
			</strong>
			{technologies?.map((tech: Technology) => (
				<div key={tech.orderNumber}>
					<div className={styles.inputBlock}>
						<input
							id={`nameTechnologyId${tech.orderNumber}`}
							className={styles.myInput}
							type="text"
							name="name"
							value={tech.name}
							onChange={(e) => handleEditTechnology(e, tech.orderNumber)}
							required
							aria-label={t('nameTechnologyPlaceholder')}
						/>
						<span className={styles.placeholder}>{t('nameTechnologyPlaceholder')}</span>
					</div>
				</div>
			))}
			<button className={styles.addBtn} type="button" onClick={handleAddNewTechnology}>
				<AddIcon />
				{t('addNewTechnology')}
			</button>
		</div>
	);
}
