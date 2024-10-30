import { useState } from 'react';
import styles from './workAbsence.module.css';
import { useTranslation } from 'react-i18next';
import { PDFDownloadLink } from '@react-pdf/renderer';
import BannerAdobeReader from '../../banner/BannerAdobeReader';
import PDFWorkAbsence from './PDFemployeesLetter/PDFWorkAbsence';
import WorkAbsenceTipsBanner from '../../tips/WorkAbsenceTipsBanner';
import ClearIcon from '@mui/icons-material/Clear';

function WorkAbsence(): JSX.Element {
	const { t } = useTranslation();
	const [employeesName, setEmployeesName] = useState('');
	const [employeesGender, setEmployeesGender] = useState('neutral');
	const [reason, setReason] = useState('selectAReason');
	const [workerName, setWorkerName] = useState('');
	const [date, setDate] = useState('');
	const [letterDate, setLetterDate] = useState('');
	const [isAgreed, setIsAgreed] = useState(false);

	const [translationLanguage, setTranslationLanguage] = useState('de');

	const formatDate = (dateString: string): string => {
		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
		return new Date(dateString).toLocaleDateString(translationLanguage, options);
	};

	const currentDate = new Date().toLocaleDateString('de-DE', {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	});
	const defaultDate = t('defaultDate').replace('{{date}}', currentDate);

	const pdfProps = {
		title: t('workAbsenceTitleLetter', { lng: translationLanguage }),
		greeting:
			employeesGender === 'male' || employeesGender === 'female'
				? t(`dearWithName${employeesGender.charAt(0).toUpperCase() + employeesGender.slice(1)}`, {
						lng: translationLanguage,
						name: employeesName || t('defaultEmployeesName', { lng: translationLanguage }),
					})
				: t('dearWithNamePlural', {
						lng: translationLanguage,
						name: employeesName || t('defaultEmployeesName', { lng: translationLanguage }),
					}),

		bodyPart1: t('workAbsenceParagraph1', {
			lng: translationLanguage,
			date: date
				? formatDate(date)
				: defaultDate || t('defaultWorkAbsenceDays', { lng: translationLanguage }),
			reason:
				t(`workAbsenceReasons.${reason}`, { lng: translationLanguage }) ||
				t('defaultWorkAbsenceReason', { lng: translationLanguage }),
		}),

		bodyPart2: t('workAbsenceParagraph2', { lng: translationLanguage }),
		bodyPart3: t('workAbsenceParagraph3', { lng: translationLanguage }),

		signature: t('workAbsenceSignatureText', {
			lng: translationLanguage,
			workerName: workerName || t('defaultWorkerName', { lng: translationLanguage }),
		}),
		dateText: letterDate ? formatDate(letterDate) : defaultDate,
	};

	return (
		<div className={styles.workAbsenceBox}>
			<h1 className={styles.titlePage}>{t('workAbsenceTitle')}</h1>
			<div className={styles.subtitlePage}>{t('workAbsenceSubtitle')}</div>
			<div className={styles.mainContainer}>
				<div className={styles.flexContainer}>
					<div className={styles.template}>
						<div className={styles.contextReviewsWrapper1}>
							<div className={styles.letter}>
								<div className={styles.titleLetter}>{t('workAbsenceTitleLetter')}</div>
								{/*<h2>{t('originalVersion')}</h2>*/}
								<div className={styles.pText}>
									{employeesGender === 'male'
										? t('dearWithNameMale', { name: employeesName || t('defaultEmployeesName') })
										: employeesGender === 'female'
											? t('dearWithNameFemale', {
													name: employeesName || t('defaultEmployeesName'),
												})
											: t('dearWithNamePlural')}
								</div>

								<div className={styles.pText}>
									{t('workAbsenceParagraph1', {
										date: date ? formatDate(date) : t('defaultWorkAbsenceDays'),
										reason: t(`workAbsenceReasons.${reason}`) || t('defaultWorkAbsenceReason'),
									})}
								</div>
								<div className={styles.pText}>{t('workAbsenceParagraph2')}</div>
								<div className={styles.pText}>{t('workAbsenceParagraph3')}</div>

								<div className={styles.pText}>
									{t('workAbsenceSignatureText', {
										workerName: workerName || t('defaultWorkerName'),
									})}
								</div>

								<div className={styles.pText}>
									{letterDate ? formatDate(letterDate) : defaultDate}
								</div>
							</div>

							<div className={styles.inputBox}>
								<div className={styles.nameBox}>
									<select
										id="recipientGender"
										className={styles.genderBox}
										value={employeesGender}
										onChange={(e) => setEmployeesGender(e.target.value)}
										aria-label={t('selectGenderLabel')}
									>
										<option value="neutral">{t('neutral')}</option>
										<option value="male">{t('male')}</option>
										<option value="female">{t('female')}</option>
									</select>

									<div className={styles.inputBlock}>
										<input
											id="employeesName"
											className={styles.name}
											type="text"
											value={employeesName}
											onChange={(e) => setEmployeesName(e.target.value)}
											required
											aria-label={t('employeesNamePlaceholder')}
										/>
										{employeesName && (
											<button
												type="button"
												className={styles.clearButton}
												onClick={() => {
													setEmployeesName('');
												}}
												aria-label={t('clearArea')}
											>
												<ClearIcon style={{ fontSize: 20 }} />
											</button>
										)}
										<label
											htmlFor="employeesName"
											className={`${styles.placeholder} ${employeesName && styles.filledPlaceholder}`}
										>
											{t('employeesNamePlaceholder')}
										</label>
									</div>
								</div>

								<div className={styles.inputBlock}>
									<input
										id="dateOfAbsence"
										className={styles.date}
										type="date"
										value={date}
										onChange={(e) => setDate(e.target.value)}
										required
										aria-label={t('dateOfAbsence')}
									/>
									<span className={styles.placeholderDate}>{t('dateOfAbsence')}</span>
								</div>
								<div>
									<select
										id="reasonSelect"
										value={reason}
										onChange={(e) => setReason(e.target.value)}
										aria-label={t('selectAReason')}
									>
										<option value="selectAReason" disabled>
											{t('selectAReason')}
										</option>
										<option value="medicalReasons">{t('medicalReasons')}</option>
										<option value="familyReasons">{t('familyReasons')}</option>
										<option value="personalReasons">{t('personalReasons')}</option>
										<option value="emergencySituations">{t('emergencySituations')}</option>
									</select>
								</div>
								<div className={styles.nameBox}>
									<div className={styles.inputParentBlock}>
										<input
											id="workerName"
											className={styles.name}
											type="text"
											value={workerName}
											onChange={(e) => setWorkerName(e.target.value)}
											required
											aria-label={t('workerNamePlaceholder')}
										/>
										{workerName && (
											<button
												type="button"
												className={styles.clearButton}
												onClick={() => {
													setWorkerName('');
												}}
												aria-label={t('clearRecipientName')}
											>
												<ClearIcon style={{ fontSize: 20 }} />
											</button>
										)}
										<label
											htmlFor="recipientName"
											className={`${styles.placeholder} ${workerName && styles.filledPlaceholder}`}
										>
											{t('workerNamePlaceholder')}
										</label>
									</div>
									<div className={styles.inputDateBlock}>
										<input
											id="letterDate"
											className={styles.dateOfSignature}
											type="date"
											value={letterDate}
											onChange={(e) => setLetterDate(e.target.value)}
											required
											aria-label={t('dateOfSignature')}
										/>
										<span className={styles.placeholderDate}>{t('dateOfSignature')}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.template}>
						<div className={styles.contextReviewsWrapper2}>
							<div className={styles.letter}>
								<div className={styles.titleLetter}>
									{t('workAbsenceTitleLetter', { lng: translationLanguage })}
								</div>
								{/*<h2>{t('translationVersion', { lng: translationLanguage })}</h2>*/}
								<div className={styles.pText}>
									{employeesGender === 'male'
										? t('dearWithNameMale', {
												lng: translationLanguage,
												name:
													employeesName || t('defaultEmployeesName', { lng: translationLanguage }),
											})
										: employeesGender === 'female'
											? t('dearWithNameFemale', {
													lng: translationLanguage,
													name:
														employeesName ||
														t('defaultEmployeesName', { lng: translationLanguage }),
												})
											: t('dearWithNamePlural', {
													lng: translationLanguage,
												})}
								</div>

								<div className={styles.pText}>
									{t('workAbsenceParagraph1', {
										lng: translationLanguage,
										date: date
											? formatDate(date)
											: t('defaultWorkAbsenceDays', { lng: translationLanguage }),

										reason:
											t(`workAbsenceReasons.${reason}`, { lng: translationLanguage }) ||
											t('defaultWorkAbsenceReason', { lng: translationLanguage }),
									})}
								</div>
								<div className={styles.pText}>
									{t('workAbsenceParagraph2', { lng: translationLanguage })}
								</div>
								<div className={styles.pText}>
									{t('workAbsenceParagraph3', { lng: translationLanguage })}
								</div>

								<div className={styles.pText}>
									{t('workAbsenceSignatureText', {
										lng: translationLanguage,
										workerName: workerName || t('defaultWorkerName', { lng: translationLanguage }),
									})}
								</div>

								<div className={styles.pText}>
									{letterDate ? formatDate(letterDate) : defaultDate}
								</div>
							</div>
						</div>
						<div className={styles.buttonContainer}>
							<button
								type="button"
								className={styles.buttonLanguage}
								onClick={() => setTranslationLanguage('de')}
								aria-label={t('german')}
							>
								{t('german')}
							</button>
							<button
								type="button"
								className={styles.buttonLanguage}
								onClick={() => setTranslationLanguage('en')}
								aria-label={t('english')}
							>
								{t('english')}
							</button>
						</div>
					</div>
				</div>
				<div className={styles.checkboxContainer}>
					<input
						type="checkbox"
						id="agreementCheckbox"
						className={styles.checkbox}
						checked={isAgreed}
						onChange={(e) => setIsAgreed(e.target.checked)}
					/>
					<label htmlFor="agreementCheckbox">{t('agreeToTerms')}</label>
				</div>

				<div className={styles.buttonDownload}>
					<PDFDownloadLink
						document={<PDFWorkAbsence {...pdfProps} />}
						fileName="workAbsence_letter.pdf"
					>
						{({ url, loading, error }) =>
							loading ? (
								<span className={styles.loadingMessage}>Loading PDF...</span>
							) : error ? (
								<span className={styles.errorMessage}>
									An error occurred while generating the PDF: {error.message}
								</span>
							) : isAgreed ? (
								<a
									href={url ? url : undefined}
									target="_blank"
									rel="noopener noreferrer"
									className={styles.downloadLink}
									onClick={(e) => {
										if (!url) {
											e.preventDefault();
										}
									}}
								>
									{t('buttonDownloadPdf')}
								</a>
							) : (
								<button type="button" disabled className={styles.downloadLinkDisabled}>
									{t('buttonDownloadPdf')}
								</button>
							)
						}
					</PDFDownloadLink>
				</div>
				<div className={styles.workAbsenceParagraphBox}>
					<div className={styles.workAbsenceParagraph1}>{t('workAbsenceTextParagraph1')}</div>
					<div className={styles.workAbsenceParagraph2}>{t('workAbsenceTextParagraph2')}</div>
					<div className={styles.workAbsenceParagraph3}>{t('workAbsenceTextParagraph3')}</div>
					<div className={styles.workAbsenceParagraph4}>{t('workAbsenceTextParagraph4')}</div>
				</div>
				<div className={styles.bannerContainer}>
					<WorkAbsenceTipsBanner />
				</div>
				<div className={styles.bannerContainer}>
					<BannerAdobeReader />
				</div>
			</div>
		</div>
	);
}

export default WorkAbsence;
