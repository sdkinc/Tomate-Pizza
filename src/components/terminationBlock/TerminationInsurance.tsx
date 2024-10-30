// eslint-disable-next-line import/default
import React, { useState } from 'react';
import styles from './terminationInsurance.module.css';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';
import BannerAdobeReader from '../banner/BannerAdobeReader';
import ClearIcon from '@mui/icons-material/Clear';
import TerminationInsuranceTipsBanner from '../tips/TerminationInsuranceTipsBanner';
import PDFTerminationInsurance from './PDFTermination/PDFTerminationFitness';

function TerminationInsurance(): JSX.Element {
	const { t } = useTranslation();
	const [memberName, setMemberName] = useState('');
	const [memberStreet, setMemberStreet] = useState('');
	const [memberCity, setMemberCity] = useState('');
	const [membershipNumber, setMembershipNumber] = useState('');
	const [companyName, setCompanyName] = useState('');
	const [companyStreet, setCompanyStreet] = useState('');
	const [companyCity, setCompanyCity] = useState('');
	const [terminationDate, setTerminationDate] = useState('');
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
		header: t('terminationInsuranceHeader', { lng: translationLanguage }),
		greeting: t('dearWithNamePlural', { lng: translationLanguage }),
		membershipNumber: `${t('policyNumber', { lng: translationLanguage })} ${membershipNumber || t('defaultPolicyNumber', { lng: translationLanguage })}`,
		bodyPart1: t('terminationInsuranceContent1', {
			lng: translationLanguage,
			terminationDate: terminationDate ? formatDate(terminationDate) : defaultDate,
		}),
		bodyPart2: t('terminationInsuranceContent2', { lng: translationLanguage }),
		signature: t('signatureText', { lng: translationLanguage }),
		memberName: memberName || t('defaultInsuranceMemberName', { lng: translationLanguage }),
		memberStreet: memberStreet || t('defaultInsuranceMemberStreet', { lng: translationLanguage }),
		memberCity: memberCity || t('defaultInsuranceMemberCity', { lng: translationLanguage }),
		companyName: companyName || t('defaultInsuranceCompanyName', { lng: translationLanguage }),
		companyStreet:
			companyStreet || t('defaultInsuranceCompanyStreet', { lng: translationLanguage }),
		companyCity: companyCity || t('defaultInsuranceCompanyCity', { lng: translationLanguage }),
		dateText: letterDate ? formatDate(letterDate) : defaultDate,
	};

	return (
		<div className={styles.terminationLetterBox}>
			<h1 className={styles.titlePage}>{t('terminationInsuranceTitle')}</h1>
			<p className={styles.subtitlePage}>{t('terminationInsuranceSubtitle')}</p>
			<div className={styles.mainContainer}>
				<div className={styles.flexContainer}>
					<div className={styles.template}>
						<div className={styles.contextReviewsWrapper1}>
							<div className={styles.letter}>
								<p>
									{memberName || t('defaultInsuranceMemberName')}
									<br />
									{memberStreet || t('defaultInsuranceMemberStreet')}
									<br />
									{memberCity || t('defaultInsuranceMemberCity')}
								</p>
								<p>
									{companyName || t('defaultInsuranceCompanyName')}
									<br />
									{companyStreet || t('defaultInsuranceCompanyStreet')}
									<br />
									{companyCity || t('defaultInsuranceCompanyCity')}
								</p>
								<p>{letterDate ? formatDate(letterDate) : defaultDate}</p>

								<p>
									<strong>{t('terminationInsuranceHeader')}</strong>
									<br />
									<strong>
										{t('policyNumber')} {membershipNumber || t('defaultPolicyNumber')}
									</strong>
								</p>

								<p>{t('dearWithNamePlural')}</p>
								<p>
									{t('terminationInsuranceContent1', {
										terminationDate: terminationDate ? formatDate(terminationDate) : defaultDate,
									})}
								</p>
								<p>{t('terminationInsuranceContent2')}</p>
								<p>{t('signatureText')}</p>
								<p className={styles.signatureName}>
									{memberName || t('defaultInsuranceMemberName')}
								</p>
							</div>

							<div className={styles.inputBox}>
								<div className={styles.nameBox}>
									<div className={styles.inputBlock}>
										<input
											id="memberName"
											className={styles.name}
											type="text"
											value={memberName}
											onChange={(e) => setMemberName(e.target.value)}
											required
											aria-label={t('memberNameInsurancePlaceholder')}
										/>
										{memberName && (
											<button
												type="button"
												className={styles.clearButton}
												onClick={() => {
													setMemberName('');
												}}
												aria-label="Clear member name"
											>
												<ClearIcon style={{ fontSize: 20 }} />
											</button>
										)}
										<label
											className={`${styles.placeholder} ${memberName && styles.filledPlaceholder}`}
										>
											{t('memberNameInsurancePlaceholder')}
										</label>
									</div>
									<div className={styles.inputBlock}>
										<input
											className={styles.name}
											type="text"
											value={membershipNumber}
											onChange={(e) => setMembershipNumber(e.target.value)}
											required
											aria-label={t('membershipNumberPlaceholder')}
										/>
										{membershipNumber && (
											<button
												type="button"
												className={styles.clearButton}
												onClick={() => {
													setMembershipNumber('');
												}}
												aria-label="Clear membership number"
											>
												<ClearIcon style={{ fontSize: 20 }} />
											</button>
										)}
										<label
											className={`${styles.placeholder} ${membershipNumber && styles.filledPlaceholder}`}
										>
											{t('policyNumberPlaceholder')}
										</label>
									</div>
								</div>
								<div className={styles.nameBox}>
									<div className={styles.inputBlock}>
										<input
											className={styles.address}
											type="text"
											value={memberStreet}
											onChange={(e) => setMemberStreet(e.target.value)}
											required
											aria-label={t('memberStreetPlaceholder')}
										/>

										{memberStreet && (
											<button
												type="button"
												className={styles.clearButton}
												onClick={() => {
													setMemberStreet('');
												}}
												aria-label="Clear member street"
											>
												<ClearIcon style={{ fontSize: 20 }} />
											</button>
										)}
										<label
											className={`${styles.placeholder} ${memberStreet && styles.filledPlaceholder}`}
										>
											{t('memberStreetInsurancePlaceholder')}
										</label>
									</div>
									<div className={styles.inputBlock}>
										<input
											className={styles.address}
											type="text"
											value={memberCity}
											onChange={(e) => setMemberCity(e.target.value)}
											required
											aria-label={t('memberCityPlaceholder')}
										/>

										{memberCity && (
											<button
												type="button"
												className={styles.clearButton}
												onClick={() => {
													setMemberCity('');
												}}
												aria-label="Clear member city"
											>
												<ClearIcon style={{ fontSize: 20 }} />
											</button>
										)}
										<label
											className={`${styles.placeholder} ${memberCity && styles.filledPlaceholder}`}
										>
											{t('memberCityInsurancePlaceholder')}
										</label>
									</div>
								</div>

								<div className={styles.inputBlock}>
									<input
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
										{t('insuranceCompanyNamePlaceholder')}
									</label>
								</div>

								<div className={styles.nameBox}>
									<div className={styles.inputBlock}>
										<input
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
											{t('insuranceCompanyStreetPlaceholder')}
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
											{t('insuranceCompanyCityPlaceholder')}
										</label>
									</div>
								</div>
								<div className={styles.nameBox}>
									<div className={styles.inputBlock}>
										<input
											className={styles.date}
											type="date"
											value={terminationDate}
											onChange={(e) => setTerminationDate(e.target.value)}
											required
											aria-label={t('terminationDatePlaceholder')}
										/>

										<span className={styles.placeholderDate}>
											{t('terminationInsuranceDatePlaceholder')}
										</span>
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
					</div>

					<div className={styles.template}>
						<div className={styles.contextReviewsWrapper2}>
							<div className={styles.letter}>
								<p>
									{memberName || t('defaultInsuranceMemberName', { lng: translationLanguage })}
									<br />
									{memberStreet || t('defaultInsuranceMemberStreet', { lng: translationLanguage })}
									<br />
									{memberCity || t('defaultInsuranceMemberCity', { lng: translationLanguage })}
								</p>
								<p>
									{companyName || t('defaultInsuranceCompanyName', { lng: translationLanguage })}
									<br />
									{companyStreet ||
										t('defaultInsuranceCompanyStreet', { lng: translationLanguage })}
									<br />
									{companyCity || t('defaultInsuranceCompanyCity', { lng: translationLanguage })}
								</p>
								<p>{letterDate ? formatDate(letterDate) : defaultDate}</p>

								<p>
									<strong>{t('terminationInsuranceHeader', { lng: translationLanguage })}</strong>
									<br />
									<strong>
										{t('policyNumber', { lng: translationLanguage })}
										{membershipNumber || t('defaultPolicyNumber', { lng: translationLanguage })}
									</strong>
								</p>
								<p>{t('dearWithNamePlural', { lng: translationLanguage })}</p>
								<p>
									{t('terminationInsuranceContent1', {
										lng: translationLanguage,
										terminationDate: terminationDate ? formatDate(terminationDate) : defaultDate,
									})}
								</p>
								<p>{t('terminationInsuranceContent2', { lng: translationLanguage })}</p>
								<p>{t('signatureText', { lng: translationLanguage })}</p>
								<p className={styles.signatureName}>
									{memberName || t('defaultInsuranceMemberName', { lng: translationLanguage })}
								</p>
							</div>
						</div>
						<div className={styles.buttonContainer}>
							<button
								className={styles.buttonLanguage}
								onClick={() => setTranslationLanguage('de')}
							>
								{t('german')}
							</button>
							<button
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
						document={<PDFTerminationInsurance {...pdfProps} />}
						fileName="insurance_termination.pdf"
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
											anchor.setAttribute('download', 'insurance_termination.pdf');
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
					<p className={styles.title}>{t('terminationInsuranceTitleText')}</p>
					<p className={styles.letterSubtitle}>{t('terminationInsuranceTextSubtitle')}</p>
					<p className={styles.letterSubtitle2}>{t('terminationInsuranceTextSubtitle2')}</p>

					<div className={styles.letterParagraph}>
						{Array.from({ length: 4 }, (_, i) => (
							<React.Fragment key={i}>
								<p className={styles.text}>
									<span className={styles.firstWord}>
										{t(`terminationInsuranceTitleParagraph${i + 2}`)}
									</span>
									<br />
									<span className={styles.restOfSentence}>
										{t(`terminationInsuranceParagraph${i + 2}`)}
									</span>
								</p>
							</React.Fragment>
						))}
						<ul>
							<li className={styles.restOfSentence}>{t('terminationInsuranceInfo1')}</li>
							<li className={styles.restOfSentence}>{t('terminationInsuranceInfo2')}</li>
							<li className={styles.restOfSentence}>{t('terminationInsuranceInfo3')}</li>
							<li className={styles.restOfSentence}>{t('terminationInsuranceInfo4')}</li>
							<li className={styles.restOfSentence}>{t('terminationInsuranceInfo5')}</li>
						</ul>
						<span className={styles.lastParagraph}>{t('terminationInsuranceParagraph6')}</span>
					</div>
				</div>
				<div className={styles.bannerContainer}>
					<TerminationInsuranceTipsBanner />
				</div>
				<div className={styles.bannerContainer}>
					<BannerAdobeReader />
				</div>
			</div>
		</div>
	);
}
export default TerminationInsurance;
