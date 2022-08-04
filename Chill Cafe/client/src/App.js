import { Route, Routes } from 'react-router-dom';
import './App.css';
import Filters from './components/Filters/Filters';
import Food from './components/Food/Food';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import SideNavigation from './components/SideNavigation/SideNavigation';
import TopNavigation from './components/TopNavigation/TopNavigation';


function App() {
	return (
		<>
			<TopNavigation />
			<SideNavigation />
			<Filters />

			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/food' element={<Food />} />
				</Routes>
			</main>

			<Footer />
		</>
	);
}

export default App;
