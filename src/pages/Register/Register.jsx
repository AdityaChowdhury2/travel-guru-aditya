import { Link } from 'react-router-dom';
import useAuthHook from '../../Hooks/useAuthHook';
import SocialLogins from '../../components/SocialLogins/SocialLogins';

const Register = () => {
	const { createUser } = useAuthHook();
	const handleRegister = e => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const userData = {};
		for (const data of form.entries()) {
			userData[data[0]] = data[1];
		}
		createUser(userData)
			.then(res => {
				console.log(res.user);
			})
			.catch(err => {
				console.log(err.message);
			});
	};
	return (
		<div>
			<div className="max-w-xl mx-auto mt-20">
				<form
					onSubmit={handleRegister}
					className="md:p-12 p-4 md:px-12 md:py-8 border rounded"
				>
					<h2 className="text-white font-bold mb-12">Register</h2>
					<div className="flex flex-col gap-6">
						<div className="relative h-11 w-full min-w-[200px]">
							<input
								type="text"
								name="firstName"
								className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-yellow-600 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
								placeholder=" "
							/>
							<label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-yellow-600 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-600 peer-focus:after:scale-x-100 peer-focus:after:border-yellow-600 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
								First Name
							</label>
						</div>
						<div className="relative h-11 w-full min-w-[200px]">
							<input
								type="text"
								name="lastName"
								className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-yellow-600 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
								placeholder=" "
							/>
							<label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-yellow-600 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-600 peer-focus:after:scale-x-100 peer-focus:after:border-yellow-600 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
								Last Name
							</label>
						</div>
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

					<button className="mt-14 text-black font-medium rounded w-full bg-yellow-600 py-2 hover:bg-yellow-700 duration-200">
						Register
					</button>
					<p className="text-sm md:text-base text-center mt-4">
						Already have an account?{' '}
						<Link to={'/login'}>
							<span className="text-yellow-600 hover:underline hover:underline-offset-2 hover:cursor-pointer">
								Login
							</span>
						</Link>
					</p>
				</form>
				<div className="max-w-lg mx-auto  mt-8">
					<div className="divider  after:bg-white before:bg-white">Or</div>

					<SocialLogins />
				</div>
			</div>
		</div>
	);
};

export default Register;
