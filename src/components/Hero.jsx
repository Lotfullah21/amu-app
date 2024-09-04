import hero1 from "../utils/images/hero-1.jpg";
import hero2 from "../utils/images/hero-2.jpg";
import hero3 from "../utils/images/hero-3.jpg";
import hero4 from "../utils/images/hero-4.jpg";
import { Link } from "react-router-dom";
const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
	return (
		<div className="grid lg:grid-cols-2 gap-24 items-center">
			<div>
				<h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
					We are bringing the uniqueness to your home
				</h1>
				<p className="mt-8 max-w-xl text-lg leading-8">
					Discover our exclusive range of furniture that blends tradition with
					modernity, adding a unique touch to every corner of your home.
				</p>
				<div className="mt-8">
					<Link to="/products" className="btn btn-primary text-lg uppercase">
						Our products
					</Link>
				</div>
			</div>
			{/* CAROUSEL */}
			<div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
				{carouselImages.map((image) => {
					return (
						<div key={image} className="carousel-item">
							<img
								src={image}
								className="rounded-box h-full w-80 object-cover"></img>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Hero;
