import { useRef, useState } from 'react';
import styles from './houseRuleRenovation.module.css';
import { useTranslation } from 'react-i18next';
import { toPng } from 'html-to-image';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';

const image = { id: 'party_variant1', src: '/renovation.webp', alt: 'Image 1' };

function HouseRuleRenovation(): JSX.Element {
	const { t, i18n } = useTranslation();
	const [senderName, setSenderName] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [isAgreed, setIsAgreed] = useState(false);
	const [previewLanguage, setPreviewLanguage] = useState('de');
	const previewRef = useRef<HTMLDivElement>(null);

	const formatDate = (dateString: string, language: string): string => {
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		};
		return new Date(dateString).toLocaleDateString(language, options);
	};

	const availableLanguages = [
		{ code: 'de', name: t('german') },
		{ code: 'en', name: t('english') },
		{ code: 'tr', name: t('turkish') },
		{ code: 'ru', name: t('russian') },
		{ code: 'es', name: t('spanish') },
		{ code: 'uk', name: t('ukrainian') },
	];

	const handleSaveAsImage = (): void => {
		if (previewRef.current) {
			const node = previewRef.current;
			const scale = 2;

			toPng(node, {
				width: node.clientWidth * scale,
				height: node.clientHeight * scale,
				style: {
					transform: 'scale(' + scale + ')',
					transformOrigin: 'top left',
					width: node.clientWidth + 'px',
					height: node.clientHeight + 'px',
				},
				quality: 1,
			})
				.then((dataUrl: string) => {
					const link = document.createElement('a');
					link.download = 'movingNotice.png';
					link.href = dataUrl;
					link.click();
				})
				.catch((error: Error) => {
					console.error('Could not generate image', error);
				});
		}
	};

	return (
		<div className={styles.cardsBox}>
			<h1 className={styles.titlePage}>{t('renovationNoticeTitle')}</h1>
			<p className={styles.subtitlePage}>{t('renovationNoticeSubtitle')}</p>
			<div className={styles.mainContainer}>
				<div className={styles.topContainer}>
					<div className={styles.leftContainer}>
						<div className={styles.letter1}>
							<div className={`${styles.letterOption}`}>
								<div className={styles.textContainer}>
									<strong>{t('DearNeighbors', { lng: i18n.language })},</strong>
								</div>

								<div className={styles.textContainer}>
									{t('renovationNoticeBodyParagraph1', {
										lng: i18n.language,
										startDate: startDate ? formatDate(startDate, i18n.language) : '_________',
										endDate: endDate ? formatDate(endDate, i18n.language) : '_________',
									})}
								</div>
								<div className={styles.textContainer}>
									{t('renovationNoticeBodyParagraph2', {
										lng: i18n.language,
									})}
								</div>
								<div className={styles.textContainer}>
									{t('renovationNoticeBodyParagraph3', {
										lng: i18n.language,
									})}
								</div>
							</div>
						</div>

						<div className={styles.inputBox}>
							<div className={styles.dateBox}>
								<div className={styles.nameBox}>
									<div className={styles.inputBlock}>
										<input
											className={styles.date}
											type="date"
											value={startDate}
											onChange={(e) => setStartDate(e.target.value)}
											required
											aria-label={t('startDatePlaceholder')}
										/>

										<span className={styles.placeholderDate}>
											{t('startDatePlaceholder', { lng: i18n.language })}
										</span>
									</div>
									<div className={styles.inputBlock}>
										<input
											className={styles.date}
											type="date"
											value={endDate}
											onChange={(e) => setEndDate(e.target.value)}
											required
											aria-label={t('endDatePlaceholder')}
										/>

										<span className={styles.placeholderDate}>
											{t('endDatePlaceholder', { lng: i18n.language })}
										</span>
									</div>
								</div>
							</div>
							<div className={styles.nameBox}>
								<div className={styles.inputBlock}>
									<input
										className={styles.name}
										type="text"
										value={senderName}
										onChange={(e) => setSenderName(e.target.value)}
										required
										aria-label={t('senderNamePlaceholder')}
									/>

									{senderName && (
										<button
											type="button"
											className={styles.clearButton}
											onClick={() => {
												setSenderName('');
												setEndDate('');
												setStartDate('');
											}}
											aria-label={t('clearButtonLabel')}
										>
											<ClearIcon style={{ fontSize: 20 }} />
										</button>
									)}
									<label
										className={`${styles.placeholder} ${senderName && styles.filledPlaceholder}`}
									>
										{t('senderNamePlaceholder', { lng: i18n.language })}
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.rightContainer}>
						<div className={styles.previewContainer} ref={previewRef}>
							<img src={image.src} alt={image.alt} className={styles.previewImage} />
							<div className={styles.letter}>
								<div className={styles.textContainer}>
									<strong>{t('DearNeighbors', { lng: previewLanguage })},</strong>
								</div>
								<div className={styles.textContainer}>
									{t('renovationNoticeBodyParagraph1', {
										lng: previewLanguage,
										startDate: startDate ? formatDate(startDate, previewLanguage) : '_________',
										endDate: endDate ? formatDate(endDate, previewLanguage) : '_________',
									})}
								</div>
								<div className={styles.textContainer2}>
									{t('renovationNoticeBodyParagraph2', { lng: previewLanguage })}
								</div>
								<div className={styles.textContainer2}>
									{t('renovationNoticeBodyParagraph3', { lng: previewLanguage })}
								</div>
								<div className={styles.signatureContainer}>
									<br />
									{senderName && (
										<>
											<span className={styles.signature}>
												{t('bestRegards', { lng: previewLanguage })}
											</span>
											<br />
											<span className={styles.signatureLine}>{senderName || '_________'}</span>
										</>
									)}
								</div>
							</div>
						</div>
						<div className={styles.buttonContainer}>
							<select
								className={styles.languageSelect}
								value={previewLanguage}
								onChange={(e) => setPreviewLanguage(e.target.value)}
								aria-label={t('languageSelectLabel')}
							>
								{availableLanguages.map((lang) => (
									<option key={lang.code} value={lang.code}>
										{lang.name}
									</option>
								))}
							</select>
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
					<button
						onClick={handleSaveAsImage}
						disabled={!isAgreed}
						className={isAgreed ? styles.downloadLink : styles.downloadLinkDisabled}
					>
						{t('buttonDownloadImage')}
					</button>
				</div>
				<div className={styles.buttonBack}>
					<Link to="/news/8" className={styles.backButton}>
						{t('backToBlog')}
					</Link>
				</div>
			</div>
		</div>
	);
}

export default HouseRuleRenovation;
