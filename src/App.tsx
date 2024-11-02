import { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import RouteAuth from './utils/authRoutes/RouteAuth';
import PageHome from './views/PageHome';
import PrivateRoute from './utils/authRoutes/PrivateRoute';
import AdminPage from './views/AdminPage';
import Loading from './components/loading/Loading';
import PageCart from './views/PageCart';

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
				<Route path="/" element={<PageHome />} />
				<Route path="/menu/:category" element={<PageHome />} />
				<Route path="/cart" element={<PageCart />} />
				{/* Добавлен маршрут с категорией */}
			</Routes>
		</Suspense>
	);
}

export default App;
