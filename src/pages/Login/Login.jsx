import { Link } from 'react-router-dom';
import useAuthHook from '../../Hooks/useAuthHook';

const Login = () => {
	const { login } = useAuthHook();
	const handleLogin = e => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const userData = {};
		for (const data of form.entries()) {
			userData[data[0]] = data[1];
		}
		login(userData)
			.then(res => {
				console.log(res.user);
			})
			.catch(err => {
				console.log(err.message);
			});
	};
	return (
		<>
			<div className="max-w-xl mx-auto mt-20">
				<form onSubmit={handleLogin} className="md:p-12 p-3 border rounded">
					<h2 className="text-white font-bold mb-12">Login</h2>
					<div className="flex flex-col gap-6">
						<div className="relative h-11 w-full min-w-[200px]">
							<input
								type="email"
								name="email"
								className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-yellow-600 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
								placeholder=" "
							/>
							<label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-yellow-600 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-600 peer-focus:after:scale-x-100 peer-focus:after:border-yellow-600 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
								Email
							</label>
						</div>
						<div className="relative h-11 w-full min-w-[200px]">
							<input
								type="password"
								name="password"
								className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-yellow-600 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
								placeholder=" "
							/>
							<label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-yellow-600 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-600 peer-focus:after:scale-x-100 peer-focus:after:border-yellow-600 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
								Password
							</label>
						</div>
					</div>
					<div className="flex mt-4 items-center justify-between">
						<div className="space-x-2 text-sm md:text-base">
							<input type="checkbox" name="" id="checkbox" />
							<label htmlFor="checkbox">Remember Me</label>
						</div>
						<div className="text-sm md:text-base">
							<p className="text-yellow-600 hover:underline hover:underline-offset-2 hover:cursor-pointer">
								Forget Password
							</p>
						</div>
					</div>
					<button className="mt-14 text-black font-medium rounded w-full bg-yellow-600 py-2 hover:bg-yellow-700 duration-200">
						Login
					</button>
					<p className="text-sm md:text-base text-center mt-4">
						Don&apos;t have an account?{' '}
						<Link to={'/register'}>
							<span className="text-yellow-600 hover:underline hover:underline-offset-2 hover:cursor-pointer">
								Create an account
							</span>
						</Link>
					</p>
				</form>
				<div className="max-w-lg mx-auto  mt-8">
					<div className="divider  after:bg-white before:bg-white">Or</div>

					<div className="space-y-4">
						<button className="w-full bg-transparent border-yellow-600 border-2 py-3 rounded-3xl relative text-white font-medium">
							<img
								src={'https://i.ibb.co/xFcWfP2/fb.png'}
								alt=""
								className="absolute w-10 bottom-1 left-2"
							/>
							Continue with Facebook
						</button>
						<button className="w-full bg-transparent border-yellow-600 border-2 py-3 rounded-3xl relative text-white font-medium">
							<img
								src={'https://i.ibb.co/fGG5MSH/google.png'}
								alt=""
								className="absolute w-8 bottom-2 left-2"
							/>
							Continue with Google
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
