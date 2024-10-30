export type Certification = {
	orderNumber: number;
	name: string;
	issuingOrganization: string;
	issueDate: string;
	expiryDate: string;
};

export type OnAddCertificationType = (certifications: Certification[]) => void;
