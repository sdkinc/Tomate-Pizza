import Resume from '../features/resumeEditor/types/Resume';

export const exampleResume: Resume = {
	id: '',
	userId: 'gast',
	creationDate: '2024-08-19T17:13:17.697Z',
	title: 'Beispiel Job 1',
	resumeTemplateName: 'demo-resume.html',
	resumeLanguage: 'de',
	originalResumeId: '',
	personalInfo: {
		firstName: 'Max',
		lastName: 'Mustermann',
		email: 'max.mustermann@example.com',
		phoneNumber: '+491234567890',
		address: '12345 Musterstadt, Musterstraße 1',
	},
	summary: 'Beispiel Zusammenfassung',
	experiences: [
		{
			orderNumber: 1,
			jobTitle: 'Beispiel Job 1',
			companyName: 'Beispiel Firma',
			startDate: '2020-01-01',
			endDate: '2021-12-31',
			responsibilities: 'Beispiel Aufgaben',
		},
	],
	education: [
		{
			orderNumber: 1,
			institutionName: 'Beispiel Universität',
			degree: 'Beispiel Abschluss',
			fieldOfStudy: 'Beispiel Studienrichtung',
			startDate: '2016-09-01',
			endDate: '2020-06-01',
		},
	],
	skills: [
		{
			orderNumber: 1,
			name: 'Java',
			proficiency: 'Mittel',
		},
	],
	languages: [
		{
			orderNumber: 1,
			name: 'Englisch',
			proficiency: 'Mittel',
		},
	],
	certifications: [
		{
			orderNumber: 1,
			name: 'Beispiel Schulungszentrum',
			issuingOrganization: 'Beispiel Organisation',
			issueDate: '2021-06-01',
			expiryDate: '2024-06-01',
		},
	],
	projects: [
		{
			orderNumber: 1,
			name: 'E-Commerce-Plattform',
			description: 'Entwicklung einer E-Commerce-Plattform mit Java und Spring Boot.',
			startDate: '2019-01-01',
			endDate: '2020-01-01',
			technologies: [
				{
					orderNumber: 1,
					name: 'Java',
				},
			],
		},
	],
};
