import { useTranslation } from 'react-i18next';
import { Certification, OnAddCertificationType } from '../types/Certification';
import styles from './certificationBlock.module.css';
import { useAppSelector } from '../../../app/hooks';
import { selectResumeOriginal } from '../../../features/resumeEditor/selectors';
import { ChangeEvent, useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

type CertificationBlockProps = {
	onAddCertification: OnAddCertificationType;
};

export default function CertificationBlock({
	onAddCertification,
}: CertificationBlockProps): JSX.Element {
	const { t } = useTranslation();
	const resumeOriginal = useAppSelector(selectResumeOriginal);
	const [certifications, setCertifications] = useState<Certification[]>(
		resumeOriginal.certifications
	);

	const handleAddNewCertification = (): void => {
		const newOrderNumber = certifications.length + 1;
		const newCertification = {
			orderNumber: newOrderNumber,
			name: '',
			issuingOrganization: '',
			issueDate: '',
			expiryDate: '',
		};
		setCertifications(() => [...certifications, newCertification]);
	};

	const handleEditCertification = (
		event: ChangeEvent<HTMLInputElement>,
		orderNumber: number
	): void => {
		const { name: key, value } = event.target;
		setCertifications((prevCertifications) =>
			prevCertifications.map((cert) =>
				cert.orderNumber === orderNumber ? { ...cert, [key]: value } : cert
			)
		);
	};

	useEffect(() => {
		onAddCertification(certifications);
	}, [certifications]);

	return (
		<div className={styles.mainBlock}>
			<h3>{t('certifications')}</h3>
			{certifications?.map((cert: Certification) => (
				<div key={cert.orderNumber}>
					<div className={styles.inputBlock}>
						<input
							id={`nameCertificationId${cert.orderNumber}`}
							className={styles.myInput}
							type="text"
							name="name"
							value={cert.name}
							onChange={(e) => handleEditCertification(e, cert.orderNumber)}
							required
							aria-label={t('nameCertificationPlaceholder')}
						/>
						<span className={styles.placeholder}>{t('nameCertificationPlaceholder')}</span>
					</div>
					<div className={styles.inputBlock}>
						<input
							id={`issuingOrganizationCertificationId${cert.orderNumber}`}
							className={styles.myInput}
							type="text"
							name="issuingOrganization"
							value={cert.issuingOrganization}
							onChange={(e) => handleEditCertification(e, cert.orderNumber)}
							required
							aria-label={t('issuingOrganizationCertificationPlaceholder')}
						/>
						<span className={styles.placeholder}>
							{t('issuingOrganizationCertificationPlaceholder')}
						</span>
					</div>
					<div className={styles.inputBlock}>
						<input
							id={`issueDateCertificationId${cert.orderNumber}`}
							className={styles.myInput}
							type="date"
							name="issueDate"
							value={cert.issueDate}
							onChange={(e) => handleEditCertification(e, cert.orderNumber)}
							required
							aria-label={t('issueDateCertificationPlaceholder')}
						/>
						<span className={styles.placeholderDate}>{t('issueDateCertificationPlaceholder')}</span>
					</div>
					<div className={styles.inputBlock}>
						<input
							id={`expiryDateCertificationId${cert.orderNumber}`}
							className={styles.myInput}
							type="date"
							name="expiryDate"
							value={cert.expiryDate}
							onChange={(e) => handleEditCertification(e, cert.orderNumber)}
							required
							aria-label={t('expiryDateCertificationPlaceholder')}
						/>
						<span className={styles.placeholderDate}>
							{t('expiryDateCertificationPlaceholder')}
						</span>
					</div>
				</div>
			))}
			<button className={styles.addBtn} type="button" onClick={handleAddNewCertification}>
				<AddIcon />
				{t('addNewCertification')}
			</button>
		</div>
	);
}
