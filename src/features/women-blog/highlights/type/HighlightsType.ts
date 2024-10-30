export interface Highlights {
	id: number;
	textTitle?: string;
	text?: string;
	textItalic?: string;
	textBold?: string;
	category: (
		| 'Protection and Safety'
		| 'Health and Motherhood'
		| 'Education and Career'
		| 'Kindergartens'
		| 'Rights and Inclusion'
		| 'Global Projects'
	)[];
}
