import { useState } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PDFDownloadLink } from '@react-pdf/renderer';
import BannerAdobeReader from '../../banner/BannerAdobeReader';
import styles from './apologies.module.css';
import PDFApology from './PDFschoolLetters/PDFApology';
import ApologiesTipsBanner from '../../tips/ApologiesTipsBanner';
import ClearIcon from '@mui/icons-material/Clear';
import { Modal, Box } from '@mui/material';

function Apologies(): JSX.Element {
	const { t } = useTranslation();
	const [studentName, setStudentName] = useState('');
	const [teacherName, setTeacherName] = useState('');
	const [teacherGender, setTeacherGender] = useState('');
	const [gender, setGender] = useState('unspecified');
	const [classGrade, setClassGrade] = useState('');
	const [parentName, setParentName] = useState('');
	const [letterDate, setLetterDate] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [isAgreed, setIsAgreed] = useState(false);
	const [reason, setReason] = useState('selectAReason');

	const [translationLanguage, setTranslationLanguage] = useState('de');
	const [dateError, setDateError] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const newStartDate = e.target.value;
		setStartDate(newStartDate);

		// Проверка: дата начала должна быть раньше даты окончания
		if (endDate && new Date(newStartDate) >= new Date(endDate)) {
			setDateError('Дата начала не может быть позже или равна дате окончания');
			setIsModalOpen(true); // Открываем модальное окно с ошибкой
		} else {
			setDateError('');
			setIsModalOpen(false); // Закрываем модальное окно, если нет ошибки
		}
	};

	const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const newEndDate = e.target.value;

		// Проверка: дата окончания должна быть позже даты начала
		if (new Date(newEndDate) <= new Date(startDate)) {
			setDateError('Дата окончания должна быть позже даты начала');
			setIsModalOpen(true); // Открываем модальное окно с ошибкой
		} else {
			setEndDate(newEndDate);
			setDateError('');
			setIsModalOpen(false); // Закрываем модальное окно, если нет ошибки
		}
	};

	// Функция для закрытия модального окна
	const handleCloseModal = (): void => {
		setIsModalOpen(false);
	};

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
		title: t('apologies3TitleLetter', { lng: translationLanguage }),
		greeting:
			teacherGender === 'male' || teacherGender === 'female'
				? t(`dearWithName${teacherGender.charAt(0).toUpperCase() + teacherGender.slice(1)}`, {
						lng: translationLanguage,
						name: teacherName || t('defaultTeacherName', { lng: translationLanguage }),
					})
				: t('dearWithNamePlural', {
						lng: translationLanguage,
						name: teacherName || t('defaultTeacherName', { lng: translationLanguage }),
					}),

		bodyPart1: t('apologiesText1', {
			lng: translationLanguage,
			gender: t(`genderLabel.${gender}`, { lng: translationLanguage }),
			studentName: studentName || t('defaultStudentName', { lng: translationLanguage }),
			classGrade: classGrade || t('defaultClassGrade', { lng: translationLanguage }),
			startDate: startDate ? formatDate(startDate) : formatDate(currentDate),
			endDate: endDate ? formatDate(endDate) : formatDate(currentDate),
			reason: t(`reasons3.${reason}`, { lng: translationLanguage }),
		}),

		bodyPart2:
			gender === 'son'
				? t('apologyTextForSon', { lng: translationLanguage })
				: gender === 'daughter'
					? t('apologyTextForDaughter', { lng: translationLanguage })
					: t('apologyTextForUnspecified', { lng: translationLanguage }),

		signature: t('signatureText', { lng: translationLanguage }),
		parentName: parentName || t('defaultParentName', { lng: translationLanguage }),
		dateText: letterDate ? formatDate(letterDate) : defaultDate,
	};

	return (
		<div className={styles.doctorVisitBox}>
			<h1 className={styles.titlePage}>{t('apologies3Title')}</h1>
			<div className={styles.subtitlePage}>{t('apologies3Subtitle')}</div>
			<div className={styles.mainContainer}>
				<div className={styles.flexContainer}>
					<div className={styles.template}>
						<div className={styles.contextReviewsWrapper1}>
							<div className={styles.letter}>
								<div className={styles.titleLetter}>{t('apologies3TitleLetter')}</div>
								<div className={styles.pText}>
									{teacherGender === 'male'
										? t('dearWithNameMale', { name: teacherName || t('defaultTeacherName') })
										: teacherGender === 'female'
											? t('dearWithNameFemale', { name: teacherName || t('defaultTeacherName') })
											: t('dearWithNamePlural')}
								</div>

								<div className={styles.pText}>
									{t('apologiesText1', {
										gender: t(`genderLabel.${gender}`),
										studentName: studentName || t('defaultStudentName'),
										classGrade: classGrade || t('defaultClassGrade'),
										startDate: startDate ? formatDate(startDate) : defaultDate,
										endDate: endDate ? formatDate(endDate) : defaultDate,
										reason: t(`reasons3.${reason}`),
									})}
								</div>

								<div className={styles.pText}>
									{gender === 'son' || gender === 'gender'
										? t('apologyTextForSon')
										: gender === 'daughter'
											? t('apologyTextForDaughter')
											: t('apologyTextForUnspecified')}
								</div>

								<div className={styles.pText}>{t('signatureText')}</div>
								<div className={styles.signatureName}>{parentName || t('defaultParentName')}</div>

								{letterDate && <div className={styles.pText}>{formatDate(letterDate)}</div>}
							</div>

							<div className={styles.inputBox}>
								<div className={styles.nameBox}>
									<select
										id="teacherGender"
										className={styles.genderBox}
										value={teacherGender}
										onChange={(e) => setTeacherGender(e.target.value)}
										aria-label={t('selectGenderLabel')}
									>
										<option value="neutral">{t('neutral')}</option>
										<option value="male">{t('male')}</option>
										<option value="female">{t('female')}</option>
									</select>

									<div className={styles.inputBlock}>
										<input
											id="teacherName"
											className={styles.name}
											type="text"
											value={teacherName}
											onChange={(e) => setTeacherName(e.target.value)}
											required
											aria-label={t('teacherNamePlaceholder')}
										/>
										{teacherName && (
											<button
												type="button"
												className={styles.clearButton}
												onClick={() => {
													setTeacherName('');
												}}
												aria-label={t('clearRecipientName')}
											>
												<ClearIcon style={{ fontSize: 20 }} />
											</button>
										)}
										<label
											htmlFor="recipientName"
											className={`${styles.placeholder} ${teacherName && styles.filledPlaceholder}`}
										>
											{t('teacherNamePlaceholder')}
										</label>
									</div>
								</div>
								<div className={styles.nameBox}>
									<select
										id="gender"
										className={styles.genderBox}
										value={gender}
										onChange={(e) => setGender(e.target.value)}
										aria-label={t('selectGenderLabel')}
									>
										<option value="son">{t('son')}</option>
										<option value="daughter">{t('daughter')}</option>
										<option value="unspecified">{t('unspecified')}</option>
									</select>
									<div className={styles.inputBlock}>
										<input
											id="studentName"
											className={styles.name}
											type="text"
											value={studentName}
											onChange={(e) => setStudentName(e.target.value)}
											required
											aria-label={t('studentNamePlaceholder')}
										/>
										{studentName && (
											<button
												type="button"
												className={styles.clearButton}
												onClick={() => {
													setStudentName('');
												}}
												aria-label={t('clearArea')}
											>
												<ClearIcon style={{ fontSize: 20 }} />
											</button>
										)}
										<label
											htmlFor="studentName"
											className={`${styles.placeholder} ${studentName && styles.filledPlaceholder}`}
										>
											{t('studentNamePlaceholder')}
										</label>
									</div>
								</div>

								<div className={styles.inputBlock}>
									<input
										id="classGrade"
										className={styles.name}
										type="text"
										value={classGrade}
										onChange={(e) => setClassGrade(e.target.value)}
										required
										aria-label={t('classGradePlaceholder')}
									/>
									{classGrade && (
										<button
											type="button"
											className={styles.clearButton}
											onClick={() => {
												setClassGrade('');
											}}
											aria-label={t('clearArea')}
										>
											<ClearIcon style={{ fontSize: 20 }} />
										</button>
									)}
									<label
										htmlFor="classGrade"
										className={`${styles.placeholder} ${classGrade && styles.filledPlaceholder}`}
									>
										{t('classGradePlaceholder')}
									</label>
								</div>

								<div className={styles.nameBox}>
									<div className={styles.inputParentBlock}>
										<input
											id="dateOfStart"
											className={styles.dateOfSignature}
											type="date"
											value={startDate}
											onChange={handleStartDateChange}
											required
											aria-label={t('dateOfStart')}
										/>
										<span className={styles.placeholderDate}>{t('dateOfStart')}</span>
									</div>
									<div className={styles.inputParentBlock}>
										<input
											id="dateOfEnd"
											className={styles.dateOfSignature}
											type="date"
											value={endDate}
											onChange={handleEndDateChange}
											required
											aria-label={t('dateOfEnd')}
										/>
										<span className={styles.placeholderDate}>{t('dateOfEnd')}</span>
									</div>

									<Modal
										open={isModalOpen}
										onClose={handleCloseModal}
										aria-labelledby="modal-title"
										aria-describedby="modal-description"
									>
										<Box className={styles.modalStyle}>
											<button
												type="button"
												onClick={handleCloseModal}
												className={styles.closeModalButton}
												aria-label="Закрыть модальное окно"
												title="Закрыть"
											>
												<ClearIcon style={{ fontSize: 24 }} />
											</button>
											<div className={styles.modalTitle} id="modal-title">
												{t('Ошибка')}
											</div>
											<div className={styles.pText} id="modal-description">
												{dateError}
											</div>
										</Box>
									</Modal>
								</div>
								<div className={styles.reasonBlock}>
									<select
										id="selectAReason"
										value={reason}
										onChange={(e) => setReason(e.target.value)}
										aria-label={t('selectReason')}
									>
										<option value="selectAReason" disabled>
											{t('selectAReason')}
										</option>
										<option value="illness3day">{t('illness3day')}</option>
										<option value="personalReasons">{t('personalReasons')}</option>
									</select>
								</div>
								<div className={styles.nameBox}>
									<div className={styles.inputParentBlock}>
										<input
											id="parentName"
											className={styles.name}
											type="text"
											value={parentName}
											onChange={(e) => setParentName(e.target.value)}
											required
											aria-label={t('parentNamePlaceholder')}
										/>
										{parentName && (
											<button
												type="button"
												className={styles.clearButton}
												onClick={() => {
													setParentName('');
												}}
												aria-label={t('clearArea')}
											>
												<ClearIcon style={{ fontSize: 20 }} />
											</button>
										)}
										<label
											htmlFor="parentName"
											className={`${styles.placeholder} ${parentName && styles.filledPlaceholder}`}
										>
											{t('parentNamePlaceholder')}
										</label>
									</div>
									<div className={styles.inputParentBlock}>
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
									{t('apologies3TitleLetter', { lng: translationLanguage })}
								</div>
								<div className={styles.pText}>
									{teacherGender === 'male'
										? t('dearWithNameMale', {
												lng: translationLanguage,
												name: teacherName || t('defaultTeacherName', { lng: translationLanguage }),
											})
										: teacherGender === 'female'
											? t('dearWithNameFemale', {
													lng: translationLanguage,
													name:
														teacherName || t('defaultTeacherName', { lng: translationLanguage }),
												})
											: t('dearWithNamePlural', { lng: translationLanguage })}
								</div>

								<div className={styles.p}>
									{t('apologiesText1', {
										lng: translationLanguage,
										gender: t(`genderLabel.${gender}`, { lng: translationLanguage }),
										studentName:
											studentName || t('defaultStudentName', { lng: translationLanguage }),
										classGrade: classGrade || t('defaultClassGrade', { lng: translationLanguage }),
										startDate: startDate ? formatDate(startDate) : defaultDate,
										endDate: endDate ? formatDate(endDate) : defaultDate,
										reason: t(`reasons3.${reason}`, { lng: translationLanguage }),
									})}
								</div>

								<div className={styles.pText}>
									{gender === 'son' || gender === 'gender'
										? t('apologyTextForSon', { lng: translationLanguage })
										: gender === 'daughter'
											? t('apologyTextForDaughter', { lng: translationLanguage })
											: t('apologyTextForUnspecified', { lng: translationLanguage })}
								</div>

								<div className={styles.pText}>
									{t('signatureText', { lng: translationLanguage })}
								</div>
								<div className={styles.signatureName}>
									{parentName || t('defaultParentName', { lng: translationLanguage })}
								</div>

								{letterDate && <div className={styles.pText}>{formatDate(letterDate)}</div>}
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
					<PDFDownloadLink document={<PDFApology {...pdfProps} />} fileName="apology_letter.pdf">
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
				<div className={styles.doctorVisitParagraphBox}>
					<div className={styles.doctorVisitParagraph1}>{t('apologies3Paragraph1')}</div>
					<div className={styles.doctorVisitParagraph2}>{t('apologies3Paragraph2')}</div>
					<div className={styles.doctorVisitParagraph2}>{t('apologies3Paragraph3')}</div>
				</div>
				<div className={styles.bannerContainer}>
					<ApologiesTipsBanner />
				</div>
				<div className={styles.bannerContainer}>
					<BannerAdobeReader />
				</div>
			</div>
		</div>
	);
}

export default Apologies;
