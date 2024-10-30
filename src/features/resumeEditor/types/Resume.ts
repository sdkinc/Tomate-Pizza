import { Certification } from '../../../components/CV/types/Certification';
import { Education } from '../../../components/CV/types/Education';
import { Experience } from '../../../components/CV/types/Experience';
import { Language } from '../../../components/CV/types/Language';
import { PersonalInfo } from '../../../components/CV/types/PersonalInfo';
import { Project } from '../../../components/CV/types/Project';
import { Skill } from '../../../components/CV/types/Skill';

export default interface Resume {
	id: string;
	userId: string;
	creationDate: string;
	resumeTemplateName: string;
	resumeLanguage: string;
	originalResumeId: string;
	title: string;
	personalInfo: PersonalInfo;
	summary: string;
	experiences: Experience[];
	education: Education[];
	skills: Skill[];
	languages: Language[];
	certifications: Certification[];
	projects: Project[];
}
