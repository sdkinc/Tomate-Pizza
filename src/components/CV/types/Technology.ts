export type Technology = {
	orderNumber: number;
	name: string;
};

export type OnAddTechnologyType = (technologies: Technology[]) => void;
