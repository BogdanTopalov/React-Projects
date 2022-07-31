import { createContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAll } from "../services/gameService";

export const GameContext = createContext()

export const GameProvider = ({
    children
}) => {
    const gameReducer = (state, action) => {
        switch (action.type) {
            case "ADD_GAMES":
                return [...action.payload]
            case "ADD_GAME":
                return [...state, action.payload]
            case "EDIT_GAME":
                return state.map(x => x._id === action.gameId ? action.payload : x)
            default:
                return state
        }
    }

    // const [games, setGames] = useState([])
    const [games, dispatch] = useReducer(gameReducer, [])
    const navigate = useNavigate()

    useEffect(() => {
        getAll()
            .then(result => {
                // setGames(result)
                dispatch({
                    type: 'ADD_GAMES',
                    payload: result
                })
            })
    }, [])

    const addGame = (gameData) => {
        // setGames(state => [
        //     ...state,
        //     gameData
        // ])
        dispatch({
            type: 'ADD_GAME',
            payload: gameData
        })

        navigate('/catalogue')
    }

    const editGame = (gameId, gameData) => {
        // setGames(state => state.map(x => x._id === gameId ? gameData : x))
        dispatch({
            type: 'EDIT_GAME',
            payload: gameData,
            gameId
        })
    }

    const addComment = (gameId, comment) => {
        // setGames(state => {
        //     const game = state.find(x => x._id === gameId)

        //     const comments = game.comments || []
        //     comments.push(comment)

        //     return [
        //         ...state.filter(x => x._id !== gameId),
        //         { ...game, comments }
        //     ]
        // })
    }

    return (
        <GameContext.Provider value={{games, addGame, editGame, addComment}}>
            {children}
        </GameContext.Provider>
    )
}