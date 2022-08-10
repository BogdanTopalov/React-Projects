import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/AddItem/AddItem';
import Drinks from './components/Drinks/Drinks';
import DrinksItemDetails from './components/Drinks/DrinksItemDetails';
import EditDrink from './components/Drinks/EditDrink';
import Filters from './components/Filters/Filters';
import EditFood from './components/Food/EditFood';
import Food from './components/Food/Food';
import FoodItemDetails from './components/Food/FoodItemDetails';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
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
						<Route element={<PrivateRoute />} >
							<Route path='/add' element={<AddItem />} />
							<Route path='/drinks/:drinkId/edit' element={<EditDrink />} />
							<Route path='/food/:foodId/edit' element={<EditFood />} />
						</Route>
						<Route path='/food' element={<Food />} />
						<Route path='/food/:foodId' element={<FoodItemDetails />} />
						<Route path='/drinks' element={<Drinks />} />
						<Route path='/drinks/:drinkId' element={<DrinksItemDetails />} />
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
