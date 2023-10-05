import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
const destinations = [
	{
		id: 1,
		place: "Cox's Bazar",
		description:
			"Cox's Bazar is a popular tourist destination in Bangladesh known for its long natural sea beach, which stretches for miles. It offers beautiful views of the Bay of Bengal and is a great place for beach lovers. The town also has various shops and markets to explore.",
		image: 'https://i.ibb.co/QQW9G1W/Sajek.png',
	},
	{
		id: 2,
		place: 'Sreemangal',
		description:
			"Sreemangal is known as the 'Tea Capital of Bangladesh' and is famous for its lush green tea gardens. It's a serene place with abundant natural beauty. Visitors can explore the tea estates, taste fresh tea, and enjoy the peaceful surroundings.",
		image: 'https://i.ibb.co/93M6m0r/Sreemongol.png',
	},
	{
		id: 3,
		place: 'Sundarbans',
		description:
			"The Sundarbans is the largest mangrove forest in the world and a UNESCO World Heritage Site. It's home to the Bengal tiger and a variety of wildlife species. Visitors can take boat trips to explore the forest and its unique ecosystem.",
		image: 'https://i.ibb.co/QD6DZgM/sundorbon.png',
	},
];
const Home = () => {
	const initialDestination = destinations[0];

	const [active, setActive] = useState(initialDestination);
	const nextButtonHandler = () => {
		const ActiveDestinationID = destinations.findIndex(
			destination => destination.id === active.id
		);
		const nextActiveDestinationID =
			(ActiveDestinationID + 1) % destinations.length;
		const nextActiveDestination = destinations[nextActiveDestinationID];

		// console.log(nextActiveDestination);
		setActive(nextActiveDestination);
		// console.log(nextActiveDestinationID);
	};
	const prevButtonHandler = () => {
		const ActiveDestinationID = destinations.findIndex(
			destination => destination.id === active.id
		);
		const prevActiveDestinationID =
			(ActiveDestinationID - 1 + destinations.length) % destinations.length;
		const prevActiveDestination = destinations[prevActiveDestinationID];
		// console.log(prevActiveDestination);
		// console.log(prevActiveDestinationID);
		setActive(prevActiveDestination);
	};

	return (
		<div>
			<Helmet>
				<title>Travel Guru | Home</title>
			</Helmet>
			<section className="mt-16 flex container gap-4">
				<div className="w-7/12 space-y-10">
					<h1 className="font-bebas-neue text-8xl text-white">
						{active?.place}
					</h1>
					<p className="max-w-xl text-justify text-white">
						{active?.description.length > 150
							? active.description.slice(0, 150) + '...'
							: active.description}
					</p>
					<div>
						<Link to={`booking/${active.id}`}>
							<button className="flex  gap-3 items-center px-7 py-3 text-black font-medium rounded bg-yellow-600 hover:bg-yellow-700">
								Booking
								<BsArrowRight />
							</button>
						</Link>
					</div>
				</div>
				<div className="flex-1">
					<div className="carousel carousel-center max-w-2xl p-4 space-x-4 rounded-box ">
						<div id="slide1" className="carousel-item">
							<img
								src="https://i.ibb.co/QQW9G1W/Sajek.png"
								className="rounded-box w-[20vw] h-[50vh]"
							/>
						</div>
						<div id="slide2" className="carousel-item">
							<img
								src="https://i.ibb.co/QD6DZgM/sundorbon.png"
								className="rounded-box w-[20vw] h-[50vh]"
							/>
						</div>
						<div id="slide3" className="carousel-item">
							<img
								src="https://i.ibb.co/93M6m0r/Sreemongol.png"
								className="rounded-box w-[20vw] h-[50vh]"
							/>
						</div>
					</div>
				</div>
			</section>
			<div className="flex justify-center gap-4">
				<a
					onClick={prevButtonHandler}
					href={`#slide${active.id}`}
					className="btn btn-circle"
				>
					❮
				</a>
				{/* <a href="#slide1" className="btn btn-circle">
					❯
				</a> */}
				<a
					onClick={nextButtonHandler}
					href={`#slide${active.id}`}
					className="btn btn-circle"
				>
					❯
				</a>
			</div>
		</div>
	);
};

export default Home;
