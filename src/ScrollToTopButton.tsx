import { useState, useEffect } from 'react';
import './scrollToTopButton.css';

const ScrollToTopButton: React.FC = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollPosition = (): void => {
		if (!showScroll && window.scrollY > window.innerHeight) {
			setShowScroll(true);
		} else if (showScroll && window.scrollY <= window.innerHeight) {
			setShowScroll(false);
		}
	};

	const scrollToTop = (): void => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		window.addEventListener('scroll', checkScrollPosition);
		return () => {
			window.removeEventListener('scroll', checkScrollPosition);
		};
	}, [showScroll]);

	return (
		<>
			{showScroll && (
				<div className="scrollTop" onClick={scrollToTop}>
					↑
				</div>
			)}
		</>
	);
};

export default ScrollToTopButton;
