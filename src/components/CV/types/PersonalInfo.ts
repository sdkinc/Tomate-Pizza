export type PersonalInfo = {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	address: string;
};

export type OnAddPersonalInfoType = (info: PersonalInfo) => void;
