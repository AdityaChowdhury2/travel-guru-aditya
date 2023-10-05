import { useLocation, useNavigate } from 'react-router-dom';
import useAuthHook from '../../Hooks/useAuthHook';

const SocialLogins = () => {
	const { googleSignIn } = useAuthHook();
	const location = useLocation();
	const navigate = useNavigate();
	const handleGoogleSignIn = () => {
		googleSignIn()
			.then(res => {
				console.log(res.user);
				navigate(location?.state || '/');
			})
			.catch(err => {
				console.log(err.message);
			});
	};
	return (
		<>
			<div className="space-y-4">
				<button className="w-full bg-transparent border-yellow-600 border-2 py-3 rounded-3xl relative text-white font-medium">
					<img
						src={'https://i.ibb.co/xFcWfP2/fb.png'}
						alt=""
						className="absolute w-10 bottom-1 left-2"
					/>
					Continue with Facebook
				</button>
				<button
					onClick={handleGoogleSignIn}
					className="w-full bg-transparent border-yellow-600 border-2 py-3 rounded-3xl relative text-white font-medium"
				>
					<img
						src={'https://i.ibb.co/fGG5MSH/google.png'}
						alt=""
						className="absolute w-8 bottom-2 left-2"
					/>
					Continue with Google
				</button>
			</div>
		</>
	);
};

export default SocialLogins;
