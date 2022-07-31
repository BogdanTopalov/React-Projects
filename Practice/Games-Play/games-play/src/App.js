import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
import { GameContext } from './context/GameContext';
import * as gameService from './services/gameService'

function App() {
    const [games, setGames] = useState([])
    
    const navigate = useNavigate()



    const addGame = (gameData) => {
        setGames(state => [
            ...state,
            gameData
        ])

        navigate('/catalogue')
    }

    const editGame = (gameId, gameData) => {
        setGames(state => state.map(x => x._id === gameId ? gameData : x))
    }

    const addComment = (gameId, comment) => {
        setGames(state => {
            const game = state.find(x => x._id === gameId)

            const comments = game.comments || []
            comments.push(comment)

            return [
                ...state.filter(x => x._id !== gameId),
                { ...game, comments }
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
        <AuthProvider>
            <div id="box">
                <Header />

                <GameContext.Provider value={{games, addGame, editGame}}>
                    <main id="main-content">
                        <Routes>
                            <Route path="/" element={<Home games={games} />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path="/create" element={<CreateGame />} />
                            <Route path="/games/:gameId/edit" element={<EditGame />} />
                            <Route path="/catalogue" element={<Catalogue />} />
                            <Route path="/catalogue/:gameId" element={<GameDetails addComment={addComment} />} />
                        </Routes>
                    </main>
                </GameContext.Provider>

            </div>
        </AuthProvider>
    );
}

export default App;
