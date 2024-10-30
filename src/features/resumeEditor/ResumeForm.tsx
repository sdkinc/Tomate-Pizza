import { ChangeEvent, useEffect, useState } from 'react';
import styles from './resumeForm.module.css';
import Resume from './types/Resume';
import { selectResumeOriginal } from './selectors';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useTranslation } from 'react-i18next';
import { PersonalInfo } from '../../components/CV/types/PersonalInfo';
import PersonalInfoBlock from '../../components/CV/resumeBlocks/PersonalInfoBlock';
import { Experience } from '../../components/CV/types/Experience';
import ExperienceBlock from '../../components/CV/resumeBlocks/ExperienceBlock';
import EducationBlock from '../../components/CV/resumeBlocks/EducationBlock';
import { Education } from '../../components/CV/types/Education';
import SkillBlock from '../../components/CV/resumeBlocks/SkillBlock';
import { Skill } from '../../components/CV/types/Skill';
import LanguageBlock from '../../components/CV/resumeBlocks/LanguageBlock';
import { Language } from '../../components/CV/types/Language';
import CertificationBlock from '../../components/CV/resumeBlocks/CertificationBlock';
import { Certification } from '../../components/CV/types/Certification';
import { Project } from '../../components/CV/types/Project';
import ProjectBlock from '../../components/CV/resumeBlocks/ProjectBlock';
import { createResume, setOriginalResume } from './resumeSlice';
import { selectUser } from '../auth/selectors';
import { getAuthUser } from '../auth/authSlice';
import { selectCurrentHtmlTemplate } from '../previewPdf/selectors';
import { getHtmlResume } from '../previewPdf/previewPdfSlice';

export default function ResumeForm(): JSX.Element {
	const { t, i18n } = useTranslation();
	const dispatch = useAppDispatch();
	const resumeOriginal = useAppSelector(selectResumeOriginal);
	const currTemplate = useAppSelector(selectCurrentHtmlTemplate);
	const authUser = useAppSelector(selectUser);
	const dateNow = new Date().toISOString();
	const [resume, setResume] = useState<Resume>(resumeOriginal);

	const handleEditResume = (event: ChangeEvent<HTMLInputElement>): void => {
		const { name: key, value } = event.target;
		setResume((prevResume: Resume) => ({
			...prevResume,
			[key]: value,
		}));
	};

	const updatePersonalInfo = (newItem: PersonalInfo): void => {
		setResume((prevResume: Resume) => ({
			...prevResume,
			personalInfo: newItem,
		}));
	};

	const updateExperiences = (newItem: Experience[]): void => {
		setResume((prevResume: Resume) => ({
			...prevResume,
			experiences: newItem,
		}));
	};

	const updateEducations = (newItem: Education[]): void => {
		setResume((prevResume: Resume) => ({
			...prevResume,
			education: newItem,
		}));
	};

	const updateSkills = (newItem: Skill[]): void => {
		setResume((prevResume: Resume) => ({
			...prevResume,
			skills: newItem,
		}));
	};

	const updateLanguages = (newItem: Language[]): void => {
		setResume((prevResume: Resume) => ({
			...prevResume,
			languages: newItem,
		}));
	};

	const updateCertifications = (newItem: Certification[]): void => {
		setResume((prevResume: Resume) => ({
			...prevResume,
			certifications: newItem,
		}));
	};

	const updateProjects = (newItem: Project[]): void => {
		setResume((prevResume: Resume) => ({
			...prevResume,
			projects: newItem,
		}));
	};

	const handleTranslate = (): void => {
		dispatch(createResume(resumeOriginal));
	};

	useEffect(() => {
		dispatch(getAuthUser());
	}, []);

	useEffect(() => {
		if (currTemplate.fileName !== '') {
			setResume((prevResume: Resume) => ({
				...prevResume,
				resumeTemplateName: currTemplate.fileName,
			}));
		}
		if (resumeOriginal.creationDate === '') {
			setResume((prevResume: Resume) => ({
				...prevResume,
				creationDate: dateNow,
			}));
		}
		if (resumeOriginal.resumeLanguage === '') {
			setResume((prevResume: Resume) => ({
				...prevResume,
				resumeLanguage: i18n.language,
			}));
		}
		if (resumeOriginal.userId === '') {
			if (authUser.userId === 0) {
				setResume((prevResume: Resume) => ({
					...prevResume,
					userId: 'guest',
				}));
			} else {
				setResume((prevResume: Resume) => ({
					...prevResume,
					userId: authUser.userId.toString(),
				}));
			}
		}
	}, []);

	useEffect(() => {
		dispatch(setOriginalResume(resume));
	}, [resume]);

	useEffect(() => {
		dispatch(getHtmlResume(resumeOriginal));
	}, [resumeOriginal]);

	return (
		<div className={styles.mainBlock}>
			<h2>{t('resumeEditor')}</h2>
			<div className={styles.allInputsBlock}>
				<div className={styles.inputContainer}>
					<div className={styles.inputBlock}>
						<input
							id="resumeTitleId"
							className={styles.myInput}
							type="text"
							name="title"
							value={resume.title}
							onChange={(e) => handleEditResume(e)}
							required
							aria-label={t('resumeTitlePlaceholder')}
						/>
						<span className={styles.placeholder}>{t('resumeTitlePlaceholder')}</span>
					</div>
					<div className={styles.inputBlock}>
						<input
							id="resumeSummaryId"
							className={styles.myInput}
							type="text"
							name="summary"
							value={resume.summary}
							onChange={(e) => handleEditResume(e)}
							required
							aria-label={t('resumeSummaryPlaceholder')}
						/>
						<span className={styles.placeholder}>{t('resumeSummaryPlaceholder')}</span>
					</div>
				</div>
				<PersonalInfoBlock onAddPersonalInfo={updatePersonalInfo} />
				<ExperienceBlock onAddExperiences={updateExperiences} />
				<EducationBlock onAddEducation={updateEducations} />
				<SkillBlock onAddSkill={updateSkills} />
				<LanguageBlock onAddLanguage={updateLanguages} />
				<CertificationBlock onAddCertification={updateCertifications} />
				<ProjectBlock onAddProject={updateProjects} />
				<div className={styles.btnContainer}>
					<button className={styles.translateBtn} type="button" onClick={handleTranslate}>
						{t('translateResume')}
					</button>
				</div>
			</div>
		</div>
	);
}
