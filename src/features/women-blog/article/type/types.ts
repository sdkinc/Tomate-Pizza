export interface ContentFragment {
	type: 'text' | 'highlight' | 'italic' | 'bold';
	text: string;
	class?: string;
}
export interface ListItem {
	text: string;
	link?: {
		text: string;
		url: string;
	};
	highlightedText?: string;
}
export interface ContentBlock {
	type: 'paragraph' | 'heading' | 'image' | 'list' | 'orderedList';
	text?: string;
	src?: string;
	alt?: string;
	level?: number;
	content?: ContentFragment[];
	items?: ListItem[];
}
export interface Article {
	id: number;
	category: (
		| 'Protection and Safety'
		| 'Health and Motherhood'
		| 'Education and Career'
		| 'Kindergartens'
		| 'Rights and Inclusion'
		| 'Global Projects'
	)[];
	title: string;
	shortDescription: string;
	imageUrl: string;
	content: ContentBlock[];
}
