import "./App.css";
import BentoImages from "./components/bento-images";
import Business from "./components/business";
import Challenges from "./components/challenges";
import Hero from "./components/hero";
import {Navbar} from "./components/navbar";
import {Footer2} from "./components/ui/shadcnblocks-com-footer2";

function App() {
	return (
		<div>
			<Navbar />
			<div>
				<Hero />
				<Challenges />
				<BentoImages />
				<Business />
			</div>
			<Footer2 />
		</div>
	);
}

export default App;
