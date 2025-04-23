import {BadgeCent, ShoppingBagIcon, Truck} from "lucide-react";

type CardData = {
	title: string;
	description: string;
	icon: React.ReactNode;
};

const cardData: CardData[] = [
	{
		title: "E-Commerce",
		description:
			"Tokopedia adalah platform e-commerce terkemuka di Indonesia yang memungkinkan pengguna untuk membeli dan menjual produk secara online.",
		icon: <ShoppingBagIcon className="scale-125" />,
	},
	{
		title: "Logictics & Fulfillment",
		description:
			"Pengiriman menjadi mudah dengan sistem logistik dan fulfillment yang terintegrasi.",
		icon: <Truck className="scale-125" />,
	},
	{
		title: "Teknologi Periklanan & Pemasaran",
		description:
			'Tokopedia menyediakan platform teknologi periklanan untuk membantu penjual mempromosikan bisnis mereka, menarik lebih banyak konsumen, dan meningkatkan penjualan lewat layanan Pay for Performance "P4P" Advertising, Display Advertising, dan Customised Marketing Packages.',
		icon: <BadgeCent className="scale-125" />,
	},
];

export default function Business() {
	return (
		<div
			id="business"
			className="w-full flex flex-col items-center justify-center py-40 max-w-7xl mx-auto"
		>
			<h4 className="text-primary font-semibold text-xl">BISNIS KAMI</h4>
			<h3 className="text-xl px-4 lg:text-5xl text-center font-semibold pt-8">
				Kami membangun ekosistem super dengan infrastruktur menyeluruh
				untuk mempermudah masyarakat Indonesia
			</h3>

			<div className="grid grid-cols-1 px-4 md:grid-cols-3 gap-12 pt-12 lg:pt-24">
				{cardData.map((card, index) => (
					<Card key={index} {...card} />
				))}
			</div>
		</div>
	);
}

function Card({title, description, icon}: CardData) {
	return (
		<div className="bg-white rounded-xl p-6 border border-gray-200 h-auto py-8 ">
			<div className="text-primary rounded-full flex items-center justify-center w-16 h-16 border text-2xl font-semibold mb-4">
				{icon}
			</div>
			<h4 className="text-xl font-semibold">{title}</h4>
			<p className="text-gray-600 text-lg pt-2">{description}</p>
		</div>
	);
}
