export default interface NewsType {
	id: string;
	date?: string;
	contentType: string;
	category: string;
	textKey: string;
	title: string;
	subtitle: string;
	text?: string[];
	summary: string[];
	imageUrl?: string;
	videoUrl?: string;
}
