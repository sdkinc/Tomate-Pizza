import { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import PageSignUp from './views/PageSignUp';
import PageSignIn from './views/PageSignIn';
import Letters from './components/letters/Letters';
import ApologiesForIllness from './components/lettersBlock/school_letter/ApologiesForIllness';
import DoctorVisit from './components/lettersBlock/school_letter/DoctorVisit';
import PhysicalEducation from './components/lettersBlock/school_letter/PhysicalEducation';
import SwimmingLessons from './components/lettersBlock/school_letter/SwimmingLessons';
import WorkAbsence from './components/lettersBlock/emloyees_letter/WorkAbsence';
import VacationRequest from './components/lettersBlock/emloyees_letter/VacationRequest';
import PageCVEditor from './views/PageCVEditor';
import RouteAuth from './utils/authRoutes/RouteAuth';
import RouteNotAuth from './utils/authRoutes/RouteNotAuth';
import PageLetters from './views/PageLetters';
import PagePolicy from './views/PagePolicy';
import PageBlog from './views/PageBlog';
import PageContactUs from './views/PageContactUs';
import PageAboutUs from './views/PageAboutUs';
import PageTerms from './views/PageTerms';
import PageNewsDetail from './views/PageNewsDetail';
import PageShortNewsDetail from './views/PageShortNewsDetail';
import PageFAQ from './views/PageFAQ';
import ThankYouLetters from './components/lettersBlock/partners_letter/ThankYouLetters';
import NewYearCards from './components/cardsBlock/NewYearCards';
import HalloweenCards from './components/cardsBlock/HalloweenCards';
import ValentineCards from './components/cardsBlock/ValentineCards';
import BirthdayCards from './components/cardsBlock/BirthdayCards';
import EasterCards from './components/cardsBlock/EasterCards';
import PageCards from './views/PageCards';
import ChristmasCards from './components/cardsBlock/ChristmasCards';
import RamadanCards from './components/cardsBlock/RamadanCards';
import ConfirmationCards from './components/cardsBlock/ConfirmationCards';
import BirthCards from './components/cardsBlock/BirthCards';
import ThreeKingsCards from './components/cardsBlock/ThreeKingsCards';
import MaslenitsaCards from './components/cardsBlock/MaslenitsaCards';
import Cards from './components/cards/Cards';
import AppleSpasCards from './components/cardsBlock/AppleSpasCards';
import Kuendigungs from './components/termination/Terminations';
import TerminationFitness from './components/terminationBlock/TerminationFitness';
import TerminationInsurance from './components/terminationBlock/TerminationInsurance';
import TerminationMobilePhone from './components/terminationBlock/TerminationMobilePhone';
import TerminationApartment from './components/terminationBlock/TerminationApartment';
import PageHome from './views/PageHome';
import PrivateRoute from './utils/authRoutes/PrivateRoute';
import AdminPage from './views/AdminPage';
import GenderRevealCards from './components/cardsBlock/GenderRevealCards';
import MartinsDay from './components/cardsBlock/MartinsDay';
import TerminationEmploymentRelationship from './components/terminationBlock/TerminationEmploymentRelationship';
import PageHouseRule from './views/PageHouseRule';
import PageFacts from './views/PageFacts';
import PageGuide from './views/PageGuide';
import PageGuideDetail from './views/PageGuideDetail';
import PageKuendigungs from './views/PageKuendigungs';
import InvitationEventLetters from './components/lettersBlock/partners_letter/InvitationEventLetters';
import PageRoutes from './views/PageRoutes';
import PageStates from './views/PageStates';
import PageCookie from './views/PageCookie';
import PageEditor from './views/PageEditor';
import Apologies from './components/lettersBlock/school_letter/Apologies';
import Loading from './components/loading/Loading';
import PageProtectionAndSafety from './views/PageProtectionAndSafety';
import ProtectionAndSafetyIntro from './features/women-blog/intro/ProtectionAndSafetyIntro';
import PageEducationAndCareer from './views/PageEducationAndCareer';
import PageRightsAndInclusion from './views/PageRightsAndInclusion';

import PageHealthAndMotherhood from './views/PageHealthAndMotherhood';
import PageKindergartens from './views/PageKindergartens';
import PageArticleDetail from './views/PageArticleDetail';
import PageGlobalProjects from './views/PageGlobalProjects';

function App(): JSX.Element {
	const { i18n } = useTranslation();

	useEffect(() => {
		const languageFromCookies = Cookies.get('selectedLanguage');
		if (languageFromCookies) {
			i18n.changeLanguage(languageFromCookies);
		}
	}, [i18n.language]);

	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route element={<PrivateRoute />}>
					<Route path="admin" element={<AdminPage />} />
				</Route>
				<Route element={<RouteAuth />}></Route>

				<Route element={<RouteNotAuth />}>
					<Route path="signUp" element={<PageSignUp />} />
					<Route path="signIn" element={<PageSignIn />} />
				</Route>

				<Route path="/" element={<PageHome />} />
				<Route path="editor" element={<PageEditor />} />
				<Route path="contactUs" element={<PageContactUs />} />
				<Route path="facts" element={<PageFacts />} />
				<Route path="routes" element={<PageRoutes />} />
				<Route path="federal_states" element={<PageStates />} />
				<Route path="aboutUs" element={<PageAboutUs />} />
				<Route path="blog" element={<PageBlog />} />
				<Route path="news/:id" element={<PageNewsDetail />} />
				<Route path="shortNewsDetail/:id" element={<PageShortNewsDetail />} />
				<Route path="terms" element={<PageTerms />} />
				<Route path="privacy" element={<PagePolicy />} />
				<Route path="cookie" element={<PageCookie />} />
				<Route path="faq" element={<PageFAQ />} />
				<Route element={<PageLetters />}>
					<Route path="letters" element={<Letters />} />
					<Route path="school-letters/apology-for-one-day" element={<ApologiesForIllness />} />
					<Route path="school-letters/apology-for-a-period" element={<Apologies />} />
					<Route path="school-letters/doctor-visit" element={<DoctorVisit />} />
					<Route path="school-letters/physical-education" element={<PhysicalEducation />} />
					<Route path="school-letters/swimming-lessons" element={<SwimmingLessons />} />
					<Route path="employees/work-absence" element={<WorkAbsence />} />
					<Route path="employees/vacation-request" element={<VacationRequest />} />
					<Route path="businessLetters/thank-support" element={<ThankYouLetters />} />
					<Route path="businessLetters/invitation-event" element={<InvitationEventLetters />} />
				</Route>
				<Route element={<PageCards />}>
					<Route path="cards" element={<Cards />} />
					<Route path="religious-holidays-cards/christmas-cards" element={<ChristmasCards />} />
					<Route path="religious-holidays-cards/easter-cards" element={<EasterCards />} />
					<Route path="religious-holidays-cards/ramadan-cards" element={<RamadanCards />} />
					<Route
						path="religious-holidays-cards/confirmation-cards"
						element={<ConfirmationCards />}
					/>
					<Route path="religious-holidays-cards/threeKings-cards" element={<ThreeKingsCards />} />
					<Route path="religious-holidays-cards/maslenitsa-cards" element={<MaslenitsaCards />} />
					<Route path="religious-holidays-cards/appleSpas-cards" element={<AppleSpasCards />} />
					<Route path="national-holidays-cards/new-year-cards" element={<NewYearCards />} />
					<Route path="national-holidays-cards/halloween-cards" element={<HalloweenCards />} />
					<Route path="national-holidays-cards/martinsDay-cards" element={<MartinsDay />} />
					<Route path="personal-celebrations-Cards/birthday-cards" element={<BirthdayCards />} />
					<Route path="personal-celebrations-Cards/valentine-cards" element={<ValentineCards />} />
					<Route path="personal-celebrations-Cards/birth-cards" element={<BirthCards />} />
					<Route
						path="personal-celebrations-Cards/genderReveal-cards"
						element={<GenderRevealCards />}
					/>
				</Route>
				<Route path="protection-and-safety" element={<PageProtectionAndSafety />} />
				<Route path="protection-and-safety-intro" element={<ProtectionAndSafetyIntro />} />
				<Route path="/articles/:articleId" element={<PageArticleDetail />} />
				<Route path="education-and-career" element={<PageEducationAndCareer />} />
				<Route path="rights-and-inclusion" element={<PageRightsAndInclusion />} />
				<Route path="health-and-motherhood" element={<PageHealthAndMotherhood />} />
				<Route path="global-projects" element={<PageGlobalProjects />} />
				<Route path="kindergartens" element={<PageKindergartens />} />

				<Route path="house-rule" element={<PageHouseRule />} />
				<Route element={<PageKuendigungs />}>
					<Route path="termination" element={<Kuendigungs />} />
					<Route
						path="employment-relationship-termination"
						element={<TerminationEmploymentRelationship />}
					/>
					<Route path="fitness-termination" element={<TerminationFitness />} />
					<Route path="insurance-termination" element={<TerminationInsurance />} />
					<Route path="mobilePhoneContract-termination" element={<TerminationMobilePhone />} />
					<Route path="apartment-termination" element={<TerminationApartment />} />
				</Route>
				<Route path="guide" element={<PageGuide />} />
				<Route path="guideDetail/:id" element={<PageGuideDetail />} />
				<Route path="CVEditor" element={<PageCVEditor />} />
			</Routes>
		</Suspense>
	);
}
export default App;
