import { useState } from 'react';
import styles from './doctorVisit.module.css';
import { useTranslation } from 'react-i18next';
import PDFDoctorVisit from './PDFschoolLetters/PDFDoctorVisit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PDFDownloadLink } from '@react-pdf/renderer';
import DoctorVisitTipsBanner from '../../tips/DoctorVisitTipsBanner';
import BannerAdobeReader from '../../banner/BannerAdobeReader';
import ClearIcon from '@mui/icons-material/Clear';

function DoctorVisit(): JSX.Element {
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
	const [startTime, setStartTime] = useState('');
	const [endTime, setEndTime] = useState('');
	const [isAgreed, setIsAgreed] = useState(false);

	const [translationLanguage, setTranslationLanguage] = useState('de');

	const formatTime = (timeString: string): string => {
		const options: Intl.DateTimeFormatOptions = {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
		};
		return new Date('1970-01-01T' + timeString).toLocaleTimeString(translationLanguage, options);
	};

	const formatDate = (dateString: string): string => {
		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: '2-digit' };
		return new Date(dateString).toLocaleDateString(translationLanguage, options);
	};
	const currentDate = new Date().toLocaleDateString('de-DE', {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	});
	const defaultDate = t('defaultDate').replace('{{date}}', currentDate);

	const pdfProps = {
		title: t('doctorVisitTitleLetter', { lng: translationLanguage }),
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

		bodyPart1: t('doctorVisitText1', {
			lng: translationLanguage,
			gender: t(`genderLabel.${gender}`, { lng: translationLanguage }),
			studentName: studentName || t('defaultStudentName', { lng: translationLanguage }),
			classGrade: classGrade || t('defaultClassGrade', { lng: translationLanguage }),
		}),

		startDateText:
			startDate && startTime
				? `${formatDate(startDate)} ${t('at', { lng: translationLanguage })} ${formatTime(startTime)} ${t('uhr', { lng: translationLanguage })}`
				: t('defaultDateEnd', { lng: translationLanguage }),
		endDateText:
			endDate && endTime
				? `${formatDate(endDate)} ${t('at', { lng: translationLanguage })} ${formatTime(endTime)} ${t('uhr', { lng: translationLanguage })}`
				: t('defaultDateEnd', { lng: translationLanguage }),

		bodyPart2: t('doctorVisitText2', { lng: translationLanguage }),
		bodyPart3: t('thankYouForUnderstanding', { lng: translationLanguage }),
		signature: t('signatureText', {
			lng: translationLanguage,
		}),
		parentName: parentName || t('defaultParentName', { lng: translationLanguage }),
		dateText: letterDate ? formatDate(letterDate) : defaultDate,
	};

	return (
		<div className={styles.doctorVisitBox}>
			<h1 className={styles.titlePage}>{t('doctorVisitTitle')}</h1>
			<div className={styles.subtitlePage}>{t('doctorVisitSubtitle')}</div>
			<div className={styles.mainContainer}>
				<div className={styles.flexContainer}>
					<div className={styles.template}>
						<div className={styles.contextReviewsWrapper1}>
							<div className={styles.letter}>
								<div className={styles.titleLetter}>{t('doctorVisitTitleLetter')}</div>
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
									{t('doctorVisitText1', {
										gender: t(`genderLabel.${gender}`),
										studentName: studentName || t('defaultStudentName'),
										classGrade: classGrade || t('defaultClassGrade'),
									})}
								</div>

								<div className={styles.dateBlock}>
									<div className={styles.titleContainer}>{t('start')}</div>
									<div className={styles.dateContainer}>
										<div className={styles.dateTime}>
											{startDate && startTime ? (
												<>
													<span className={styles.datePart}>{formatDate(startDate)}</span>
													<span className={styles.separator}>{t('at')} </span>
													<span className={styles.timePart}>{formatTime(startTime)}</span>
												</>
											) : (
												<>
													<span className={styles.datePart}>{defaultDate}</span>
													<span className={styles.separator}> {t('at')} </span>
													<span className={styles.timePart}>{t('defaultDateStart')}</span>
												</>
											)}
										</div>
									</div>
								</div>

								<div className={styles.dateBlock}>
									<div className={styles.titleContainer}>{t('end')}</div>
									<div className={styles.dateContainer}>
										<div className={styles.dateTime}>
											{endDate && endTime ? (
												<>
													<span className={styles.datePart}>{formatDate(endDate)}</span>
													<span className={styles.separator}> {t('at')} </span>
													<span className={styles.timePart}>{formatTime(endTime)}</span>
												</>
											) : (
												<>
													<span className={styles.datePart}>{defaultDate}</span>
													<span className={styles.separator}> {t('at')} </span>
													<span className={styles.timePart}>{t('defaultDateStart')}</span>
												</>
											)}
										</div>
									</div>
								</div>

								<div className={styles.pText}>{t('doctorVisitText2')}</div>
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

								<div className={styles.timeBox}>
									<div className={styles.inputParentBlock}>
										<input
											id="dateOfStart"
											className={styles.dateOfSignature}
											type="date"
											value={startDate}
											onChange={(e) => setStartDate(e.target.value)}
											required
											aria-label={t('dateOfStart')}
										/>
										<span className={styles.placeholderDate}>{t('dateOfStart')}</span>
									</div>
									<div className={styles.inputDateBlock}>
										<input
											id="timeOfStart"
											className={styles.dateOfSignature}
											type="time"
											value={startTime}
											onChange={(e) => setStartTime(e.target.value)}
											required
											aria-label={t('timeOfStart')}
										/>
										<span className={styles.placeholderDate}>{t('timeOfStart')}</span>
									</div>
								</div>
								<div className={styles.timeBox}>
									<div className={styles.inputParentBlock}>
										<input
											id="dateOfEnd"
											className={styles.dateOfSignature}
											type="date"
											value={endDate}
											onChange={(e) => setEndDate(e.target.value)}
											required
											aria-label={t('dateOfEnd')}
										/>
										<span className={styles.placeholderDate}>{t('dateOfEnd')}</span>
									</div>
									<div className={styles.inputDateBlock}>
										<input
											id="timeOfEnd"
											className={styles.dateOfSignature}
											type="time"
											value={endTime}
											onChange={(e) => setEndTime(e.target.value)}
											required
											aria-label={t('timeOfEnd')}
										/>
										<span className={styles.placeholderDate}>{t('timeOfEnd')}</span>
									</div>
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
									{t('doctorVisitTitleLetter', { lng: translationLanguage })}
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
									{t('doctorVisitText1', {
										lng: translationLanguage,
										gender: t(`genderLabel.${gender}`, { lng: translationLanguage }),
										studentName:
											studentName || t('defaultStudentName', { lng: translationLanguage }),
										classGrade: classGrade || t('defaultClassGrade', { lng: translationLanguage }),
									})}
								</div>

								<div className={styles.dateBlock}>
									<div className={styles.titleContainer}>
										{t('start', { lng: translationLanguage })}
									</div>
									<div className={styles.dateContainer}>
										<div className={styles.dateTime}>
											{startDate && startTime ? (
												<>
													<span className={styles.datePart}>{formatDate(startDate)}</span>
													<span className={styles.separator}>
														{t('at', { lng: translationLanguage })}
													</span>
													<span className={styles.timePart}>{formatTime(startTime)}</span>
													{t('uhr', { lng: translationLanguage })}
												</>
											) : (
												<>
													<span className={styles.datePart}>{defaultDate}</span>
													<span className={styles.separator}>
														{t('at', { lng: translationLanguage })}
													</span>
													<span className={styles.timePart}>
														{t('defaultDateStart', { lng: translationLanguage })}
													</span>
												</>
											)}
										</div>
									</div>
								</div>

								<div className={styles.dateBlock}>
									<div className={styles.titleContainer}>
										{t('end', { lng: translationLanguage })}
									</div>
									<div className={styles.dateContainer}>
										<div className={styles.dateTime}>
											{endDate && endTime ? (
												<>
													<span className={styles.datePart}>{formatDate(endDate)}</span>
													<span className={styles.separator}>
														{t('at', { lng: translationLanguage })}
													</span>
													<span className={styles.timePart}>{formatTime(endTime)} </span>
													{t('uhr', { lng: translationLanguage })}
												</>
											) : (
												<>
													<span className={styles.datePart}>{defaultDate}</span>
													<span className={styles.separator}>
														{t('at', { lng: translationLanguage })}
													</span>
													<span className={styles.timePart}>
														{t('defaultDateEnd', { lng: translationLanguage })}
													</span>
												</>
											)}
										</div>
									</div>
								</div>

								<div className={styles.pText}>
									{t('doctorVisitText2', { lng: translationLanguage })}
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
						document={<PDFDoctorVisit {...pdfProps} />}
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
				<div className={styles.doctorVisitParagraphBox}>
					<div className={styles.doctorVisitParagraph1}>{t('doctorVisitParagraph1')}</div>
					<div className={styles.doctorVisitParagraph2}>{t('doctorVisitParagraph2')}</div>
				</div>
				<div className={styles.bannerContainer}>
					<DoctorVisitTipsBanner />
				</div>
				<div className={styles.bannerContainer}>
					<BannerAdobeReader />
				</div>
			</div>
		</div>
	);
}
export default DoctorVisit;
