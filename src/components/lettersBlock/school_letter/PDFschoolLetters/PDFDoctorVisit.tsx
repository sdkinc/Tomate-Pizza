// eslint-disable-next-line import/no-extraneous-dependencies
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	page: {
		marginTop: 150,
		flexDirection: 'column',
		padding: 30,
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 18,
		marginBottom: 30,
		textAlign: 'center',
	},
	paragraph: {
		margin: 10,
		fontSize: 14,
		textAlign: 'justify',
		lineHeight: 1.5,
	},
	signature: {
		marginTop: 40,
		fontSize: 14,
		textAlign: 'justify',
		marginRight: 10,
		marginLeft: 10,
	},
	dateText: {
		marginTop: 20,
		fontSize: 14,
		textAlign: 'justify',
		marginRight: 10,
		marginLeft: 10,
	},
	signatureName: {
		marginTop: 10,
		fontSize: 14,
		textAlign: 'justify',
		marginRight: 10,
		marginLeft: 10,
	},
});

interface PDFDocumentProps {
	title: string;
	greeting: string;
	bodyPart1: string;
	startDateText: string;
	endDateText: string;
	bodyPart2: string;
	bodyPart3: string;
	signature: string;
	parentName: string;
	dateText: string;
}

const PDFDoctorVisit: React.FC<PDFDocumentProps> = ({
	title,
	greeting,
	bodyPart1,
	startDateText,
	endDateText,
	bodyPart2,
	bodyPart3,
	signature,
	parentName,
	dateText,
}): React.ReactElement => (
	<Document>
		<Page size="A4" style={styles.page}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.paragraph}>{greeting}</Text>
			<Text style={styles.paragraph}>{bodyPart1}</Text>
			<Text style={styles.paragraph}>{startDateText}</Text>
			<Text style={styles.paragraph}>{endDateText}</Text>
			<Text style={styles.paragraph}>{bodyPart2}</Text>
			<Text style={styles.paragraph}>{bodyPart3}</Text>
			<Text style={styles.signature}>{signature}</Text>
			<Text style={styles.signatureName}>{parentName}</Text>
			<Text style={styles.dateText}>{dateText}</Text>
		</Page>
	</Document>
);

export default PDFDoctorVisit;
