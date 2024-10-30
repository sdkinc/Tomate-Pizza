interface ContentSection {
	textTitle?: string[];
	textTitleColor?: string[];
	text?: string[];
	textLinks?: string[];
	textItalic?: string[];
	textItalicColor?: string[];
	listItems?: { key: string; text?: string }[];
}

export default interface NewsDetailType {
	id: string;
	contentType: string;
	textKey: string;
	title: string;
	subtitle: string;
	textTips?: string[];
	imageUrl?: string;
	videoUrl?: string;
	sections: ContentSection[];
}
