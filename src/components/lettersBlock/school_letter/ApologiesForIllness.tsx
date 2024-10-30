import { useState } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PDFDownloadLink } from '@react-pdf/renderer';
import styles from './apologiesForIllness.module.css';
import PDFApologyIllness from './PDFschoolLetters/PDFApologyIllness';
import BannerAdobeReader from '../../banner/BannerAdobeReader';
import SchoolAbsenceNotificationBanner from '../../tips/SchoolAbsenceNotificationBanner';
import ClearIcon from '@mui/icons-material/Clear';

function ApologiesForIllness(): JSX.Element {
	const { t } = useTranslation();
	const [studentName, setStudentName] = useState('');
	const [teacherName, setTeacherName] = useState('');
	const [teacherGender, setTeacherGender] = useState('');
	const [gender, setGender] = useState('unspecified');
	const [reason, setReason] = useState('selectAReason');
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
		title: t('apologiesTitleLetter', { lng: translationLanguage }),
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

		bodyPart1:
			gender === 'son'
				? t('apologyText1ForSon', {
						lng: translationLanguage,
						gender: t(`genderLabel.${gender}`, { lng: translationLanguage }),
						studentName: studentName || t('defaultStudentName', { lng: translationLanguage }),
						classGrade: classGrade || t('defaultClassGrade', { lng: translationLanguage }),
						date: date ? formatDate(date) : defaultDate,
						reason: t(`reasons.${reason}`, { lng: translationLanguage }),
					})
				: gender === 'daughter'
					? t('apologyText1ForDaughter', {
							lng: translationLanguage,
							gender: t(`genderLabel.${gender}`, { lng: translationLanguage }),
							studentName: studentName || t('defaultStudentName', { lng: translationLanguage }),
							classGrade: classGrade || t('defaultClassGrade', { lng: translationLanguage }),
							date: date ? formatDate(date) : defaultDate,
							reason: t(`reasons.${reason}`, { lng: translationLanguage }),
						})
					: t('apologyText1ForUnspecified', {
							lng: translationLanguage,
							gender: t(`genderLabel.${gender}`, { lng: translationLanguage }),
							studentName: studentName || t('defaultStudentName', { lng: translationLanguage }),
							classGrade: classGrade || t('defaultClassGrade', { lng: translationLanguage }),
							date: date ? formatDate(date) : defaultDate,
							reason: t(`reasons.${reason}`, { lng: translationLanguage }),
						}),

		bodyPart2:
			gender === 'son'
				? t('apologyTextForSon', { lng: translationLanguage })
				: gender === 'daughter'
					? t('apologyTextForDaughter', { lng: translationLanguage })
					: t('apologyTextForUnspecified', { lng: translationLanguage }),
		signature: t('signatureText', {
			lng: translationLanguage,
		}),
		parentName: parentName || t('defaultParentName', { lng: translationLanguage }),

		dateText: letterDate ? formatDate(letterDate) : undefined,
	};

	return (
		<div className={styles.illnessBox}>
			<h1 className={styles.titlePage}>{t('apologiesTitle')}</h1>
			<div className={styles.subtitlePage}>{t('apologiesSubtitle')}</div>
			<div className={styles.mainContainer}>
				<div className={styles.flexContainer}>
					<div className={styles.template}>
						<div className={styles.contextReviewsWrapper1}>
							<div className={styles.letter}>
								<div className={styles.titleLetter}>{t('apologiesTitleLetter')}</div>
								{/*<h2>{t('originalVersion')}</h2>*/}
								<div className={styles.pText}>
									{teacherGender === 'male' && teacherName
										? t('dearWithNameMale', { name: teacherName || t('defaultTeacherName') })
										: teacherGender === 'female' && teacherName
											? t('dearWithNameFemale', { name: teacherName || t('defaultTeacherName') })
											: t('dearWithNamePlural')}
								</div>

								<div className={styles.pText}>
									{gender === 'unspecified' || gender === 'gender'
										? t('apologyText1ForUnspecified', {
												gender: t(`genderLabel.${gender}`),
												studentName: studentName || t('defaultStudentName'),
												classGrade: classGrade || t('defaultClassGrade'),
												date: date ? formatDate(date) : defaultDate,
												reason: t(`reasons.${reason}`),
											})
										: gender === 'daughter'
											? t('apologyText1ForDaughter', {
													gender: t(`genderLabel.${gender}`),
													studentName: studentName || t('defaultStudentName'),
													classGrade: classGrade || t('defaultClassGrade'),
													date: date ? formatDate(date) : defaultDate,
													reason: t(`reasons.${reason}`),
												})
											: t('apologyText1ForSon', {
													gender: t(`genderLabel.${gender}`),
													studentName: studentName || t('defaultStudentName'),
													classGrade: classGrade || t('defaultClassGrade'),
													date: date ? formatDate(date) : defaultDate,
													reason: t(`reasons.${reason}`),
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

								<div className={styles.pText}>{letterDate ? formatDate(letterDate) : ''}</div>
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
								<div>
									<select
										id="selectAReason"
										value={reason}
										onChange={(e) => setReason(e.target.value)}
										aria-label={t('selectReason')}
									>
										<option value="selectAReason" disabled>
											{t('selectAReason')}
										</option>
										<option value="illness">{t('illness2')}</option>
										<option value="doctorVisit">{t('doctorVisit')}</option>
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
									{t('apologiesTitleLetter', { lng: translationLanguage })}
								</div>
								{/*<h2>{t('translationVersion', { lng: translationLanguage })}</h2>*/}
								<div className={styles.pText}>
									{teacherGender === 'male' && teacherName
										? t('dearWithNameMale', {
												lng: translationLanguage,
												name: teacherName || t('defaultTeacherName', { lng: translationLanguage }),
											})
										: teacherGender === 'female' && teacherName
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
									{gender === 'son'
										? t('apologyText1ForSon', {
												lng: translationLanguage,
												gender: t(`genderLabel.${gender}`, { lng: translationLanguage }),
												studentName:
													studentName || t('defaultStudentName', { lng: translationLanguage }),
												classGrade:
													classGrade || t('defaultClassGrade', { lng: translationLanguage }),
												date: date ? formatDate(date) : defaultDate,
												reason: t(`reasons.${reason}`, { lng: translationLanguage }),
											})
										: gender === 'daughter'
											? t('apologyText1ForDaughter', {
													lng: translationLanguage,
													gender: t(`genderLabel.${gender}`, { lng: translationLanguage }),
													studentName:
														studentName || t('defaultStudentName', { lng: translationLanguage }),
													classGrade:
														classGrade || t('defaultClassGrade', { lng: translationLanguage }),
													date: date ? formatDate(date) : defaultDate,
													reason: t(`reasons.${reason}`, { lng: translationLanguage }),
												})
											: t('apologyText1ForUnspecified', {
													lng: translationLanguage,
													gender: t(`genderLabel.${gender}`, { lng: translationLanguage }),
													studentName:
														studentName || t('defaultStudentName', { lng: translationLanguage }),
													classGrade:
														classGrade || t('defaultClassGrade', { lng: translationLanguage }),
													date: date ? formatDate(date) : defaultDate,
													reason: t(`reasons.${reason}`, { lng: translationLanguage }),
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
									{t('signatureText', {
										lng: translationLanguage,
									})}
								</div>
								<div className={styles.signatureName}>
									{parentName || t('defaultParentName', { lng: translationLanguage })}
								</div>

								<div className={styles.pText}>{letterDate ? formatDate(letterDate) : ''}</div>
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
						document={<PDFApologyIllness {...pdfProps} />}
						fileName="apology_letter.pdf"
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
				<div className={styles.apologiesParagraphBox}>
					<div className={styles.apologiesParagraph1}>{t('apologiesParagraph1')}</div>
					<div className={styles.apologiesParagraph2}>{t('apologiesParagraph2')}</div>
					<div className={styles.apologiesParagraph3}>{t('apologiesParagraph3')}</div>
				</div>
				<div className={styles.bannerContainer}>
					<SchoolAbsenceNotificationBanner />
				</div>
				<div className={styles.bannerContainer}>
					<BannerAdobeReader />
				</div>
			</div>
		</div>
	);
}

export default ApologiesForIllness;
