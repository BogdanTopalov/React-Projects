import { Routes, Route } from 'react-router-dom';
import './App.css';

import Catalogue from './components/Catalogue/Catalogue';
import CreateGame from './components/CreateGame/CreateGame';
import EditGame from './components/EditGame/EditGame';
import GameDetails from './components/GameDetails/GameDetails';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';

import { AuthProvider } from './context/AuthContext';
import { GameProvider } from './context/GameContext';


function App() {
    return (
        <AuthProvider>
            <div id="box">
                <Header />

                <GameProvider>
                    <main id="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path="/create" element={<CreateGame />} />
                            <Route path="/games/:gameId/edit" element={<EditGame />} />
                            <Route path="/catalogue" element={<Catalogue />} />
                            <Route path="/catalogue/:gameId" element={<GameDetails />} />
                        </Routes>
                    </main>
                </GameProvider>

            </div>
        </AuthProvider>
    );
}

export default App;
