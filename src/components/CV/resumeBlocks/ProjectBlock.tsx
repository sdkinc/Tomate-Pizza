import { useTranslation } from 'react-i18next';
import { OnAddProjectType, Project } from '../types/Project';
import styles from './projectBlock.module.css';
import { useAppSelector } from '../../../app/hooks';
import { selectResumeOriginal } from '../../../features/resumeEditor/selectors';
import { ChangeEvent, useEffect, useState } from 'react';
import { Technology } from '../types/Technology';
import TechnologyBlock from './TechnologyBlock';
import AddIcon from '@mui/icons-material/Add';

type ProjectBlockProps = {
	onAddProject: OnAddProjectType;
};

export default function ProjectBlock({ onAddProject }: ProjectBlockProps): JSX.Element {
	const { t } = useTranslation();
	const resumeOriginal = useAppSelector(selectResumeOriginal);
	const [projects, setProjects] = useState<Project[]>(resumeOriginal.projects);

	const handleAddNewProject = (): void => {
		const newOrderNumber = projects.length + 1;
		const newProject = {
			orderNumber: newOrderNumber,
			name: '',
			description: '',
			startDate: '',
			endDate: '',
			technologies: [],
		};
		setProjects(() => [...projects, newProject]);
	};

	const handleEditProject = (event: ChangeEvent<HTMLInputElement>, orderNumber: number): void => {
		const { name: key, value } = event.target;
		setProjects((prevProjects) =>
			prevProjects.map((proj) =>
				proj.orderNumber === orderNumber ? { ...proj, [key]: value } : proj
			)
		);
	};

	const updateTechnologies = (updateProject: Project, newItem: Technology[]): void => {
		setProjects((prevProjects) =>
			prevProjects.map((proj) =>
				proj.orderNumber === updateProject.orderNumber ? { ...proj, technologies: newItem } : proj
			)
		);
	};

	useEffect(() => {
		onAddProject(projects);
	}, [projects]);

	return (
		<div className={styles.mainBlock}>
			<h3>{t('projects')}</h3>
			{projects?.map((proj: Project) => (
				<div key={proj.orderNumber}>
					<div className={styles.inputBlock}>
						<input
							id={`nameProjectId${proj.orderNumber}`}
							className={styles.myInput}
							type="text"
							name="name"
							value={proj.name}
							onChange={(e) => handleEditProject(e, proj.orderNumber)}
							required
							aria-label={t('nameProjectPlaceholder')}
						/>
						<span className={styles.placeholder}>{t('nameProjectPlaceholder')}</span>
					</div>
					<div className={styles.inputBlock}>
						<input
							id={`descriptionProjectId${proj.orderNumber}`}
							className={styles.myInput}
							type="text"
							name="description"
							value={proj.description}
							onChange={(e) => handleEditProject(e, proj.orderNumber)}
							required
							aria-label={t('descriptionProjectPlaceholder')}
						/>
						<span className={styles.placeholder}>{t('descriptionProjectPlaceholder')}</span>
					</div>
					<div className={styles.inputBlock}>
						<input
							id={`startDateProjectId${proj.orderNumber}`}
							className={styles.myInput}
							type="date"
							name="startDate"
							value={proj.startDate}
							onChange={(e) => handleEditProject(e, proj.orderNumber)}
							required
							aria-label={t('startDateProjectPlaceholder')}
						/>
						<span className={styles.placeholderDate}>{t('startDateProjectPlaceholder')}</span>
					</div>
					<div className={styles.inputBlock}>
						<input
							id={`endDateProjectId${proj.orderNumber}`}
							className={styles.myInput}
							type="date"
							name="endDate"
							value={proj.endDate}
							onChange={(e) => handleEditProject(e, proj.orderNumber)}
							required
							aria-label={t('endDateProjectPlaceholder')}
						/>
						<span className={styles.placeholderDate}>{t('endDateProjectPlaceholder')}</span>
					</div>
					<TechnologyBlock onAddTechnology={(e) => updateTechnologies(proj, e)} project={proj} />
				</div>
			))}
			<button className={styles.addBtn} type="button" onClick={handleAddNewProject}>
				<AddIcon />
				{t('addNewProject')}
			</button>
		</div>
	);
}
