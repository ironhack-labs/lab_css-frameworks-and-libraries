import MUICard from './components/MUICard';
import { Navbar } from './components/NavBar';
import TailwindCard from './components/TailwindCard';

function App() {
  return (
		<>
			<Navbar/>
			<div className="min-h-screen flex flex-col md:flex-row gap-12 items-center justify-center">
				<TailwindCard />
				<MUICard />
			</div>
		</>
  );
}

export default App
