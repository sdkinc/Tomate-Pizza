// eslint-disable-next-line import/default
import React, { useRef, useState } from 'react';
import styles from './cards.module.css';
import { toPng } from 'html-to-image';
import { useTranslation } from 'react-i18next';
import ClearIcon from '@mui/icons-material/Clear';

const images = [
	{ id: 'maslenitsa_variant1', src: '/maslenitsa1.webp', alt: 'Image 1' },
	{ id: 'maslenitsa_variant6', src: '/maslenitsa6.webp', alt: 'Image 6' },
	{ id: 'maslenitsa_variant3', src: '/maslenitsa3.webp', alt: 'Image 3' },
	{ id: 'maslenitsa_variant2', src: '/maslenitsa2.webp', alt: 'Image 2' },
	{ id: 'maslenitsa_variant5', src: '/maslenitsa5.webp', alt: 'Image 5' },
	{ id: 'maslenitsa_variant4', src: '/maslenitsa4.webp', alt: 'Image 4' },
];
function MaslenitsaCards(): JSX.Element {
	const { t } = useTranslation();
	const [recipientName, setRecipientName] = useState('');
	const [recipientGender, setRecipientGender] = useState('');
	const [letterVariant, setLetterVariant] = useState('variant1');
	const [senderName, setSenderName] = useState('');
	const [isAgreed, setIsAgreed] = useState(false);
	const [selectedImage, setSelectedImage] = useState('maslenitsa_variant1');
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
			title: t('maslenitsaTitleCard.variant1'),
			body: [
				<div className={styles.cards} key="variant1-body">
					<p key="variant1-paragraph1">{t('maslenitsaCard.variant1.paragraph1')}</p>
					<p key="variant1-paragraph2">{t('maslenitsaCard.variant1.paragraph2')}</p>
				</div>,
			],
			signature: t('maslenitsaCardSignature.variant1'),
		},
		{
			id: 'variant2',
			title: t('maslenitsaTitleCard.variant2'),
			body: [
				<div className={styles.cards} key="variant2-body">
					<p key="variant2-paragraph1">{t('maslenitsaCard.variant2.paragraph1')}</p>
					<p key="variant2-paragraph2">{t('maslenitsaCard.variant2.paragraph2')}</p>
				</div>,
			],
			signature: t('maslenitsaCardSignature.variant2'),
		},
		{
			id: 'variant3',
			title: t('maslenitsaTitleCard.variant3'),
			body: [
				<div className={styles.cards} key="variant3-body">
					<p key="variant3-paragraph1">{t('maslenitsaCard.variant3.paragraph1')}</p>
					<p key="variant3-paragraph2">{t('maslenitsaCard.variant3.paragraph2')}</p>
				</div>,
			],
			signature: t('maslenitsaCardSignature.variant3'),
		},
	];

	const handleSaveAsImage = (): void => {
		if (previewRef.current) {
			toPng(previewRef.current as HTMLElement)
				.then((dataUrl: string) => {
					const link = document.createElement('a');
					link.download = 'maslenitsaCard.png';
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
			<h1 className={styles.titlePage}>{t('maslenitsaCardsTitle')}</h1>
			<p className={styles.subtitlePage}>{t('maslenitsaCardsSubtitle')}</p>
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

							<div className={styles.nameBox}>
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
							<p className={styles.titleLetter}>
								{t(`maslenitsaTitleCard.${letterVariant}`, { lng: previewLanguage })}
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
								{t(`maslenitsaCard.${letterVariant}.paragraph1`, {
									lng: previewLanguage,
									name: recipientName || t('defaultRecipientName', { lng: previewLanguage }),
								})}
							</div>
							<div className={styles.textContainerP2}>
								{t(`maslenitsaCard.${letterVariant}.paragraph2`, {
									lng: previewLanguage,
								})}
							</div>
							<div className={styles.textContainer}>
								<br />
								{t(`maslenitsaCardSignature.${letterVariant}`, { lng: previewLanguage })}
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
					<p className={styles.title}>{t('maslenitsaTitleParagraph')}</p>
					<p className={styles.paragraphSubtitle}>{t('maslenitsaSubtitle')}</p>

					{Array.from({ length: 10 }, (_, i) => (
						<React.Fragment key={i}>
							<p className={styles.titleParagraph}>{t(`maslenitsaTextTitleParagraph${i + 2}`)}</p>
							<p className={styles.paragraphs}>{t(`maslenitsaTextParagraph${i + 2}`)}</p>
						</React.Fragment>
					))}

					<p className={styles.paragraph}>{t('maslenitsaTextParagraph13')}</p>
					<p
						className={styles.paragraphLast}
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					>
						{t('maslenitsaTextParagraph14')}
					</p>
				</div>
			</div>
		</div>
	);
}
export default MaslenitsaCards;
