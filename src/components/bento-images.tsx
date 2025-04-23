import Mission from "./mission";

export default function BentoImages() {
	return (
		<>
			<div id="mission" className="relative overflow-hidden">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-4 md:px-6 lg:px-8 py-16">
					{/* Left side - Bento Grid */}
					<div className="grid grid-cols-1 gap-6">
						<div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
							<img
								src="https://lf-web-assets.tokopedia-static.net/obj/tokopedia-web-sg/arael_v3/698dee75.jpg"
								alt="Tailor workshop"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
							<img
								src="https://lf-web-assets.tokopedia-static.net/obj/tokopedia-web-sg/arael_v3/4ee64abd.jpg"
								alt="Entrepreneur with laptop"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>

					{/* Right side - Mission Statement */}
					<div className="bg-white overflow-hidden flex flex-col justify-center">
						<Mission />
					</div>
				</div>
			</div>
		</>
	);
}
