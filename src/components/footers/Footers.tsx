import 'react';
import FooterPage from './FooterPage';
import FooterHome from './FooterHome';

const Footers = (): JSX.Element => {
	const maxWidth = Math.max(window.outerWidth, window.outerHeight);
	const isMobile = maxWidth <= 1280;

	return <>{isMobile ? <FooterPage /> : <FooterHome />}</>;
};

export default Footers;
