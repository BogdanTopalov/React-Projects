import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Catalogue from './components/Catalogue/Catalogue';
import CreateGame from './components/CreateGame/CreateGame';
import GameDetails from './components/GameDetails/GameDetails';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import { AuthContext } from './context/AuthContext';
import * as gameService from './services/gameService'

function App() {
    const [games, setGames] = useState([])
    const [auth, setAuth] = useState({})

    const userLogin = (authData) => {
        setAuth(authData)
    }
    
    const addComment = (gameId, comment) => {
        setGames(state => {
            const game = state.find(x => x._id == gameId)

            const comments = game.comments || []
            comments.push(comment)

            return [
                ...state.filter(x => x._id !== gameId),
                {...game, comments}
            ]
        })
    }
    
    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result)
            })
    }, [])

    return (
        <AuthContext.Provider value={{user: auth, userLogin}}>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home games={games} />}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/register" element={<Register />}/>
                        <Route path="/create" element={<CreateGame />}/>
                        <Route path="/catalogue" element={<Catalogue games={games} />}/>
                        <Route path="/catalogue/:gameId" element={<GameDetails games={games} addComment={addComment}/>} />
                    </Routes>
                </main>
                
            </div>
        </AuthContext.Provider>
    );
}

export default App;
