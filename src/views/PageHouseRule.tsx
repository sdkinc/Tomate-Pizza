import FooterPage from '../components/footers/FooterPage';
import Cookies from '../components/cookies/Cookies';
import HouseRuleMoving from '../components/houseRule/HouseRuleMoving';
import HouseRuleParty from '../components/houseRule/HouseRuleParty';
import { useEffect } from 'react';
import HouseRuleRenovation from '../components/houseRule/HouseRuleRenovation';
import ScrollToTopButton from '../ScrollToTopButton';
import Navbar from '../components/navbars/Navbar';

function PageHouseRule(): JSX.Element {
	useEffect(() => {
		const hash = window.location.hash;
		if (hash) {
			const element = document.getElementById(hash.substring(1));
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, []);
	return (
		<>
			<Navbar />
			<div id="house-rule-moving">
				<HouseRuleMoving />
			</div>
			<div id="house-rule-renovation">
				<HouseRuleRenovation />
			</div>
			<div id="house-rule-party">
				<HouseRuleParty />
			</div>
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}
export default PageHouseRule;
