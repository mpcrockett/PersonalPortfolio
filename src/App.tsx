import { useEffect, useState } from "react";
import "./App.css";
import useMediaQuery from "./hooks/useMediaQuery";
import NavBar from "./scenes/NavBar";
import DotGroup from "./components/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import Skills from "./scenes/Skills";
import Projects from "./scenes/Projects";
import About from "./scenes/About";
import Contact from "./scenes/Contact";

function App() {
	const [selectedPage, setSelectedPage] = useState<string>("home");
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
	const isDesktop = useMediaQuery("(min-width: 1060px)");

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) setIsTopOfPage(true);
			if (window.scrollY !== 0) setIsTopOfPage(false);
		};
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className='app bg-deep-blue'>
			<NavBar
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
				isTopOfPage={isTopOfPage}
			/>
			<div className='w-5/6 mx-auto md:h-full'>
				{isDesktop && (
					<DotGroup
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
				)}
				<Landing setSelectedPage={setSelectedPage} />
			</div>
			<LineGradient width={"w-full"} />
			<div className='w-5/6 mx-auto md:h-full'>
				<About />
			</div>
			<LineGradient width={"w-full"} />
			<div className='w-5/6 mx-auto md:h-full'>
				<Skills />
			</div>
			<LineGradient width={"w-full"} />
			<div className='w-5/6 mx-auto'>
				<Projects />
			</div>
      <LineGradient width={"w-full"} />
			<div className='w-5/6 mx-auto'>
				<Contact />
			</div>
		</div>
	);
}

export default App;
