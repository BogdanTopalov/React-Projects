import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GameContext } from '../../context/GameContext'


const GameDetails = ({ addComment }) => {
    const { games } = useContext(GameContext)
    const { gameId } = useParams()
    const [comment, setComment] = useState({
        username: '',
        comment: '',
    })

    const game = games.find(x => x._id == gameId)

    const addCommentHandler = (e) => {
        e.preventDefault()

        const commentResult = `${comment.username}: ${comment.comment}`

        addComment(gameId, commentResult)
    }

    const onChange = (e) => {
        setComment(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>

            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.mas_level}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">
                    {game.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {game.comments?.map(x => 
                            <li className="comment">
                                <p>{x}</p>
                            </li>
                        )}
                    </ul>

                    {!game.comments &&
                        <p className="no-comment">No comments.</p>
                    }
                </div>
                
                <div className="buttons">
                    <a href="#" className="button">
                        Edit
                    </a>
                    <a href="#" className="button">
                        Delete
                    </a>
                </div>
            </div>
            
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <input
                        type="text"
                        name="username"
                        placeholder="John Doe"
                        onChange={onChange}
                        value={comment.username}
                    />
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        onChange={onChange}
                        value={comment.comment}
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