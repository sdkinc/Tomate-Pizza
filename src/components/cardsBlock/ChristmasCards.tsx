// eslint-disable-next-line import/default
import React, { useRef, useState } from 'react';
import styles from './cards.module.css';
import { useTranslation } from 'react-i18next';
import { toPng } from 'html-to-image';
import ClearIcon from '@mui/icons-material/Clear';

const images = [
	{ id: 'christmas_variant1', src: '/christmas1.webp', alt: 'Image 1' },
	{ id: 'christmas_variant3', src: '/christmas3.webp', alt: 'Image 3' },
	{ id: 'christmas_variant5', src: '/christmas5.webp', alt: 'Image 5' },
	{ id: 'christmas_variant2', src: '/christmas2.webp', alt: 'Image 2' },
	{ id: 'christmas_variant7', src: '/christmas7.webp', alt: 'Image 7' },
	{ id: 'christmas_variant6', src: '/christmas6.webp', alt: 'Image 6' },
];
function ChristmasCards(): JSX.Element {
	const { t } = useTranslation();
	const [recipientName, setRecipientName] = useState('');
	const [recipientGender, setRecipientGender] = useState('');
	const [letterVariant, setLetterVariant] = useState('variant1');
	const [senderName, setSenderName] = useState('');
	const [isAgreed, setIsAgreed] = useState(false);
	const [selectedImage, setSelectedImage] = useState('christmas_variant1');
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

	const getGreeting = (name: string, gender: string, language: string): string => {
		if (!gender) return '';
		switch (gender) {
			case 'maleCards':
				return t('dearWithNameMaleCards', { lng: language, name });
			case 'femaleCards':
				return t('dearWithNameFemaleCards', { lng: language, name });
			case 'neutralCards':
				return t('dearWithNamePluralCards', { lng: language, name });
			case 'collegeCards':
				return t('dearCollegeCards', { lng: language, name });
			default:
				return t('dearFriendsCards', { lng: language, name });
		}
	};

	const letters = [
		{
			id: 'variant1',
			title: t('christmasTitleCard.variant1'),
			body: [
				<div className={styles.cards} key="variant1-body">
					<p key="variant1-paragraph1">{t('christmasCard.variant1.paragraph1')}</p>
					<p key="variant1-paragraph2">{t('christmasCard.variant1.paragraph2')}</p>
				</div>,
			],
			signature: t('christmasCardSignature.variant1'),
		},
		{
			id: 'variant2',
			title: t('christmasTitleCard.variant2'),
			body: [
				<div className={styles.cards} key="variant2-body">
					<p key="variant2-paragraph1">{t('christmasCard.variant2.paragraph1')}</p>
					<p key="variant2-paragraph2">{t('christmasCard.variant2.paragraph2')}</p>
				</div>,
			],
			signature: t('christmasCardSignature.variant2'),
		},
		{
			id: 'variant3',
			title: t('christmasTitleCard.variant3'),
			body: [
				<div className={styles.cards} key="variant3-body">
					<p key="variant3-paragraph1">{t('christmasCard.variant3.paragraph1')}</p>
					<p key="variant3-paragraph2">{t('christmasCard.variant3.paragraph2')}</p>
				</div>,
			],
			signature: t('christmasCardSignature.variant3'),
		},
	];

	const handleSaveAsImage = (): void => {
		if (previewRef.current) {
			toPng(previewRef.current as HTMLElement)
				.then((dataUrl: string) => {
					const link = document.createElement('a');
					link.download = 'christmasCards.png';
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
			<h1 className={styles.titlePage}>{t('christmasCardsTitle')}</h1>
			<p className={styles.subtitlePage}>{t('christmasCardsSubtitle')}</p>
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
							<div className={styles.nameBox}>
								<select
									id="recipientGender"
									className={styles.genderBox}
									value={recipientGender}
									onChange={(e) => setRecipientGender(e.target.value)}
									aria-label={t('selectGenderLabel')}
								>
									<option value="">{t('selectGender')}</option>
									<option value="maleCards">{t('maleCards')}</option>
									<option value="femaleCards">{t('femaleCards')}</option>
									<option value="neutralCards">{t('neutralCards')}</option>
									<option value="collegeCards">{t('collegeCards')}</option>
									<option value="friendsCards">{t('friendsCards')}</option>
								</select>

								<div className={styles.inputBlockRecipientName}>
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
												setRecipientGender('');
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
							<p className={styles.titleLetterCard}>
								{t(`christmasTitleCard.${letterVariant}`, { lng: previewLanguage })}
							</p>

							{recipientGender && (
								<p className={styles.textContainer}>
									{getGreeting(
										recipientName || t('defaultRecipientName', { lng: previewLanguage }),
										recipientGender,
										previewLanguage
									)}
								</p>
							)}

							<div className={styles.textContainer}>
								{t(`christmasCard.${letterVariant}.paragraph1`, {
									lng: previewLanguage,
									name: recipientName || t('defaultRecipientName', { lng: previewLanguage }),
								})}
							</div>
							<div className={styles.textContainerP2}>
								{t(`christmasCard.${letterVariant}.paragraph2`, {
									lng: previewLanguage,
									name: recipientName || t('defaultRecipientName', { lng: previewLanguage }),
								})}
							</div>
							<div className={styles.textContainer}>
								<br />
								{senderName && (
									<>
										<span className={styles.signature}>
											{t(`christmasCardSignature.${letterVariant}`, { lng: previewLanguage })}
										</span>
										<br />
										<span className={styles.signatureLine}>
											{t(senderName, { lng: previewLanguage })}
										</span>
									</>
								)}
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
					<p className={styles.title}>{t('christmasTitleParagraph')}</p>
					<p className={styles.paragraphSubtitle}>{t('christmasSubtitle')}</p>

					{Array.from({ length: 9 }, (_, i) => (
						<React.Fragment key={i}>
							<p className={styles.titleParagraph}>{t(`christmasTextTitleParagraph${i + 2}`)}</p>
							<p className={styles.paragraphs}>{t(`christmasTextParagraph${i + 2}`)}</p>
						</React.Fragment>
					))}

					<p className={styles.paragraph}>{t('christmasTextParagraph11')}</p>
					<p
						className={styles.paragraphLast}
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					>
						{t('christmasTextParagraph12')}
					</p>
				</div>
			</div>
		</div>
	);
}
export default ChristmasCards;
