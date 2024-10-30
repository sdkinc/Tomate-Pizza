// eslint-disable-next-line import/default
import React, { useState } from 'react';
import styles from './terminationMobilePhone.module.css';
import ClearIcon from '@mui/icons-material/Clear';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';
import BannerAdobeReader from '../banner/BannerAdobeReader';
import PDFTerminationMobilePhone from './PDFTermination/PDFTerminationMobilePhone';
import TerminationMobilePhoneTipsBanner from '../tips/TerminationMobilePhoneTipsBanner';

function TerminationMobilePhone(): JSX.Element {
	const { t } = useTranslation();
	const [memberName, setMemberName] = useState('');
	const [memberStreet, setMemberStreet] = useState('');
	const [memberCity, setMemberCity] = useState('');
	const [membershipNumber, setMembershipNumber] = useState('');
	const [companyName, setCompanyName] = useState('');
	const [companyStreet, setCompanyStreet] = useState('');
	const [companyCity, setCompanyCity] = useState('');
	const [mobilePhoneNumber, setMobilePhoneNumber] = useState('');
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
		header: t('terminationMobilePhoneHeader', { lng: translationLanguage }),
		greeting: t('dearWithNamePlural', { lng: translationLanguage }),
		membershipNumber: `${t('contractNumber', { lng: translationLanguage })} ${membershipNumber || t('defaultContractNumber', { lng: translationLanguage })}`,
		bodyPart1: t('terminationMobilePhoneContent1', {
			lng: translationLanguage,
			mobilePhoneNumber:
				mobilePhoneNumber || t('defaultMobilePhoneNumber', { lng: translationLanguage }),
		}),
		bodyPart2: t('terminationMobilePhoneContent2', { lng: translationLanguage }),
		signature: t('signatureText', { lng: translationLanguage }),
		memberName: memberName || t('defaultMobilePhoneMemberName', { lng: translationLanguage }),
		memberStreet: memberStreet || t('defaultMobilePhoneMemberStreet', { lng: translationLanguage }),
		memberCity: memberCity || t('defaultMobilePhoneMemberCity', { lng: translationLanguage }),
		companyName: companyName || t('defaultMobilePhoneCompanyName', { lng: translationLanguage }),
		companyStreet:
			companyStreet || t('defaultMobilePhoneCompanyStreet', { lng: translationLanguage }),
		companyCity: companyCity || t('defaultMobilePhoneCompanyCity', { lng: translationLanguage }),
		dateText: letterDate ? formatDate(letterDate) : defaultDate,
	};

	return (
		<div className={styles.terminationLetterBox}>
			<h1 className={styles.titlePage}>{t('terminationMobilePhoneTitle')}</h1>
			<p className={styles.subtitlePage}>{t('terminationMobilePhoneSubtitle')}</p>
			<div className={styles.mainContainer}>
				<div className={styles.flexContainer}>
					<div className={styles.template}>
						<div className={styles.contextReviewsWrapper1}>
							<div className={styles.letter}>
								<p>
									{memberName || t('defaultMobilePhoneMemberName')}
									<br />
									{memberStreet || t('defaultMobilePhoneMemberStreet')}
									<br />
									{memberCity || t('defaultMobilePhoneMemberCity')}
								</p>
								<p>
									{companyName || t('defaultMobilePhoneCompanyName')}
									<br />
									{companyStreet || t('defaultMobilePhoneCompanyStreet')}
									<br />
									{companyCity || t('defaultMobilePhoneCompanyCity')}
								</p>
								<p>{letterDate ? formatDate(letterDate) : defaultDate}</p>

								<p>
									<strong>{t('terminationMobilePhoneHeader')}</strong>
									<br />
									<strong>
										{t('contractNumber')} {membershipNumber || t('defaultContractNumber')}
									</strong>
								</p>

								<p>{t('dearWithNamePlural')}</p>
								<p>
									{t('terminationMobilePhoneContent1', {
										mobilePhoneNumber: mobilePhoneNumber || t('defaultMobilePhoneNumber'),
									})}
								</p>

								<p>{t('terminationMobilePhoneContent2')}</p>
								<p>{t('signatureText')}</p>
								<p className={styles.signatureName}>
									{memberName || t('defaultMobilePhoneMemberName')}
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
											aria-label={t('memberNamePlaceholder')}
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
											{t('memberNameMobilePhonePlaceholder')}
										</label>
									</div>
									<div className={styles.inputBlock}>
										<input
											id="membershipNumber"
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
											{t('contractNumberPlaceholder')}
										</label>
									</div>
								</div>
								<div className={styles.nameBox}>
									<div className={styles.inputBlock}>
										<input
											id="memberStreet"
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
											{t('memberStreetMobilePhonePlaceholder')}
										</label>
									</div>
									<div className={styles.inputBlock}>
										<input
											id="memberCity"
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
											{t('memberCityMobilePhonePlaceholder')}
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
										{t('mobilePhoneCompanyNamePlaceholder')}
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
											{t('mobilePhoneCompanyStreetPlaceholder')}
										</label>
									</div>

									<div className={styles.inputBlock}>
										<input
											id="companyCity"
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
											{t('mobilePhoneCompanyCityPlaceholder')}
										</label>
									</div>
								</div>
								<div className={styles.inputBlock}>
									<input
										id="mobilePhoneNumber"
										className={styles.address}
										type="text"
										value={mobilePhoneNumber}
										onChange={(e) => setMobilePhoneNumber(e.target.value)}
										required
										aria-label={t('mobilePhoneNumberPlaceholder')}
									/>

									{mobilePhoneNumber && (
										<button
											type="button"
											className={styles.clearButton}
											onClick={() => {
												setMobilePhoneNumber('');
											}}
											aria-label="Clear mobile phone number"
										>
											<ClearIcon style={{ fontSize: 20 }} />
										</button>
									)}
									<label
										className={`${styles.placeholder} ${mobilePhoneNumber && styles.filledPlaceholder}`}
									>
										{t('terminationMobilePhoneNumberPlaceholder')}
									</label>
								</div>

								<div className={styles.inputBlock}>
									<input
										id="letterDate"
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
									{memberName || t('defaultMobilePhoneMemberName', { lng: translationLanguage })}
									<br />
									{memberStreet ||
										t('defaultMobilePhoneMemberStreet', { lng: translationLanguage })}
									<br />
									{memberCity || t('defaultMobilePhoneMemberCity', { lng: translationLanguage })}
								</p>
								<p>
									{companyName || t('defaultMobilePhoneCompanyName', { lng: translationLanguage })}
									<br />
									{companyStreet ||
										t('defaultMobilePhoneCompanyStreet', { lng: translationLanguage })}
									<br />
									{companyCity || t('defaultMobilePhoneCompanyCity', { lng: translationLanguage })}
								</p>
								<p>{letterDate ? formatDate(letterDate) : defaultDate}</p>

								<p>
									<strong>{t('terminationMobilePhoneHeader', { lng: translationLanguage })}</strong>
									<br />
									<strong>
										{t('contractNumber', { lng: translationLanguage })}{' '}
										{membershipNumber || t('defaultContractNumber', { lng: translationLanguage })}
									</strong>
								</p>
								<p>{t('dearWithNamePlural', { lng: translationLanguage })}</p>
								<p>
									{t('terminationMobilePhoneContent1', {
										lng: translationLanguage,
										mobilePhoneNumber: mobilePhoneNumber || t('defaultMobilePhoneNumber'),
									})}
								</p>
								<p>{t('terminationMobilePhoneContent2', { lng: translationLanguage })}</p>
								<p>{t('signatureText', { lng: translationLanguage })}</p>
								<p className={styles.signatureName}>
									{memberName || t('defaultMobilePhoneMemberName', { lng: translationLanguage })}
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
						document={<PDFTerminationMobilePhone {...pdfProps} />}
						fileName="mobilePhone_termination.pdf"
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
											anchor.setAttribute('download', 'mobilePhone_termination.pdf');
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
					<p className={styles.title}>{t('terminationMobilePhoneTitleText')}</p>
					<p className={styles.letterSubtitle}>{t('terminationMobilePhoneTextSubtitle')}</p>
					<p className={styles.letterSubtitle2}>{t('terminationMobilePhoneTextSubtitle2')}</p>

					<div className={styles.letterParagraph}>
						{Array.from({ length: 3 }, (_, i) => (
							<React.Fragment key={i}>
								<p className={styles.text}>
									<span className={styles.firstWord}>
										{t(`terminationMobilePhoneTitleParagraph${i + 2}`)}
									</span>
									<br />
									<span className={styles.restOfSentence}>
										{t(`terminationMobilePhoneParagraph${i + 2}`)}
									</span>
								</p>
							</React.Fragment>
						))}
						<ul>
							<li className={styles.restOfSentence}>{t('terminationMobilePhoneInfo1')}</li>
							<li className={styles.restOfSentence}>{t('terminationMobilePhoneInfo2')}</li>
							<li className={styles.restOfSentence}>{t('terminationMobilePhoneInfo3')}</li>
						</ul>
						<p className={styles.text}>
							<span className={styles.firstWord}>{t('terminationMobilePhoneTitleParagraph5')}</span>
							<br />
							<span className={styles.restOfSentence}>{t('terminationMobilePhoneParagraph5')}</span>
						</p>
						<ul>
							<li className={styles.restOfSentence}>{t('terminationMobilePhoneInfo4')}</li>
							<li className={styles.restOfSentence}>{t('terminationMobilePhoneInfo5')}</li>
						</ul>
						<p className={styles.text}>
							<span className={styles.firstWord}>{t('terminationMobilePhoneTitleParagraph6')}</span>
							<br />
							<span className={styles.restOfSentence}>{t('terminationMobilePhoneParagraph6')}</span>
						</p>
					</div>
				</div>
				<div className={styles.bannerContainer}>
					<TerminationMobilePhoneTipsBanner />
				</div>
				<div className={styles.bannerContainer}>
					<BannerAdobeReader />
				</div>
			</div>
		</div>
	);
}
export default TerminationMobilePhone;
