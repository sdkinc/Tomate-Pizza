export type Language = {
	orderNumber: number;
	name: string;
	proficiency: string;
};

export type OnAddLanguageType = (languages: Language[]) => void;
