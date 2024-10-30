import { useRef, useState, useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import styles from './previewPdf.module.css';
import { selectGeneratedHtmlCode, selectIsLoading } from './selectors';
import Loading from '../../components/loading/Loading';

export default function PreviewPdf(): JSX.Element {
	const htmlCodeResume = useAppSelector(selectGeneratedHtmlCode);
	const contentRef = useRef<HTMLDivElement | null>(null);
	const [scale, setScale] = useState<number>(1);
	const isLoading = useAppSelector(selectIsLoading);

	useEffect(() => {
		const updateScale = (): void => {
			if (contentRef.current) {
				const height = contentRef.current.clientHeight;
				setScale(height / 1123);
			}
		};
		updateScale();
		window.addEventListener('resize', updateScale);
		return () => {
			window.removeEventListener('resize', updateScale);
		};
	}, [htmlCodeResume]);

	return (
		<div ref={contentRef} className={styles.mainBlock}>
			{isLoading ? (
				<Loading />
			) : (
				<div
					className={styles.content}
					style={{ transform: `scale(${scale})` }}
					dangerouslySetInnerHTML={{ __html: htmlCodeResume }}
				/>
			)}
		</div>
	);
}
