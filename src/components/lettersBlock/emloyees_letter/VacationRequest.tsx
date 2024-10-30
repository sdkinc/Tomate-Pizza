import styles from './vacationRequest.module.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import PDFVacationRequest from './PDFemployeesLetter/PDFVacationRequest';
import { PDFDownloadLink } from '@react-pdf/renderer';
import BannerAdobeReader from '../../banner/BannerAdobeReader';
import VacationRequestTipsBanner from '../../tips/VacationRequestTipsBanner';
import ClearIcon from '@mui/icons-material/Clear';

function VacationRequest(): JSX.Element {
	const { t } = useTranslation();
	const [employeesName, setEmployeesName] = useState('');
	const [employeesGender, setEmployeesGender] = useState('neutral');
	const [vacationDays, setVacationDays] = useState('');
	const [workerName, setWorkerName] = useState('');
	const [letterDate, setLetterDate] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [isAgreed, setIsAgreed] = useState(false);
	const [translationLanguage, setTranslationLanguage] = useState('de');

	const formatDate = (dateString: string): string => {
		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: '2-digit' };
		return new Date(dateString).toLocaleDateString(translationLanguage, options);
	};
	const currentDate = new Date().toLocaleDateString(translationLanguage, {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	});
	const defaultDate = t('defaultDate').replace('{{date}}', currentDate);

	const pdfProps = {
		title: t('vacationRequestTitleLetter', { lng: translationLanguage }),
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

		bodyPart1: t('vacationRequestParagraph1', {
			lng: translationLanguage,
			workerName: workerName || t('defaultWorkerName', { lng: translationLanguage }),
			vacationDays: vacationDays || t('defaultVacationDays', { lng: translationLanguage }),
			reason: t(`vacationRequestReasons.${vacationDays}`, {
				lng: translationLanguage,
			}),
			dates: startDate
				? `${t('from', { lng: translationLanguage })} ${formatDate(startDate)} ${t('to', { lng: translationLanguage })} ${formatDate(endDate)}`
				: t('selectDates', { lng: translationLanguage }),
		}),

		bodyPart2: t('vacationRequestParagraph2', { lng: translationLanguage }),
		bodyPart3: t('vacationRequestParagraph3', { lng: translationLanguage }),

		signature: t('workAbsenceSignatureText', {
			lng: translationLanguage,
			workerName: workerName || t('defaultWorkerName', { lng: translationLanguage }),
		}),
		dateText: letterDate ? formatDate(letterDate) : defaultDate,
	};

	return (
		<div className={styles.vacationRequestBox}>
			<div className={styles.titlePage}>{t('vacationRequestTitle')}</div>
			<div className={styles.mainContainer}>
				<div className={styles.flexContainer}>
					<div className={styles.template}>
						<div className={styles.contextReviewsWrapper1}>
							<div className={styles.letter}>
								<div className={styles.titleLetter}>{t('vacationRequestTitleLetter')}</div>
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
									{t('vacationRequestParagraph1', {
										workerName: workerName || t('defaultWorkerName'),
										vacationDays: vacationDays || t('defaultVacationDays'),
										dates:
											startDate && endDate
												? `${t('from')} ${formatDate(startDate)} ${t('to')} ${formatDate(endDate)}`
												: t('selectDates'),
									})}
								</div>

								<div className={styles.pText}>{t('vacationRequestParagraph2')}</div>
								<div className={styles.pText}>{t('vacationRequestParagraph3')}</div>
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

								<div className={styles.timeBox}>
									<div className={styles.timeBlock}>
										<input
											id="startDate"
											className={styles.dateOfSignature}
											type="date"
											value={startDate}
											onChange={(e) => setStartDate(e.target.value)}
											required
											aria-label={t('dateOfStart')}
										/>
										<span className={styles.placeholderDate}>{t('dateOfStart')}</span>
									</div>
									<div className={styles.timeBlock}>
										<input
											id="endDate"
											className={styles.dateOfSignature}
											type="date"
											value={endDate}
											onChange={(e) => setEndDate(e.target.value)}
											required
											aria-label={t('dateOfEnd')}
										/>
										<span className={styles.placeholderDate}>{t('dateOfEnd')}</span>
									</div>
								</div>

								<div className={styles.inputBlock}>
									<input
										id="vacationDays"
										className={styles.name}
										type="text"
										value={vacationDays}
										onChange={(e) => setVacationDays(e.target.value)}
										required
										aria-label={t('numberOfVacationDays')}
									/>
									{vacationDays && (
										<button
											type="button"
											className={styles.clearButton}
											onClick={() => {
												setVacationDays('');
											}}
											aria-label={t('clearArea')}
										>
											<ClearIcon style={{ fontSize: 20 }} />
										</button>
									)}
									<label
										htmlFor="vacationDays"
										className={`${styles.placeholder} ${vacationDays && styles.filledPlaceholder}`}
									>
										{t('numberOfVacationDays')}
									</label>
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
									{t('vacationRequestTitleLetter', { lng: translationLanguage })}
								</div>
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
											: t('dearWithNamePlural', { lng: translationLanguage })}
								</div>
								<div className={styles.pText}>
									{t('vacationRequestParagraph1', {
										lng: translationLanguage,
										workerName: workerName || t('defaultWorkerName', { lng: translationLanguage }),
										vacationDays:
											vacationDays || t('defaultVacationDays', { lng: translationLanguage }),
										reason: t(`vacationRequestReasons.${vacationDays}`, {
											lng: translationLanguage,
										}),
										dates: startDate
											? `${t('from', { lng: translationLanguage })} ${formatDate(startDate)} ${t('to', { lng: translationLanguage })} ${formatDate(endDate)}`
											: t('selectDates', { lng: translationLanguage }),
									})}
								</div>

								<div className={styles.pText}>
									{t('vacationRequestParagraph2', { lng: translationLanguage, days: vacationDays })}
								</div>
								<div className={styles.pText}>
									{t('vacationRequestParagraph3', { lng: translationLanguage })}
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
						document={<PDFVacationRequest {...pdfProps} />}
						fileName="vacationRequest_letter.pdf"
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
				<div className={styles.textBox}>
					<div className={styles.textParagraph1}>{t('vacationRequestTextParagraph1')}</div>
					<div className={styles.textParagraph2}>{t('vacationRequestTextParagraph2')}</div>
					<div className={styles.textParagraph3}>{t('vacationRequestTextParagraph3')}</div>
				</div>
				<div className={styles.bannerContainer}>
					<VacationRequestTipsBanner />
				</div>

				<div className={styles.bannerContainer}>
					<BannerAdobeReader />
				</div>
			</div>
		</div>
	);
}
export default VacationRequest;
