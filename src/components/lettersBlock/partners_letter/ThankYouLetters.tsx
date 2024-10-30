import { useState, useEffect, useRef } from 'react';
import styles from './thankYouLetters.module.css';
import { useTranslation } from 'react-i18next';
import { toPng } from 'html-to-image';
import ClearIcon from '@mui/icons-material/Clear';

const images = [
	{ id: 'thankYou_variant6', src: '/thanks6.webp', alt: 'Image 6' },
	{ id: 'thankYou_variant1', src: '/thanks1.webp', alt: 'Image 1' },
	{ id: 'thankYou_variant2', src: '/thanks2.webp', alt: 'Image 2' },
	{ id: 'thankYou_variant3', src: '/thanks3.webp', alt: 'Image 3' },
	{ id: 'thankYou_variant4', src: '/thanks4.webp', alt: 'Image 4' },
	{ id: 'thankYou_variant5', src: '/thanks5.webp', alt: 'Image 5' },
];

function ThankYouLetters(): JSX.Element {
	const { t, i18n } = useTranslation();
	const [recipientName, setRecipientName] = useState('');
	const [recipientGender, setRecipientGender] = useState('male');
	const [letterVariant, setLetterVariant] = useState('variant1');
	const [senderName, setSenderName] = useState('');
	const [letterDate, setLetterDate] = useState('');
	const [isAgreed, setIsAgreed] = useState(false);
	const [selectedImage, setSelectedImage] = useState('thankYou_variant6');
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

	const formatDate = (dateString: string, language: string): string => {
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		};
		return new Date(dateString).toLocaleDateString(language, options);
	};

	const currentDate = new Date().toLocaleDateString('de-DE', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});
	const defaultDate = t('defaultDate').replace('{{date}}', currentDate);

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

	useEffect(() => {
		i18n.changeLanguage('en');
	}, [i18n]);

	const letters = [
		{
			id: 'variant1',
			title: t('thankYouLetterTitle.variant1'),
			body: [
				<div className={styles.cards} key="variant1-body">
					<div className={styles.pText} key="variant1-paragraph1">
						{t('thankYouLetter.variant1.paragraph1')}
					</div>
					<div className={styles.pText} key="variant1-paragraph2">
						{t('thankYouLetter.variant1.paragraph2')}
					</div>
				</div>,
			],
			signature: t('signatureTextCards'),
		},
		{
			id: 'variant2',
			title: t('thankYouLetterTitle.variant2'),
			body: [
				<div className={styles.cards} key="variant2-body">
					<div className={styles.pText} key="variant2-paragraph1">
						{t('thankYouLetter.variant2.paragraph1')}
					</div>
					<div className={styles.pText} key="variant2-paragraph2">
						{t('thankYouLetter.variant2.paragraph2')}
					</div>
				</div>,
			],
			signature: t('signatureTextCards'),
		},
		{
			id: 'variant3',
			title: t('thankYouLetterTitle.variant3'),
			body: [
				<div className={styles.cards} key="variant3-body">
					<div className={styles.pText} key="variant3-paragraph1">
						{t('thankYouLetter.variant3.paragraph1')}
					</div>
					<div className={styles.pText} key="variant3-paragraph2">
						{t('thankYouLetter.variant3.paragraph2')}
					</div>
				</div>,
			],
			signature: t('signatureTextCards'),
		},
	];

	const handleSaveAsImage = (): void => {
		if (previewRef.current) {
			toPng(previewRef.current as HTMLElement)
				.then((dataUrl: string) => {
					const link = document.createElement('a');
					link.download = 'thankYou_letter.png';
					link.href = dataUrl;
					link.click();
				})
				.catch((error: Error) => {
					console.error('Could not generate image', error);
				});
		}
	};

	return (
		<div className={styles.thankYouLettersBox}>
			<h1 className={styles.titlePage}>{t('thankYouTitle')}</h1>
			<div className={styles.subtitlePage}>{t('thankYouSubtitle')}</div>
			<div className={styles.mainContainer}>
				<div className={styles.topContainer}>
					<div className={styles.leftContainer}>
						<div className={styles.titleLetter}>{t('letterVariants')}</div>
						{letters.map((letter) => (
							<div
								key={letter.id}
								className={`${styles.letterOption} ${
									letterVariant === letter.id ? styles.selected : ''
								}`}
								onClick={() => setLetterVariant(letter.id)}
							>
								<div className={styles.H3Text}>{letter.title}</div>
								<div className={styles.pText}>{letter.body}</div>
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
					<div className={styles.rightContainer}>
						<div className={styles.titleLetter}>{t('imageVariants')}</div>
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
							<div className={styles.titleLetter}>
								{t(`thankYouLetterTitle.${letterVariant}`, { lng: previewLanguage })}
							</div>

							{recipientGender && (
								<div className={styles.textContainer}>
									{getGreeting(
										recipientName || t('defaultRecipientName', { lng: previewLanguage }),
										recipientGender,
										previewLanguage
									)}
								</div>
							)}

							<div className={styles.textContainer}>
								{t(`thankYouLetter.${letterVariant}.paragraph1`, {
									lng: previewLanguage,
									name: recipientName || t('defaultRecipientName', { lng: previewLanguage }),
								})}
							</div>
							<div className={styles.textContainer}>
								{t(`thankYouLetter.${letterVariant}.paragraph2`, {
									lng: previewLanguage,
									name: recipientName || t('defaultRecipientName', { lng: previewLanguage }),
								})}
							</div>
							<div className={styles.textContainer}>
								{t('signatureTextCards', {
									lng: previewLanguage,
								})}
								<br />
								{senderName || t('defaultSenderName', { lng: previewLanguage })}
							</div>
							<div className={styles.textContainer}>
								{letterDate ? formatDate(letterDate, previewLanguage) : defaultDate}
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
				<div className={styles.thankYouParagraphBox}>
					<div className={styles.thankYouTitleParagraph}>{t('thankYouTextTitleParagraph1')}</div>
					<div className={styles.thankYouParagraph}>{t('thankYouTextParagraph1')}</div>
					<div className={styles.thankYouTitleParagraph}>{t('thankYouTextTitleParagraph2')}</div>
					<div className={styles.thankYouParagraph}>{t('thankYouTextParagraph2')}</div>
					<div className={styles.thankYouTitleParagraph}>{t('thankYouTextTitleParagraph3')}</div>
					<div className={styles.thankYouParagraph}>{t('thankYouTextParagraph3')}</div>
					<div className={styles.thankYouParagraph4}>{t('thankYouTextParagraph4')}</div>
				</div>
			</div>
		</div>
	);
}

export default ThankYouLetters;
