export default interface GuideType {
	id: string;
	category: string;
	textKey: string;
	title: string;
	subtitle: string;
	location: string;
	summary: string[];
	imageUrl?: string;
}
