export default function Hero() {
	return (
		<div
			id="hero"
			className="w- h-screen relative flex items-center justify-center"
		>
			<div className="w-full h-full absolute z-[-5]">
				<img
					src="/tokopedia-tower.jpg"
					className="object-cover w-full h-[105vh]"
					alt="hero"
				/>
			</div>
			{/* overlay */}
			<div className="absolute inset-0 z-[-5] bg-black opacity-70 h-[105vh]"></div>

			<h1 className="text-primary z-50 text-3xl lg:text-7xl font-bold">
				Beli apa aja di Tokopedia
			</h1>
		</div>
	);
}
