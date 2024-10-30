// eslint-disable-next-line import/default
import React, { useState } from 'react';
import styles from './terminationApartment.module.css';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';
import BannerAdobeReader from '../banner/BannerAdobeReader';
import ClearIcon from '@mui/icons-material/Clear';
import PDFTerminationApartment from './PDFTermination/PDFTerminationApartment';
import TerminationApartmentTipsBanner from '../tips/TerminationApartmentTipsBanner';

function TerminationApartment(): JSX.Element {
	const { t } = useTranslation();
	const [renterName, setRenterName] = useState('');
	const [renterStreet, setRenterStreet] = useState('');
	const [renterCity, setRenterCity] = useState('');
	const [landlordName, setLandlordName] = useState('');
	const [landlordStreet, setLandlordStreet] = useState('');
	const [landlordCity, setLandlordCity] = useState('');
	const [terminationDate, setTerminationDate] = useState('');
	const [letterDate, setLetterDate] = useState('');
	const [isAgreed, setIsAgreed] = useState(false);
	const [landlordGender, setLandlordGender] = useState('male');

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
			landlordGender === 'male' || landlordGender === 'female'
				? t(`dearWithName${landlordGender.charAt(0).toUpperCase() + landlordGender.slice(1)}`, {
						lng: translationLanguage,
						name: landlordName || t('defaultLandlordName', { lng: translationLanguage }),
					})
				: t('dearWithNamePlural', {
						lng: translationLanguage,
						name: landlordName || t('defaultLandlordName', { lng: translationLanguage }),
					}),

		bodyPart1: t('terminationApartmentLetterContent1', { lng: translationLanguage }),
		bodyPart2: t('terminationApartmentLetterContent2', {
			lng: translationLanguage,
			terminationDate: terminationDate ? formatDate(terminationDate) : defaultDate,
		}),
		bodyPart3: t('terminationApartmentLetterContent3', { lng: translationLanguage }),
		signature: t('signatureText', { lng: translationLanguage }),
		renterName: renterName || t('defaultRenterName', { lng: translationLanguage }),
		renterStreet: renterStreet || t('defaultRenterStreet', { lng: translationLanguage }),
		renterCity: renterCity || t('defaultRenterCity', { lng: translationLanguage }),
		landlordName: landlordName || t('defaultLandlordName', { lng: translationLanguage }),
		landlordStreet: landlordStreet || t('defaultLandlordStreet', { lng: translationLanguage }),
		landlordCity: landlordCity || t('defaultLandlordCity', { lng: translationLanguage }),
		dateText: letterDate ? formatDate(letterDate) : defaultDate,
	};

	return (
		<div className={styles.terminationLetterBox}>
			<h1 className={styles.titlePage}>{t('terminationApartmentLetterTitle')}</h1>
			<p className={styles.subtitlePage}>{t('terminationApartmentLetterSubtitle')}</p>
			<div className={styles.mainContainer}>
				<div className={styles.flexContainer}>
					<div className={styles.template}>
						<div className={styles.contextReviewsWrapper1}>
							<div className={styles.letter}>
								<p>
									{renterName || t('defaultRenterName')}
									<br />
									{renterStreet || t('defaultRenterStreet')}
									<br />
									{renterCity || t('defaultRenterCity')}
								</p>
								<p>
									{landlordName || t('defaultLandlordName')}
									<br />
									{landlordStreet || t('defaultLandlordStreet')}
									<br />
									{landlordCity || t('defaultLandlordCity')}
								</p>
								<p>{letterDate ? formatDate(letterDate) : defaultDate}</p>

								<p>
									<strong>{t('terminationApartmentLetterHeader')}</strong>
								</p>
								<p>
									{landlordGender === 'male'
										? t('dearWithNameMale', { name: landlordName || t('defaultLandlordName') })
										: landlordGender === 'female'
											? t('dearWithNameFemale', {
													name: landlordName || t('defaultLandlordName'),
												})
											: t('dearWithNamePlural')}
								</p>

								<p>{t('terminationApartmentLetterContent1')}</p>
								<p>
									{t('terminationApartmentLetterContent2', {
										terminationDate: terminationDate ? formatDate(terminationDate) : defaultDate,
									})}
								</p>
								<p>{t('terminationApartmentLetterContent3')}</p>

								<p>{t('signatureText')}</p>
								<p className={styles.signatureName}>{renterName || t('defaultRenterName')}</p>
							</div>

							<div className={styles.inputBox}>
								<div className={styles.inputBlock}>
									<input
										id="renterName"
										className={styles.name}
										type="text"
										value={renterName}
										onChange={(e) => setRenterName(e.target.value)}
										required
										aria-label={t('renterNamePlaceholder')}
									/>

									{renterName && (
										<button
											type="button"
											className={styles.clearButton}
											onClick={() => {
												setRenterName('');
											}}
											aria-label="Clear renter name"
										>
											<ClearIcon style={{ fontSize: 20 }} />
										</button>
									)}
									<label
										className={`${styles.placeholder} ${renterName && styles.filledPlaceholder}`}
									>
										{t('renterNamePlaceholder')}
									</label>
								</div>
								<div className={styles.nameBox}>
									<div className={styles.inputBlock}>
										<input
											id="renterStreet"
											className={styles.address}
											type="text"
											value={renterStreet}
											onChange={(e) => setRenterStreet(e.target.value)}
											required
											aria-label={t('renterStreetPlaceholder')}
										/>

										{renterStreet && (
											<button
												type="button"
												className={styles.clearButton}
												onClick={() => {
													setRenterStreet('');
												}}
												aria-label="Clear renter street"
											>
												<ClearIcon style={{ fontSize: 20 }} />
											</button>
										)}
										<label
											className={`${styles.placeholder} ${renterStreet && styles.filledPlaceholder}`}
										>
											{t('renterStreetPlaceholder')}
										</label>
									</div>
									<div className={styles.inputBlock}>
										<input
											id="renterCity"
											className={styles.address}
											type="text"
											value={renterCity}
											onChange={(e) => setRenterCity(e.target.value)}
											required
											aria-label={t('renterCityPlaceholder')}
										/>

										{renterCity && (
											<button
												type="button"
												className={styles.clearButton}
												onClick={() => {
													setRenterCity('');
												}}
												aria-label="Clear renter city"
											>
												<ClearIcon style={{ fontSize: 20 }} />
											</button>
										)}
										<label
											className={`${styles.placeholder} ${renterCity && styles.filledPlaceholder}`}
										>
											{t('renterCityPlaceholder')}
										</label>
									</div>
								</div>
								<div className={styles.nameBox}>
									<div className={styles.inputBlock}>
										<select
											className={styles.name}
											value={landlordGender}
											onChange={(e) => setLandlordGender(e.target.value)}
											aria-label={t('landlordGenderPlaceholder')}
										>
											<option value="male">{t('male')}</option>
											<option value="female">{t('female')}</option>
											<option value="neutral">{t('neutral')}</option>
										</select>
									</div>
									<div className={styles.inputBlock}>
										<input
											id="landlordName"
											className={styles.name}
											type="text"
											value={landlordName}
											onChange={(e) => setLandlordName(e.target.value)}
											required
											aria-label={t('landlordNamePlaceholder')}
										/>

										{landlordName && (
											<button
												type="button"
												className={styles.clearButton}
												onClick={() => {
													setLandlordName('');
													setLandlordGender('');
												}}
												aria-label="Clear landlord name and gender"
											>
												<ClearIcon style={{ fontSize: 20 }} />
											</button>
										)}
										<label
											className={`${styles.placeholder} ${landlordName && styles.filledPlaceholder}`}
										>
											{t('landlordNamePlaceholder')}
										</label>
									</div>
								</div>

								<div className={styles.nameBox}>
									<div className={styles.inputBlock}>
										<input
											id="landlordStreet"
											className={styles.address}
											type="text"
											value={landlordStreet}
											onChange={(e) => setLandlordStreet(e.target.value)}
											required
											aria-label={t('landlordStreetPlaceholder')}
										/>

										{landlordStreet && (
											<button
												type="button"
												className={styles.clearButton}
												onClick={() => {
													setLandlordStreet('');
												}}
												aria-label="Clear landlord street"
											>
												<ClearIcon style={{ fontSize: 20 }} />
											</button>
										)}
										<label
											className={`${styles.placeholder} ${landlordStreet && styles.filledPlaceholder}`}
										>
											{t('landlordStreetPlaceholder')}
										</label>
									</div>
									<div className={styles.inputBlock}>
										<input
											id="landlordCity"
											className={styles.address}
											type="text"
											value={landlordCity}
											onChange={(e) => setLandlordCity(e.target.value)}
											required
											aria-label={t('landlordCityPlaceholder')}
										/>

										{landlordCity && (
											<button
												type="button"
												className={styles.clearButton}
												onClick={() => {
													setLandlordCity('');
												}}
												aria-label="Clear landlord city"
											>
												<ClearIcon style={{ fontSize: 20 }} />
											</button>
										)}
										<label
											className={`${styles.placeholder} ${landlordCity && styles.filledPlaceholder}`}
										>
											{t('landlordCityPlaceholder')}
										</label>
									</div>
								</div>
								<div className={styles.inputBlock}>
									<input
										id="terminationDate"
										className={styles.date}
										type="date"
										value={terminationDate}
										onChange={(e) => setTerminationDate(e.target.value)}
										required
										aria-label={t('terminationDatePlaceholder')}
									/>
									<span className={styles.placeholderDate}>{t('terminationDatePlaceholder')}</span>
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
									{renterName || t('defaultRenterName', { lng: translationLanguage })}
									<br />
									{renterStreet || t('defaultRenterStreet', { lng: translationLanguage })}
									<br />
									{renterCity || t('defaultRenterCity', { lng: translationLanguage })}
								</p>
								<p>
									{landlordName || t('defaultLandlordName', { lng: translationLanguage })}
									<br />
									{landlordStreet || t('defaultLandlordStreet', { lng: translationLanguage })}
									<br />
									{landlordCity || t('defaultLandlordCity', { lng: translationLanguage })}
								</p>
								<p>{letterDate ? formatDate(letterDate) : defaultDate}</p>

								<p>
									<strong>
										{t('terminationApartmentLetterHeader', { lng: translationLanguage })}
									</strong>
								</p>
								<p>
									{landlordGender === 'male'
										? t('dearWithNameMale', {
												lng: translationLanguage,
												name:
													landlordName || t('defaultLandlordName', { lng: translationLanguage }),
											})
										: landlordGender === 'female'
											? t('dearWithNameFemale', {
													lng: translationLanguage,
													name:
														landlordName || t('defaultLandlordName', { lng: translationLanguage }),
												})
											: t('dearWithNamePlural', {
													lng: translationLanguage,
												})}
								</p>

								<p>{t('terminationApartmentLetterContent1', { lng: translationLanguage })}</p>
								<p>
									{t('terminationApartmentLetterContent2', {
										lng: translationLanguage,
										terminationDate: terminationDate ? formatDate(terminationDate) : defaultDate,
									})}
								</p>
								<p>{t('terminationApartmentLetterContent3', { lng: translationLanguage })}</p>

								<p>{t('signatureText', { lng: translationLanguage })}</p>
								<p className={styles.signatureName}>
									{renterName || t('defaultRenterName', { lng: translationLanguage })}
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
						document={<PDFTerminationApartment {...pdfProps} />}
						fileName="termination_apartment.pdf"
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
											anchor.setAttribute('download', 'termination_apartment.pdf');
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
					<p className={styles.title}>{t('terminationApartmentTitleText')}</p>
					<p className={styles.letterSubtitle}>{t('terminationApartmentTextSubtitle')}</p>
					<p className={styles.letterSubtitle2}>{t('terminationApartmentTextSubtitle2')}</p>

					<div className={styles.letterParagraph}>
						{Array.from({ length: 2 }, (_, i) => (
							<React.Fragment key={i}>
								<p className={styles.text}>
									<span className={styles.firstWord}>
										{t(`terminationApartmentTitleParagraph${i + 2}`)}
									</span>
									<br />
									<span className={styles.restOfSentence}>
										{t(`terminationApartmentParagraph${i + 2}`)}
									</span>
								</p>
							</React.Fragment>
						))}
						<p className={styles.text}>
							<span className={styles.firstWord}>{t('terminationApartmentTitleParagraph4')}</span>
						</p>
						<p className={styles.text}>
							<ul>
								<li className={styles.firstWord}>
									{t('terminationApartmentInfo1')}{' '}
									<span className={styles.restOfSentenceInfo}>
										{t('terminationApartmentInfo1.1')}
									</span>
								</li>
								<li className={styles.firstWord}>
									{t('terminationApartmentInfo2')}{' '}
									<span className={styles.restOfSentenceInfo}>
										{t('terminationApartmentInfo2.2')}
									</span>
								</li>
							</ul>
						</p>
						<p className={styles.text}>
							<span className={styles.firstWord}>{t('terminationApartmentTitleParagraph5')}</span>
							<br />
							<span className={styles.restOfSentence}>{t('terminationApartmentParagraph5')}</span>
						</p>
						<p className={styles.text}>
							<span className={styles.firstWord}>{t('terminationApartmentTitleParagraph6')}</span>
							<br />
							<span className={styles.restOfSentence}>{t('terminationApartmentParagraph6')}</span>
						</p>
					</div>
				</div>
				<div className={styles.bannerContainer}>
					<TerminationApartmentTipsBanner />
				</div>
				<div className={styles.bannerContainer}>
					<BannerAdobeReader />
				</div>
			</div>
		</div>
	);
}
export default TerminationApartment;
