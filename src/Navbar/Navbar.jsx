import { Link, NavLink /* useLocation */ } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { RiMenu3Fill } from 'react-icons/ri';
import useAuthHook from '../Hooks/useAuthHook';
const Navbar = () => {
	// const location = useLocation();
	// const isLogoDark =
	// 	location.pathname === '/login' || location.pathname === '/register';
	const { user, logout } = useAuthHook();
	const handleLogOut = () => {
		logout().then(() => console.log('Successfully logged out'));
	};
	const navLinks = (
		<>
			<li className="">
				<NavLink
					to={'/news'}
					className={({ isActive }) =>
						isActive
							? ' text-white pb-1 border-b-4 rounded-xl border-yellow-600'
							: ' hover:text-white duration-300 ease-in-out'
					}
				>
					News
				</NavLink>
			</li>
			<li>
				<NavLink
					to={'/destination'}
					className={({ isActive }) =>
						isActive
							? ' text-white pb-1 border-b-4 rounded-xl border-yellow-600'
							: ' hover:text-white duration-300 ease-in-out'
					}
				>
					Destination
				</NavLink>
			</li>
			<li>
				<NavLink
					to={'/blog'}
					className={({ isActive }) =>
						isActive
							? ' text-white pb-1 border-b-4 rounded-xl border-yellow-600'
							: ' hover:text-white duration-300 ease-in-out'
					}
				>
					Blog
				</NavLink>
			</li>
			<li>
				<NavLink
					to={'/contact'}
					className={({ isActive }) =>
						isActive
							? ' text-white pb-1 border-b-4 rounded-xl border-yellow-600'
							: ' hover:text-white duration-300 ease-in-out'
					}
				>
					Contact
				</NavLink>
			</li>

			<li>
				{user ? (
					<button onClick={handleLogOut}>Logout</button>
				) : (
					<Link
						to={'/login'}
						className="bg-yellow-600 py-3 px-7 text-black font-medium duration-400 ease-linear hover:text-white hover:bg-transparent"
					>
						Login
					</Link>
				)}
			</li>
		</>
	);
	return (
		<>
			<div className="container grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 items-center">
				<Link to={'/'} className="h-[56px] ">
					{/* {isLogoDark ? (
						<img
							src={'https://i.ibb.co/bd0QgVH/logo.png'}
							alt=""
							className="h-full"
						/>
					) : ( */}
					<img
						src={'https://i.ibb.co/wSw3Nph/logo-white.png'}
						alt=""
						className="h-full"
					/>
					{/* )} */}
				</Link>
				<div className="lg:col-span-2 hidden  md:flex">
					<div className="relative w-4/5 text-white ">
						<input
							type="text"
							placeholder="Search your Destination"
							className="input pl-8 bg-slate-50 bg-opacity-25 input-bordered w-full max-w-xs  focus:outline-none"
						/>
						<div className="absolute top-1/3 left-2">
							<FiSearch size={18} />
						</div>
					</div>
				</div>
				<div className="lg:col-span-3 flex justify-end">
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<RiMenu3Fill color="white" size={18} />
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							{navLinks}
						</ul>
					</div>
					<ul className="lg:flex items-center gap-12 menu menu-horizontal hidden">
						{navLinks}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
