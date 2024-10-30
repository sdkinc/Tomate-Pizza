export type Experience = {
	orderNumber: number;
	jobTitle: string;
	companyName: string;
	startDate: string;
	endDate: string;
	responsibilities: string;
};

export type OnAddExperiencesType = (experiences: Experience[]) => void;
