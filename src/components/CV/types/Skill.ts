export type Skill = {
	orderNumber: number;
	name: string;
	proficiency: string;
};

export type OnAddSkillType = (skills: Skill[]) => void;
