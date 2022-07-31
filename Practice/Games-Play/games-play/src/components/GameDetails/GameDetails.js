import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { GameContext } from '../../context/GameContext'
import { createComment } from '../../services/commentService'
import { getOne, remove } from '../../services/gameService'


const GameDetails = () => {
    const { addComment, removeGame } = useContext(GameContext)
    const { gameId } = useParams()
    const [currentGame, setCurrentGame] = useState({})
    const navigate = useNavigate()


    useEffect(() => {
        getOne(gameId)
            .then(result => {
                setCurrentGame(result)
            })
    }, [gameId])

    const addCommentHandler = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const comment = formData.get('comment')

        createComment(gameId, comment)
            .then(result => {
                addComment(gameId, result)
            })
    }

    const gameDeleteHandler = () => {
        const confirmation = window.confirm('Are you sure you want to delete this game?')

        if (confirmation) {
            remove(gameId)
                .then(() => {
                    removeGame(gameId)
                    navigate('/catalogue')
                })
        }
    }


    return (
        <section id="game-details">
            <h1>Game Details</h1>

            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={currentGame.imageUrl} alt="img"/>
                    <h1>{currentGame.title}</h1>
                    <span className="levels">MaxLevel: {currentGame.mas_level}</span>
                    <p className="type">{currentGame.category}</p>
                </div>
                <p className="text">
                    {currentGame.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* {currentGame.comments?.map(x => 
                            <li className="comment">
                                <p>{x}</p>
                            </li>
                        )} */}
                    </ul>

                    {/* {!currentGame.comments &&
                        <p className="no-comment">No comments.</p>
                    } */}
                </div>
                
                <div className="buttons">
                    <Link to={`/games/${gameId}/edit`} className="button">
                        Edit
                    </Link>
                    <button onClick={gameDeleteHandler} className="button">
                        Delete
                    </button>
                </div>
            </div>
            
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Add Comment"
                    />
                </form>
            </article>
        </section>
    )
}

export default GameDetails