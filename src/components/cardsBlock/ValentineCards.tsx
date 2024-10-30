// eslint-disable-next-line import/default
import React, { useRef, useState } from 'react';
import styles from './cards.module.css';
import { useTranslation } from 'react-i18next';
import { toPng } from 'html-to-image';
import ClearIcon from '@mui/icons-material/Clear';

const images = [
	{ id: 'valentine_variant4', src: '/valentine4.webp', alt: 'Image 4' },
	{ id: 'valentine_variant7', src: '/valentine7.webp', alt: 'Image 7' },
	{ id: 'valentine_variant3', src: '/valentine3.webp', alt: 'Image 3' },
	{ id: 'valentine_variant1', src: '/valentine1.webp', alt: 'Image 1' },
	{ id: 'valentine_variant6', src: '/valentine6.webp', alt: 'Image 6' },
	{ id: 'valentine_variant8', src: '/valentine8.webp', alt: 'Image 8' },
];

function ValentineCards(): JSX.Element {
	const { t } = useTranslation();
	const [recipientName, setRecipientName] = useState('');
	const [letterVariant, setLetterVariant] = useState('variant1');
	const [senderName, setSenderName] = useState('');
	const [isAgreed, setIsAgreed] = useState(false);
	const [selectedImage, setSelectedImage] = useState('valentine_variant4');
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
			title: t('valentineTitleCard.variant1'),
			body: [
				<div className={styles.cards} key="variant1-body">
					<p key="variant1-paragraph1">{t('valentineCard.variant1.paragraph1')}</p>
					<p key="variant1-paragraph2">{t('valentineCard.variant1.paragraph2')}</p>
				</div>,
			],
			signature: t('valentineCardSignature.variant1'),
		},
		{
			id: 'variant2',
			title: t('valentineTitleCard.variant2'),
			body: [
				<div className={styles.cards} key="variant2-body">
					<p key="variant2-paragraph1">{t('valentineCard.variant2.paragraph1')}</p>
					<p key="variant2-paragraph2">{t('valentineCard.variant2.paragraph2')}</p>
				</div>,
			],
			signature: t('valentineCardSignature.variant2'),
		},
		{
			id: 'variant3',
			title: t('valentineTitleCard.variant3'),
			body: [
				<div className={styles.cards} key="variant3-body">
					<p key="variant3-paragraph1">{t('valentineCard.variant3.paragraph1')}</p>
					<p key="variant3-paragraph2">{t('valentineCard.variant3.paragraph2')}</p>
				</div>,
			],
			signature: t('valentineCardSignature.variant3'),
		},
	];

	const handleSaveAsImage = (): void => {
		if (previewRef.current) {
			toPng(previewRef.current as HTMLElement)
				.then((dataUrl: string) => {
					const link = document.createElement('a');
					link.download = 'valentineCard.png';
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
			<h1 className={styles.titlePage}>{t('valentineCardsTitle')}</h1>
			<p className={styles.subtitlePage}>{t('valentineCardsSubtitle')}</p>
			<div className={styles.mainContainer}>
				<div className={styles.topContainer}>
					<div className={styles.leftContainer}>
						<p className={styles.titleLetter}>{t('letterVariants')}</p>
						{letters.map((letter) => (
							<div
								key={letter.id}
								className={`${styles.letterOption} ${letterVariant === letter.id ? styles.selected : ''}`}
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
											aria-label={t('clearRecipientName')}
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
											onClick={() => setSenderName('')}
											aria-label={t('clearSenderName')}
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
							{recipientName && (
								<p className={styles.textContainer}>
									{t('defaultValentineCardRecipientName', { lng: previewLanguage })} {recipientName}
								</p>
							)}

							<p className={styles.titleLetter}>
								{t(`valentineTitleCard.${letterVariant}`, { lng: previewLanguage })}
							</p>

							<div className={styles.textContainer}>
								{t(`valentineCard.${letterVariant}.paragraph1`, {
									lng: previewLanguage,
								})}
							</div>
							<div className={styles.textContainerP2}>
								{t(`valentineCard.${letterVariant}.paragraph2`, {
									lng: previewLanguage,
								})}
							</div>
							<div className={styles.textContainer}>
								<br />
								<span className={styles.signature}>
									{t(`valentineCardSignature.${letterVariant}`, { lng: previewLanguage })}
								</span>
								<br />
								<span className={styles.signatureLine}>
									{senderName || t('defaultValentineCardSenderName', { lng: previewLanguage })}
								</span>
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
						onClick={handleSaveAsImage}
						disabled={!isAgreed}
						className={isAgreed ? styles.downloadLink : styles.downloadLinkDisabled}
					>
						{t('buttonDownloadImage')}
					</button>
				</div>
				<div className={styles.paragraphBox}>
					<p className={styles.title}>{t('valentineTitleParagraph')}</p>
					<p className={styles.paragraphSubtitle}>{t('valentineTextSubtitle')}</p>

					{Array.from({ length: 11 }, (_, i) => (
						<React.Fragment key={i}>
							<p className={styles.titleParagraph}>{t(`valentineTextTitleParagraph${i + 2}`)}</p>
							<p className={styles.paragraphs}>{t(`valentineTextParagraph${i + 2}`)}</p>
						</React.Fragment>
					))}

					<p className={styles.paragraph}>{t('valentineTextParagraph13')}</p>
					<p
						className={styles.paragraphLast}
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					>
						{t('valentineTextParagraph14')}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ValentineCards;
