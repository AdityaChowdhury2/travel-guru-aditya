import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
const Root = () => {
	return (
		<div className="bg-image font-montserrat h-screen bg-cover bg-no-repeat bg-center mx-auto bg-black bg-blend-overlay bg-opacity-70 ">
			<div className="pt-10 px-4">
				<Navbar />
				<Outlet />
			</div>
		</div>
	);
};

export default Root;
