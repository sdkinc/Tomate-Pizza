import { Page, Text, Document, StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	page: {
		marginTop: 30,
		flexDirection: 'column',
		padding: 30,
		backgroundColor: '#fff',
	},

	addressBlockLeft: {
		marginBottom: 30,
		margin: 10,
		fontSize: 12,
		textAlign: 'left',
		lineHeight: 1.5,
	},
	addressBlockRight: {
		marginBottom: 30,
		margin: 10,
		fontSize: 12,
		textAlign: 'right',
		lineHeight: 1.5,
	},
	signatureName: {
		marginTop: 10,
		fontSize: 12,
		textAlign: 'justify',
		marginRight: 10,
		marginLeft: 10,
	},
	header: {
		fontSize: 14,
		fontWeight: 'bold',
		marginTop: 30,
		marginLeft: 10,
		textAlign: 'left',
	},
	membershipNumber: {
		fontSize: 14,
		fontWeight: 'bold',
		marginBottom: 30,
		marginLeft: 10,
		textAlign: 'left',
		marginTop: 5,
	},
	paragraph: {
		margin: 10,
		fontSize: 12,
		textAlign: 'justify',
		lineHeight: 1.5,
	},
	signature: {
		marginTop: 40,
		fontSize: 12,
		textAlign: 'justify',
		marginRight: 10,
		marginLeft: 10,
	},
	dateText: {
		marginTop: 50,
		marginBottom: 60,
		fontSize: 12,
		textAlign: 'right',
		marginRight: 10,
		marginLeft: 10,
	},
});

interface PDFDocumentProps {
	header: string;
	greeting: string;
	membershipNumber: string;
	bodyPart1: string;
	bodyPart2: string;
	signature: string;
	memberName: string;
	memberStreet: string;
	memberCity: string;
	companyName: string;
	companyStreet: string;
	companyCity: string;
	dateText: string;
}

const PDFTerminationInsurance: React.FC<PDFDocumentProps> = ({
	header,
	greeting,
	membershipNumber,
	bodyPart1,
	bodyPart2,
	signature,
	memberName,
	memberStreet,
	memberCity,
	companyName,
	companyStreet,
	companyCity,
	dateText,
}): React.ReactElement => (
	<Document>
		<Page size="A4" style={styles.page}>
			<View style={styles.addressBlockRight}>
				<Text>{memberName}</Text>
				<Text>{memberStreet}</Text>
				<Text>{memberCity}</Text>
			</View>
			<View style={styles.addressBlockLeft}>
				<Text>{companyName}</Text>
				<Text>{companyStreet}</Text>
				<Text>{companyCity}</Text>
			</View>
			<Text style={styles.dateText}>{dateText}</Text>
			<Text style={styles.header}>{header}</Text>
			<Text style={styles.membershipNumber}>{membershipNumber}</Text>
			<Text style={styles.paragraph}>{greeting}</Text>
			<Text style={styles.paragraph}>{bodyPart1}</Text>
			<Text style={styles.paragraph}>{bodyPart2}</Text>
			<Text style={styles.signature}>{signature}</Text>
			<Text style={styles.signatureName}>{memberName}</Text>
		</Page>
	</Document>
);

export default PDFTerminationInsurance;
