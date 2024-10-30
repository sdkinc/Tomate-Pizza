import { Technology } from './Technology';

export type Project = {
	orderNumber: number;
	name: string;
	description: string;
	startDate: string;
	endDate: string;
	technologies: Technology[];
};

export type OnAddProjectType = (projects: Project[]) => void;
