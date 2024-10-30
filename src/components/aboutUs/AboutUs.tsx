import { useTranslation } from 'react-i18next';
import styles from './aboutUs.module.css';

function AboutUs(): JSX.Element {
	const { t } = useTranslation();
	return (
		<div className={styles.aboutUsBox}>
			<h1 className={styles.titlePage}>{t('aboutUs')}</h1>
			<div className={styles.welcomeBlock}>
				<div className={styles.overlay}>
					<div className={styles.contextWelcomeWrapper}>
						<div className={styles.imageContainerAboutUs}>
							<img src="/welcome.webp" alt="welcome block" />
						</div>
						<div className={styles.contextWelcomeBox}>
							<h3 className={styles.titleWelcomeBlock}>{t('welcomeTittle')}</h3>
							<p className={styles.text}>{t('welcomeParagraph1')}</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.storyBlock}>
				<div className={styles.overlay}>
					<div className={styles.contextStoryBox}>
						<h3 className={styles.titleStoryBlock}>{t('storyTittle')}</h3>
						<p className={styles.text}>{t('storyParagraph1')}</p>
						<p className={styles.text}>{t('storyParagraph2')}</p>
					</div>
				</div>
			</div>
			<div className={styles.servicesBlock}>
				<div className={styles.overlay}>
					<div className={styles.contextServicesWrapper}>
						<div className={styles.contextServicesBox}>
							<h3 className={styles.titleServicesBlock}>{t('servicesTittle')}</h3>
							<p className={styles.text}>
								<strong className={styles.leadText}>{t('servicesSubtitleP1')} </strong>
								{t('servicesParagraph1')}
							</p>
							<p className={styles.text}>
								<strong className={styles.leadText}>{t('servicesSubtitleP2')} </strong>
								{t('servicesParagraph2')}
							</p>
							<p className={styles.text}>
								<strong className={styles.leadText}>{t('servicesSubtitleP3')} </strong>
								{t('servicesParagraph3')}
							</p>
							<p className={styles.text}>
								<strong className={styles.leadText}>{t('servicesSubtitleP4')} </strong>
								{t('servicesParagraph4')}
							</p>
							<p className={styles.text}>
								<strong className={styles.leadText}>{t('servicesSubtitleP5')} </strong>
								{t('servicesParagraph5')}
							</p>
						</div>
						<div className={styles.imageContainer}>
							<img src="frau_resume.webp" alt="resume block" />
							<p className={styles.сaptionText}>{t('imageCaptionText1')}</p>
							<p className={styles.сaptionText}>{t('imageCaptionText2')}</p>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.chooseUsBlock}>
				<div className={styles.overlay}>
					<div className={styles.contextChooseUsBox}>
						<h3 className={styles.titleChooseUsBlock}>{t('chooseUsTittle')}</h3>
						<p className={styles.text}>{t('chooseUsParagraph1')}</p>
						<p className={styles.text}>{t('chooseUsParagraph2')}</p>
					</div>
				</div>
			</div>
			<div className={styles.joinUsBlock}>
				<div className={styles.overlay}>
					<div className={styles.contextJoinUsWrapper}>
						<div className={styles.imageContainer}>
							<img src="/joinUs_frau.webp" alt="join us block" />
						</div>
						<div className={styles.contextJoinUsBox}>
							<h3 className={styles.titleJoinUsBlock}>{t('joinUsTittle')}</h3>
							<p className={styles.text}>{t('joinUsParagraph1')}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
