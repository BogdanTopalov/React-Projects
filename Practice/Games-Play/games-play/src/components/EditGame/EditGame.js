import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GameContext } from "../../context/GameContext"
import { edit, getOne } from "../../services/gameService"


const EditGame = () => {
    const [currentGame, setCurrentGame] = useState({})
    const {editGame} = useContext(GameContext)
    const {gameId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getOne(gameId)
            .then(gameData => {
                setCurrentGame(gameData)
            })
    }, [gameId])

    const onSubmit = (e) => {
        e.preventDefault()

        const gameData = Object.fromEntries(new FormData(e.target))

        edit(gameId, gameData)
            .then(result => {
                editGame(gameId, result)
                navigate(`/catalogue/${result._id}`)
            })
    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" defaultValue={currentGame.title} />
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" defaultValue={currentGame.category} />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        defaultValue={currentGame.maxLevel}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={currentGame.imageUrl} />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={currentGame.summary} />
                    <input className="btn submit" type="submit" defaultValue="Edit Game" />
                </div>
            </form>
        </section>
    )
}

export default EditGame