import { ChevronLeft, ChevronRight } from "react-feather";
import { useState } from 'react';
import { UserProfile } from '../../data/profileData';

interface CarouselProps {
	userData: UserProfile;
}

const Carousel: React.FC<CarouselProps> = ({ userData }) => {
	const images = import.meta.glob('/src/data/dummy_photos/user_1/*.{png,jpg,jpeg}', { eager: true });
	const imageArray = Object.values(images);

	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
		);
	};

	return (
		<div className="relative mx-auto overflow-hidden w-[325px]">
			{/* Slides */}
			<div
				className="flex transition-transform ease-in-out duration-500"
				style={{
					transform: `translateX(-${currentIndex * 100}%)`,
				}}
			>
				{imageArray.map((image: any, index: number) => (
					<div key={index} className="w-full flex-shrink-0">
						<img
							src={image.default}
							alt={`Slide ${index}`}
							className="w-[325px] h-[600px] object-cover rounded-2xl"
						/>
					</div>
				))}
			</div>

			{/* Navigation */}
			<div className="absolute inset-0 flex items-center justify-between p-4">
				<button
					onClick={prevSlide}
					className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
				>
					<ChevronLeft size={30} />
				</button>
				<button
					onClick={nextSlide}
					className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
				>
					<ChevronRight size={30} />
				</button>
			</div>

			{/* Dots */}
			<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
				{imageArray.map((_, i) => (
					<div
						key={i}
						className={`w-3 h-3 rounded-full transition-all ${
							currentIndex === i ? 'bg-white p-1' : 'bg-white/50'
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Carousel;
