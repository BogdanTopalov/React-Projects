import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Catalogue from './components/Catalogue/Catalogue';
import CreateGame from './components/CreateGame/CreateGame';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import * as gameService from './services/gameService'

function App() {
    
    const [games, setGames] = useState([])
    
    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result)
            })
    }, [])

    return (
        <div id="box">

            {/* Navigation */}
            <Header />

            {/* Main Content */}
            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home games={games} />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/create" element={<CreateGame />}/>
                    <Route path="/catalogue" element={<Catalogue games={games} />}/>
                </Routes>
            </main>
            
            {/*Home Page*/}

            {/* Login Page ( Only for Guest users ) */}


            {/* Register Page ( Only for Guest users ) */}


            {/* Create Page ( Only for logged-in users ) */}


            {/* Edit Page ( Only for the creator )*/}


            {/*Details Page*/}


            {/* Catalogue */}

        </div>
    );
}

export default App;
