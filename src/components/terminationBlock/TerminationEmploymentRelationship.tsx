// eslint-disable-next-line import/default
import React, { useState } from 'react';
import styles from './terminationEmploymentRelationship.module.css';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';
import BannerAdobeReader from '../banner/BannerAdobeReader';
import ClearIcon from '@mui/icons-material/Clear';
import PDFTerminationEmploymentRelationship from './PDFTermination/PDFTerminationEmploymentRelationship';
import TerminationEmploymentRelationshipTipsBanner from '../tips/TerminationEmploymentRelationshipTipsBanner';

function EmploymentRelationship(): JSX.Element {
	const { t } = useTranslation();
	const [employeeName, setEmployeeName] = useState('');
	const [employeeStreet, setEmployeeStreet] = useState('');
	const [employeeCity, setEmployeeCity] = useState('');
	const [companyName, setCompanyName] = useState('');
	const [companyStreet, setCompanyStreet] = useState('');
	const [companyCity, setCompanyCity] = useState('');
	const [terminationDate, setTerminationDate] = useState('');
	const [letterDate, setLetterDate] = useState('');
	const [isAgreed, setIsAgreed] = useState(false);
	const [supervisorGender, setSupervisorGender] = useState('male');
	const [supervisorName, setSupervisorName] = useState('');

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
		header: t('terminationLetterHeader', { lng: translationLanguage }),
		greeting:
			supervisorGender === 'male' || supervisorGender === 'female'
				? t(`dearWithName${supervisorGender.charAt(0).toUpperCase() + supervisorGender.slice(1)}`, {
						lng: translationLanguage,
						name: supervisorName || t('defaultSupervisorName', { lng: translationLanguage }),
					})
				: t('dearWithNamePlural', {
						lng: translationLanguage,
						name: supervisorName || t('defaultSupervisorName', { lng: translationLanguage }),
					}),
		bodyPart1: t('terminationLetterContent1', {
			lng: translationLanguage,
			terminationDate: terminationDate ? formatDate(terminationDate) : defaultDate,
		}),
		bodyPart2: t('terminationLetterContent2', { lng: translationLanguage }),
		bodyPart3: t('terminationLetterContent3', { lng: translationLanguage }),
		footer: t('terminationLetterFooter', { lng: translationLanguage }),
		signature: t('signatureText', { lng: translationLanguage }),
		employeeName: employeeName || t('defaultEmployeeName', { lng: translationLanguage }),
		employeeStreet: employeeStreet || t('defaultEmployeeStreet', { lng: translationLanguage }),
		employeeCity: employeeCity || t('defaultEmployeeCity', { lng: translationLanguage }),
		companyName: companyName || t('defaultCompanyName', { lng: translationLanguage }),
		companyStreet: companyStreet || t('defaultCompanyStreet', { lng: translationLanguage }),
		companyCity: companyCity || t('defaultCompanyCity', { lng: translationLanguage }),
		dateText: letterDate ? formatDate(letterDate) : defaultDate,
	};

	return (
		<div className={styles.terminationLetterBox}>
			<h1 className={styles.titlePage}>{t('terminationLetterTitle')}</h1>
			<p className={styles.subtitlePage}>{t('terminationLetterSubtitle')}</p>
			<div className={styles.mainContainer}>
				<div className={styles.flexContainer}>
					<div className={styles.template}>
						<div className={styles.contextReviewsWrapper1}>
							<div className={styles.letter}>
								<p>
									{employeeName || t('defaultEmployeeName')}
									<br />
									{employeeStreet || t('defaultEmployeeStreet')}
									<br />
									{employeeCity || t('defaultEmployeeCity')}
								</p>
								<p>
									{companyName || t('defaultCompanyName')}
									<br />
									{companyStreet || t('defaultCompanyStreet')}
									<br />
									{companyCity || t('defaultCompanyCity')}
								</p>
								<p>{letterDate ? formatDate(letterDate) : defaultDate}</p>

								<p>
									<strong>{t('terminationLetterHeader')}</strong>
								</p>
								<p>
									{supervisorGender === 'male'
										? t('dearWithNameMale', { name: supervisorName || t('defaultSupervisorName') })
										: supervisorGender === 'female'
											? t('dearWithNameFemale', {
													name: supervisorName || t('defaultSupervisorName'),
												})
											: t('dearWithNamePlural')}
								</p>
								<p>
									{t('terminationLetterContent1', {
										terminationDate: terminationDate ? formatDate(terminationDate) : defaultDate,
									})}
								</p>
								<p>{t('terminationLetterContent2')}</p>
								<p>{t('terminationLetterContent3')}</p>

								<p>{t('terminationLetterFooter')}</p>

								<p>{t('signatureText')}</p>
								<p className={styles.signatureName}>{employeeName || t('defaultEmployeeName')}</p>
							</div>

							<div className={styles.inputBox}>
								<div className={styles.inputBlock}>
									<input
										id="employeeName"
										className={styles.name}
										type="text"
										value={employeeName}
										onChange={(e) => setEmployeeName(e.target.value)}
										required
										aria-label={t('employeeNamePlaceholder')}
									/>

									{employeeName && (
										<button
											type="button"
											className={styles.clearButton}
											onClick={() => {
												setEmployeeName('');
											}}
											aria-label="Clear employee name"
										>
											<ClearIcon style={{ fontSize: 20 }} />
										</button>
									)}
									<label
										className={`${styles.placeholder} ${employeeName && styles.filledPlaceholder}`}
									>
										{t('employeeNamePlaceholder')}
									</label>
								</div>
								<div className={styles.nameBox}>
									<div className={styles.inputBlock}>
										<input
											id="employeeStreet"
											className={styles.address}
											type="text"
											value={employeeStreet}
											onChange={(e) => setEmployeeStreet(e.target.value)}
											required
											aria-label={t('employeeStreetPlaceholder')}
										/>

										{employeeStreet && (
											<button
												type="button"
												className={styles.clearButton}
												onClick={() => {
													setEmployeeStreet('');
												}}
												aria-label="Clear employee street"
											>
												<ClearIcon style={{ fontSize: 20 }} />
											</button>
										)}
										<label
											className={`${styles.placeholder} ${employeeStreet && styles.filledPlaceholder}`}
										>
											{t('employeeStreetPlaceholder')}
										</label>
									</div>
									<div className={styles.inputBlock}>
										<input
											id="employeeCity"
											className={styles.address}
											type="text"
											value={employeeCity}
											onChange={(e) => setEmployeeCity(e.target.value)}
											required
											aria-label={t('employeeCityPlaceholder')}
										/>

										{employeeCity && (
											<button
												type="button"
												className={styles.clearButton}
												onClick={() => {
													setEmployeeCity('');
												}}
												aria-label="Clear employee city"
											>
												<ClearIcon style={{ fontSize: 20 }} />
											</button>
										)}
										<label
											className={`${styles.placeholder} ${employeeCity && styles.filledPlaceholder}`}
										>
											{t('employeeCityPlaceholder')}
										</label>
									</div>
								</div>

								<div className={styles.inputBlock}>
									<input
										id="companyName"
										className={styles.name}
										type="text"
										value={companyName}
										onChange={(e) => setCompanyName(e.target.value)}
										required
										aria-label={t('companyNamePlaceholder')}
									/>

									{companyName && (
										<button
											type="button"
											className={styles.clearButton}
											onClick={() => {
												setCompanyName('');
											}}
											aria-label="Clear company name"
										>
											<ClearIcon style={{ fontSize: 20 }} />
										</button>
									)}
									<label
										className={`${styles.placeholder} ${companyName && styles.filledPlaceholder}`}
									>
										{t('companyNamePlaceholder')}
									</label>
								</div>
								<div className={styles.nameBox}>
									<div className={styles.inputBlock}>
										<input
											id="companyStreet"
											className={styles.address}
											type="text"
											value={companyStreet}
											onChange={(e) => setCompanyStreet(e.target.value)}
											required
											aria-label={t('companyStreetPlaceholder')}
										/>

										{companyStreet && (
											<button
												type="button"
												className={styles.clearButton}
												onClick={() => {
													setCompanyStreet('');
												}}
												aria-label="Clear company street"
											>
												<ClearIcon style={{ fontSize: 20 }} />
											</button>
										)}
										<label
											className={`${styles.placeholder} ${companyStreet && styles.filledPlaceholder}`}
										>
											{t('companyStreetPlaceholder')}
										</label>
									</div>
									<div className={styles.inputBlock}>
										<input
											className={styles.address}
											type="text"
											value={companyCity}
											onChange={(e) => setCompanyCity(e.target.value)}
											required
											aria-label={t('companyCityPlaceholder')}
										/>
										{companyCity && (
											<button
												type="button"
												className={styles.clearButton}
												onClick={() => {
													setCompanyCity('');
												}}
												aria-label="Clear company city"
											>
												<ClearIcon style={{ fontSize: 20 }} />
											</button>
										)}
										<label
											className={`${styles.placeholder} ${companyCity && styles.filledPlaceholder}`}
										>
											{t('companyCityPlaceholder')}
										</label>
									</div>
								</div>
								<div className={styles.inputBlock}>
									<input
										className={styles.date}
										type="date"
										value={terminationDate}
										onChange={(e) => setTerminationDate(e.target.value)}
										required
										aria-label={t('terminationDatePlaceholder')}
									/>
									<span className={styles.placeholderDate}>{t('terminationDatePlaceholder')}</span>
								</div>
								<div className={styles.nameBox}>
									<select
										id="supervisorGender"
										className={styles.genderBox}
										value={supervisorGender}
										onChange={(e) => setSupervisorGender(e.target.value)}
										aria-label={t('selectGenderLabel')}
									>
										<option value="male">{t('male')}</option>
										<option value="female">{t('female')}</option>
										<option value="neutral">{t('neutral')}</option>
									</select>
									<div className={styles.inputBlock}>
										<input
											className={styles.name}
											type="text"
											value={supervisorName}
											onChange={(e) => setSupervisorName(e.target.value)}
											required
											aria-label={t('supervisorNamePlaceholder')}
										/>
										{supervisorName && (
											<button
												type="button"
												className={styles.clearButton}
												onClick={() => {
													setSupervisorName('');
													setSupervisorGender('');
												}}
												aria-label="Clear supervisor name and gender"
											>
												<ClearIcon style={{ fontSize: 20 }} />
											</button>
										)}
										<label
											className={`${styles.placeholder} ${supervisorName && styles.filledPlaceholder}`}
										>
											{t('supervisorNamePlaceholder')}
										</label>
									</div>
								</div>

								<div className={styles.inputBlock}>
									<input
										className={styles.date}
										type="date"
										value={letterDate}
										onChange={(e) => setLetterDate(e.target.value)}
										required
										aria-label={t('letterDatePlaceholder')}
									/>
									<span className={styles.placeholderDate}>{t('letterDatePlaceholder')}</span>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.template}>
						<div className={styles.contextReviewsWrapper2}>
							<div className={styles.letter}>
								<p>
									{employeeName || t('defaultEmployeeName', { lng: translationLanguage })}
									<br />
									{employeeStreet || t('defaultEmployeeStreet', { lng: translationLanguage })}
									<br />
									{employeeCity || t('defaultEmployeeCity', { lng: translationLanguage })}
								</p>
								<p>
									{companyName || t('defaultCompanyName', { lng: translationLanguage })}
									<br />
									{companyStreet || t('defaultCompanyStreet', { lng: translationLanguage })}
									<br />
									{companyCity || t('defaultCompanyCity', { lng: translationLanguage })}
								</p>
								<p>{letterDate ? formatDate(letterDate) : defaultDate}</p>

								<p>
									<strong>{t('terminationLetterHeader', { lng: translationLanguage })}</strong>
								</p>
								<p>
									{supervisorGender === 'male'
										? t('dearWithNameMale', {
												lng: translationLanguage,
												name:
													supervisorName ||
													t('defaultSupervisorName', { lng: translationLanguage }),
											})
										: supervisorGender === 'female'
											? t('dearWithNameFemale', {
													lng: translationLanguage,
													name:
														supervisorName ||
														t('defaultSupervisorName', { lng: translationLanguage }),
												})
											: t('dearWithNamePlural', {
													lng: translationLanguage,
												})}
								</p>
								<p>
									{t('terminationLetterContent1', {
										lng: translationLanguage,
										terminationDate: terminationDate ? formatDate(terminationDate) : defaultDate,
									})}
								</p>
								<p>{t('terminationLetterContent2', { lng: translationLanguage })}</p>
								<p>{t('terminationLetterContent3', { lng: translationLanguage })}</p>

								<p>{t('terminationLetterFooter', { lng: translationLanguage })}</p>

								<p>{t('signatureText', { lng: translationLanguage })}</p>
								<p className={styles.signatureName}>
									{employeeName || t('defaultEmployeeName', { lng: translationLanguage })}
								</p>
							</div>
						</div>
						<div className={styles.buttonContainer}>
							<button
								type="button"
								className={styles.buttonLanguage}
								onClick={() => setTranslationLanguage('de')}
							>
								{t('german')}
							</button>
							<button
								type="button"
								className={styles.buttonLanguage}
								onClick={() => setTranslationLanguage('en')}
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
					<label htmlFor="agreementCheckbox">{t('agreeToTermsEmployment')}</label>
				</div>

				<div className={styles.buttonDownload}>
					<PDFDownloadLink
						document={<PDFTerminationEmploymentRelationship {...pdfProps} />}
						fileName="termination_EmploymentRelationship.pdf"
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
										} else if (!('download' in document.createElement('a'))) {
											alert(
												'Your browser does not support automatic download. The file will open in a new tab.'
											);
										} else {
											const anchor = e.target as HTMLAnchorElement;
											anchor.setAttribute('download', 'termination_EmploymentRelationship.pdf');
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
					<p className={styles.title}>{t('terminationEmploymentTitleText')}</p>
					<p className={styles.letterSubtitle}>{t('terminationEmploymentTextSubtitle')}</p>
					<p className={styles.letterSubtitle2}>{t('terminationEmploymentTextSubtitle2')}</p>

					<div className={styles.letterParagraph}>
						{Array.from({ length: 3 }, (_, i) => (
							<React.Fragment key={i}>
								<p className={styles.text}>
									<span className={styles.firstWord}>
										{t(`terminationEmploymentTitleParagraph${i + 2}`)}
									</span>
									<br />
									<span className={styles.restOfSentence}>
										{t(`terminationEmploymentParagraph${i + 2}`)}
									</span>
								</p>
							</React.Fragment>
						))}
						<p className={styles.text}>
							<ul>
								<li className={styles.firstWordLi}>
									{t('terminationEmploymentInfo1')}{' '}
									<span className={styles.restOfSentenceInfo}>
										{t('terminationEmploymentInfo1.1')}
									</span>
								</li>
								<li className={styles.firstWordLi}>
									{t('terminationEmploymentInfo2')}{' '}
									<span className={styles.restOfSentenceInfo}>
										{t('terminationEmploymentInfo2.2')}
									</span>
								</li>
							</ul>
						</p>
						<p className={styles.text}>
							<span className={styles.firstWord}>{t('terminationEmploymentTitleParagraph5')}</span>
							<br />
							<span className={styles.restOfSentence}>{t('terminationEmploymentParagraph5')}</span>
						</p>
						<p className={styles.text}>
							<span className={styles.firstWord}>{t('terminationEmploymentTitleParagraph6')}</span>
							<br />
							<span className={styles.restOfSentence}>{t('terminationEmploymentParagraph6')}</span>
						</p>
					</div>
				</div>
				<div className={styles.bannerContainer}>
					<TerminationEmploymentRelationshipTipsBanner />
				</div>
				<div className={styles.bannerContainer}>
					<BannerAdobeReader />
				</div>
			</div>
		</div>
	);
}

export default EmploymentRelationship;
