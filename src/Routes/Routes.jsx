import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';

import Home from '../pages/Home/Home';
import News from '../pages/NotWorking/News/News';
import Destination from '../pages/NotWorking/Destination/Destination';
import Blog from '../pages/NotWorking/Blog/Blog';
import Contact from '../pages/NotWorking/Contact/Contact';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Booking from '../pages/Booking/Booking';
import PrivateRoutes from './PrivateRoutes';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/news',
				element: <News />,
			},
			{
				path: '/destination',
				element: <Destination />,
			},
			{
				path: '/blog',
				element: <Blog />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},

			{
				path: '/booking/:id',
				element: (
					<PrivateRoutes>
						<Booking />
					</PrivateRoutes>
				),
			},
		],
	},
]);

export default routes;
