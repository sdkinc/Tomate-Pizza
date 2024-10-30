import Cookies from 'js-cookie';
import { Outlet } from 'react-router-dom';
import Logged from '../../components/logged/Logged';

export default function RouteNotAuth(): JSX.Element {
	if (Cookies.get('refreshToken')) {
		return <Logged />;
	}

	return <Outlet />;
}
