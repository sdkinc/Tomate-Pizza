// eslint-disable-next-line import/default
import React, { useRef, useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import styles from './cards.module.css';
import { toPng } from 'html-to-image';
import { useTranslation } from 'react-i18next';

const images = [
	{ id: 'martinsDay_variant1', src: '/martinsDay1.webp', alt: 'Image 1' },
	{ id: 'martinsDay_variant2', src: '/martinsDay2.webp', alt: 'Image 2' },
	{ id: 'martinsDay_variant5', src: '/martinsDay3.webp', alt: 'Image 5' },
	{ id: 'martinsDay_variant6', src: '/martinsDay4.webp', alt: 'Image 6' },
	{ id: 'martinsDay_variant4', src: '/martinsDay5.webp', alt: 'Image 4' },
	{ id: 'martinsDay_variant3', src: '/martinsDay6.webp', alt: 'Image 3' },
];

function MartinsDay(): JSX.Element {
	const { t } = useTranslation();
	const [recipientName, setRecipientName] = useState('');
	const [letterVariant, setLetterVariant] = useState('variant1');
	const [senderName, setSenderName] = useState('');
	const [isAgreed, setIsAgreed] = useState(false);
	const [selectedImage, setSelectedImage] = useState('martinsDay_variant1');
	const [previewLanguage, setPreviewLanguage] = useState('de');
	const previewRef = useRef<HTMLDivElement>(null);

	const availableLanguages = [
		{ code: 'de', name: t('german') },
		{ code: 'en', name: t('english') },
		{ code: 'tr', name: t('turkish') },
		{ code: 'ru', name: t('russian') },
		{ code: 'es', name: t('spanish') },
		{ code: 'uk', name: t('ukrainian') },
	];

	const letters = [
		{
			id: 'variant1',
			title: t('martinsDayTitleCard.variant1'),
			body: [
				<div className={styles.cards} key="variant1-body">
					<p key="variant1-paragraph1">{t('martinsDayCard.variant1.paragraph1')}</p>
					<p key="variant1-paragraph2">{t('martinsDayCard.variant1.paragraph2')}</p>
				</div>,
			],
			signature: t('martinsDayCardSignature.variant1'),
		},
		{
			id: 'variant2',
			title: t('martinsDayTitleCard.variant2'),
			body: [
				<div className={styles.cards} key="variant2-body">
					<p key="variant2-paragraph1">{t('martinsDayCard.variant2.paragraph1')}</p>
					<p key="variant2-paragraph2">{t('martinsDayCard.variant2.paragraph2')}</p>
				</div>,
			],
			signature: t('martinsDayCardSignature.variant2'),
		},
		{
			id: 'variant3',
			title: t('martinsDayTitleCard.variant3'),
			body: [
				<div className={styles.cards} key="variant3-body">
					<p key="variant3-paragraph1">{t('martinsDayCard.variant3.paragraph1')}</p>
					<p key="variant3-paragraph2">{t('martinsDayCard.variant3.paragraph2')}</p>
				</div>,
			],
			signature: t('martinsDayCardSignature.variant3'),
		},
	];

	const handleSaveAsImage = (): void => {
		if (previewRef.current) {
			toPng(previewRef.current as HTMLElement)
				.then((dataUrl: string) => {
					const link = document.createElement('a');
					link.download = 'martinsDay.png';
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
			<h1 className={styles.titlePage}>{t('martinsDaysTitle')}</h1>
			<p className={styles.subtitlePage}>{t('martinsDaysSubtitle')}</p>
			<div className={styles.mainContainer}>
				<div className={styles.topContainer}>
					<div className={styles.leftContainer}>
						<p className={styles.titleLetter}>{t('letterVariants')}</p>
						{letters.map((letter) => (
							<div
								key={letter.id}
								className={`${styles.letterOption} ${
									letterVariant === letter.id ? styles.selected : ''
								}`}
								onClick={() => setLetterVariant(letter.id)}
							>
								<h3>{letter.title}</h3>
								<p>{letter.body}</p>
							</div>
						))}
						<div className={styles.inputBox}>
							<div className={styles.nameContainer}>
								<div className={styles.inputBlockRecipientName2}>
									<input
										id="recipientName"
										className={styles.name}
										type="text"
										value={recipientName}
										onChange={(e) => setRecipientName(e.target.value)}
										required
										aria-label={t('recipientNamePlaceholder')}
									/>
									{recipientName && (
										<button
											type="button"
											className={styles.clearButton}
											onClick={() => {
												setRecipientName('');
											}}
											aria-label={t('clearButtonAriaLabel')}
										>
											<ClearIcon style={{ fontSize: 20 }} />
										</button>
									)}
									<label
										className={`${styles.placeholder} ${recipientName && styles.filledPlaceholder}`}
									>
										{t('recipientNamePlaceholder')}
									</label>
								</div>

								<div className={styles.inputBlock}>
									<input
										id="senderName"
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
											}}
											aria-label={t('clearButtonAriaLabel')}
										>
											<ClearIcon style={{ fontSize: 20 }} />
										</button>
									)}
									<label
										className={`${styles.placeholder} ${senderName && styles.filledPlaceholder}`}
									>
										{t('senderNamePlaceholder')}
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.rightContainer}>
						<p className={styles.titleLetter}>{t('imageVariants')}</p>
						<div className={styles.imageOptions}>
							{images.map((image) => (
								<label key={image.id}>
									<input
										type="radio"
										value={image.id}
										checked={selectedImage === image.id}
										onChange={() => setSelectedImage(image.id)}
									/>
									<img src={image.src} alt={image.alt} className={styles.imagePreview} />
								</label>
							))}
						</div>
					</div>
				</div>
				<div className={styles.bottomContainer}>
					<div className={styles.previewContainer} ref={previewRef}>
						<div className={styles.letter}>
							<p className={styles.titleLetter}>
								{t(`martinsDayTitleCard.${letterVariant}`, { lng: previewLanguage })}
							</p>
							{recipientName && (
								<p className={styles.nameLetter}>
									{recipientName}
									{','}
								</p>
							)}

							<div className={styles.textContainer}>
								{t(`martinsDayCard.${letterVariant}.paragraph1`, {
									lng: previewLanguage,
									name: recipientName || t('defaultRecipientName', { lng: previewLanguage }),
								})}
							</div>
							<div className={styles.textContainerP2}>
								{t(`martinsDayCard.${letterVariant}.paragraph2`, {
									lng: previewLanguage,
								})}
							</div>
							<div className={styles.textContainer}>
								<br />
								{t(`martinsDayCardSignature.${letterVariant}`, { lng: previewLanguage })}
								<br />
								{senderName}
							</div>
						</div>
						<img
							src={images.find((image) => image.id === selectedImage)?.src}
							alt="Selected"
							className={styles.previewImage}
						/>
					</div>
				</div>

				<div className={styles.buttonContainer}>
					<select
						id="languageSelect"
						className={styles.languageSelect}
						value={previewLanguage}
						onChange={(e) => setPreviewLanguage(e.target.value)}
						aria-label={t('selectLanguageLabel')}
					>
						{availableLanguages.map((lang) => (
							<option key={lang.code} value={lang.code}>
								{lang.name}
							</option>
						))}
					</select>
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
						type="button"
						onClick={handleSaveAsImage}
						disabled={!isAgreed}
						className={isAgreed ? styles.downloadLink : styles.downloadLinkDisabled}
						aria-label={t('buttonDownloadImage')}
					>
						{t('buttonDownloadImage')}
					</button>
				</div>
				<div className={styles.paragraphBox}>
					<p className={styles.title}>{t('martinsDayTitleParagraph')}</p>
					<p className={styles.paragraphSubtitle}>{t('martinsDaySubtitle')}</p>

					{Array.from({ length: 11 }, (_, i) => (
						<React.Fragment key={i}>
							<p className={styles.titleParagraph}>{t(`martinsDayTextTitleParagraph${i + 2}`)}</p>
							<p className={styles.paragraphs}>{t(`martinsDayTextParagraph${i + 2}`)}</p>
						</React.Fragment>
					))}

					<p className={styles.paragraph}>{t('martinsDayTextParagraph13')}</p>
					<p
						className={styles.paragraphLast}
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					>
						{t('martinsDayTextParagraph14')}
					</p>
				</div>
			</div>
		</div>
	);
}
export default MartinsDay;
