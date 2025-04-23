export default function Mission() {
	return (
		<div className="flex flex-col space-y-6 py-12 md:py-0 md:px-12">
			<div className="text-primary text-xl font-semibold">MISI KAMI</div>
			<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
				Kami ingin merobohkan tembok penghalang untuk memberikan
				kesempatan yang sama
			</h2>
			<p className="text-gray-600 text-lg">
				Tokopedia adalah perusahaan teknologi Indonesia dengan misi
				mencapai pemerataan ekonomi secara digital di Indonesia. Visi
				kami adalah membangun ekosistem super dimana siapa pun bisa
				memulai dan menemukan apa pun.
			</p>
			<div className="hidden md:block">
				<img
					src="https://lf-web-assets.tokopedia-static.net/obj/tokopedia-web-sg/arael_v3/1b163639.jpeg"
					alt="Tokopedia delivery partners"
					className="w-full max-w-md mt-6 rounded-lg"
				/>
			</div>
		</div>
	);
}
