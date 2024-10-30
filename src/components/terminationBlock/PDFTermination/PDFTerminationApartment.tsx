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
		marginBottom: 30,
		marginTop: 30,
		marginLeft: 10,
		textAlign: 'left',
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
	bodyPart1: string;
	bodyPart2: string;
	bodyPart3: string;
	signature: string;
	renterName: string;
	renterStreet: string;
	renterCity: string;
	landlordName: string;
	landlordStreet: string;
	landlordCity: string;
	dateText: string;
}

const PDFTerminationApartment: React.FC<PDFDocumentProps> = ({
	header,
	greeting,
	bodyPart1,
	bodyPart2,
	bodyPart3,
	signature,
	renterName,
	renterStreet,
	renterCity,
	landlordName,
	landlordStreet,
	landlordCity,
	dateText,
}): React.ReactElement => (
	<Document>
		<Page size="A4" style={styles.page}>
			<View style={styles.addressBlockRight}>
				<Text>{renterName}</Text>
				<Text>{renterStreet}</Text>
				<Text>{renterCity}</Text>
			</View>
			<View style={styles.addressBlockLeft}>
				<Text>{landlordName}</Text>
				<Text>{landlordStreet}</Text>
				<Text>{landlordCity}</Text>
			</View>
			<Text style={styles.dateText}>{dateText}</Text>
			<Text style={styles.header}>{header}</Text>
			<Text style={styles.paragraph}>{greeting}</Text>
			<Text style={styles.paragraph}>{bodyPart1}</Text>
			<Text style={styles.paragraph}>{bodyPart2}</Text>
			<Text style={styles.paragraph}>{bodyPart3}</Text>
			<Text style={styles.signature}>{signature}</Text>
			<Text style={styles.signatureName}>{renterName}</Text>
		</Page>
	</Document>
);

export default PDFTerminationApartment;
