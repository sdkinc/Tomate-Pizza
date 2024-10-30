interface ContentSection {
	textTitle?: string[];
	text?: string[];
	listItems?: { key: string; text?: string }[];
}

export default interface ShortNewsDetailType {
	id: string;
	title: string;
	subtitle: string;
	textKey: string;
	textTips?: string[];
	imageUrl?: string;
	videoUrl?: string;
	sections: ContentSection[];
}
