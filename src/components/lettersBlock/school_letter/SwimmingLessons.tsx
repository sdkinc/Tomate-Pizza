import { useState } from 'react';
import styles from './swimmingLessons.module.css';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';
import BannerAdobeReader from '../../banner/BannerAdobeReader';
import PDFSwimmingLessons from './PDFschoolLetters/PDFSwimmingLessons';
import SwimmingLessonsTipsBanner from '../../tips/SwimmingLessonsTipsBanner';
import ClearIcon from '@mui/icons-material/Clear';

function SwimmingLessons(): JSX.Element {
	const { t } = useTranslation();
	const [studentName, setStudentName] = useState('');
	const [teacherName, setTeacherName] = useState('');
	const [teacherGender, setTeacherGender] = useState('');
	const [gender, setGender] = useState('unspecified');
	const [classGrade, setClassGrade] = useState('');
	const [parentName, setParentName] = useState('');
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
		title: t('swimmingLessonsTitleLetter', { lng: translationLanguage }),
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

		bodyPart1: t('swimmingLessonsText1', {
			lng: translationLanguage,
			gender: t(`genderLabel.${gender}`, { lng: translationLanguage }),
			studentName: studentName || t('defaultStudentName', { lng: translationLanguage }),
			classGrade: classGrade || t('defaultClassGrade', { lng: translationLanguage }),
			date: date ? formatDate(date) : defaultDate,
		}),
		bodyPart2: t('thankYouForUnderstanding', { lng: translationLanguage }),
		signature: t('signatureText', {
			lng: translationLanguage,
		}),
		parentName: parentName || t('defaultParentName', { lng: translationLanguage }),
		dateText: letterDate ? formatDate(letterDate) : defaultDate,
	};
	return (
		<div className={styles.swimmingLessonsBox}>
			<h1 className={styles.titlePage}>{t('swimmingLessonsTitle')}</h1>
			<div className={styles.subtitlePage}>{t('swimmingLessonsSubtitle')}</div>
			<div className={styles.mainContainer}>
				<div className={styles.flexContainer}>
					<div className={styles.template}>
						<div className={styles.contextReviewsWrapper1}>
							<div className={styles.letter}>
								<div className={styles.titleLetter}>{t('swimmingLessonsTitleLetter')}</div>
								{/*<h2>{t('originalVersion')}</h2>*/}
								<div className={styles.pText}>
									{teacherGender === 'male'
										? t('dearWithNameMale', { name: teacherName || t('defaultTeacherName') })
										: teacherGender === 'female'
											? t('dearWithNameFemale', {
													name: teacherName || t('defaultTeacherName'),
												})
											: t('dearWithNamePlural')}
								</div>

								<div className={styles.pText}>
									{t('swimmingLessonsText1', {
										gender: t(`genderLabel.${gender}`),
										studentName: studentName || t('defaultStudentName'),
										classGrade: classGrade || t('defaultClassGrade'),
										date: date ? formatDate(date) : defaultDate,
									})}
								</div>

								<div className={styles.pText}>{t('thankYouForUnderstanding')}</div>

								<div className={styles.pText}>{t('signatureText')}</div>
								<div className={styles.signatureName}>{parentName || t('defaultParentName')}</div>

								<div className={styles.pText}>
									{letterDate ? formatDate(letterDate) : defaultDate}
								</div>
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
										<option value="gender" disabled>
											{t('gender')}
										</option>
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
									{t('swimmingLessonsTitleLetter', { lng: translationLanguage })}
								</div>
								{/*<h2>{t('translationVersion', { lng: translationLanguage })}</h2>*/}
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
											: t('dearWithNamePlural', {
													lng: translationLanguage,
												})}
								</div>

								<div className={styles.pText}>
									{t('swimmingLessonsText1', {
										lng: translationLanguage,
										gender: t(`genderLabel.${gender}`, { lng: translationLanguage }),
										studentName:
											studentName || t('defaultStudentName', { lng: translationLanguage }),
										classGrade: classGrade || t('defaultClassGrade', { lng: translationLanguage }),
										date: date ? formatDate(date) : defaultDate,
									})}
								</div>
								<div className={styles.pText}>
									{t('thankYouForUnderstanding', { lng: translationLanguage })}
								</div>

								<div className={styles.pText}>
									{t('signatureText', {
										lng: translationLanguage,
									})}
								</div>
								<div className={styles.signatureName}>
									{parentName || t('defaultParentName', { lng: translationLanguage })}
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
						document={<PDFSwimmingLessons {...pdfProps} />}
						fileName="swimmingLessons_letter.pdf"
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
					<div className={styles.textParagraph1}>{t('swimmingLessonsParagraph1')}</div>
					<div className={styles.textParagraph2}>{t('swimmingLessonsParagraph2')}</div>
					<div className={styles.textParagraph3}>{t('swimmingLessonsParagraph3')}</div>
				</div>
				<div className={styles.bannerContainer}>
					<SwimmingLessonsTipsBanner />
				</div>
				<div className={styles.bannerContainer}>
					<BannerAdobeReader />
				</div>
			</div>
		</div>
	);
}

export default SwimmingLessons;
