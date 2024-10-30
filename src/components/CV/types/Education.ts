export type Education = {
	orderNumber: number;
	institutionName: string;
	degree: string;
	fieldOfStudy: string;
	startDate: string;
	endDate: string;
};

export type OnAddEducationType = (educations: Education[]) => void;
