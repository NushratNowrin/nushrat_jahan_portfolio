import {
	About,
	Contact,
	Hero,
} from "./components";
import Academic from "./components/Academic";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import ThreeD from "./components/ThreeD";

function App() {
	return (
		<div>
			<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed'>
				<Hero />
			</div>

			<About />
			<Services />
			<Skills />
			<Projects />
			<Academic />
			<Contact />
			<ThreeD />
		</div>
	);
}

export default App;
