interface ContentSection {
	textTitle?: string[];
	text?: string[];
	textItalic?: string[];
	textItalicColor?: string[];
	paragraphTitle?: string[];
}

export default interface GuideDetailType {
	id: string;
	category: string;
	textKey: string;
	title: string;
	subtitle: string;
	location: string;
	imageUrl?: string;
	sections: ContentSection[];
}
