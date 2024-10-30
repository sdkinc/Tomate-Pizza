import 'react';
import NavbarTopMobile from './NavbarTopMobile';
import NavbarSubMenuMobile from './NavbarSubMenuMobile';
import NavbarHome from './NavbarHome';

function NavbarHomeMain(): JSX.Element {
	const maxWidth = Math.max(window.outerWidth, window.outerHeight);
	const isMobile = maxWidth <= 1024;

	return (
		<>
			{isMobile ? (
				<>
					<NavbarTopMobile />
					<NavbarSubMenuMobile />
				</>
			) : (
				<NavbarHome />
			)}
		</>
	);
}

export default NavbarHomeMain;
