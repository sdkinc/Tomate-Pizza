import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';

export default function RouteAuth(): JSX.Element {
	if (!Cookies.get('refreshToken')) {
		return <Navigate to="/SignIn" replace />;
	}

	return <Outlet />;
}
