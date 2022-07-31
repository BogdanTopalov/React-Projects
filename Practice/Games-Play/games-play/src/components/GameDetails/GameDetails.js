import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GameContext } from '../../context/GameContext'
import { createComment } from '../../services/commentService'
import { getOne } from '../../services/gameService'


const GameDetails = () => {
    const { addComment } = useContext(GameContext)
    const { gameId } = useParams()
    const [currentGame, setCurrentGame] = useState({})


    useEffect(() => {
        getOne(gameId)
            .then(result => {
                setCurrentGame(result)
            })
    }, [])

    const addCommentHandler = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const comment = formData.get('comment')

        createComment(gameId, comment)
            .then(result => {
                addComment(gameId, result)
            })
    }


    return (
        <section id="game-details">
            <h1>Game Details</h1>

            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={currentGame.imageUrl} />
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
                    <Link to={'/'} className="button">
                        Delete
                    </Link>
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