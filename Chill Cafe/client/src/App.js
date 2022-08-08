import { Route, Routes } from 'react-router-dom';
import './App.css';
import Drinks from './components/Drinks/Drinks';
import Filters from './components/Filters/Filters';
import Food from './components/Food/Food';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import Reservation from './components/Reservation/Reservation';
import SideNavigation from './components/SideNavigation/SideNavigation';
import TopNavigation from './components/TopNavigation/TopNavigation';
import { AuthProvider } from './context/AuthContext';
import { MainProvider } from './context/MainContext';


function App() {
	return (
		<AuthProvider>
			<MainProvider>
				<TopNavigation />
				<SideNavigation />
				<Filters />

				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/food' element={<Food />} />
						<Route path='/drinks' element={<Drinks />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/logout' element={<Logout />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/reservation' element={<Reservation />} />
					</Routes>
				</main>

				<Footer />
			</MainProvider>
		</AuthProvider>
	);
}

export default App;
