import NavbarSubMenuDesktop from './NavbarSubMenuDesktop';
import NavbarTopDesktop from './NavbarTopDesktop';
import NavbarTopMobile from './NavbarTopMobile';
import NavbarSubMenuMobile from './NavbarSubMenuMobile';

const Navbar = (): JSX.Element => {
	const maxWidth = Math.max(window.outerWidth, window.outerHeight);
	const isMobile = maxWidth <= 1024;

	return (
		<>
			{isMobile ? <NavbarTopMobile /> : <NavbarTopDesktop />}
			{isMobile ? <NavbarSubMenuMobile /> : <NavbarSubMenuDesktop />}
		</>
	);
};

export default Navbar;
