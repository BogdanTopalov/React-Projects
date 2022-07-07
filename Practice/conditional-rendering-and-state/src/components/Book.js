import { useEffect, useState } from "react"
import styles from './Book.module.css'

export const Book = (props) => {
    const [highlghted, setHighlighted] = useState(false)
    const [deleted, setDeleted] = useState(false)
    
    useEffect(() => {
        
    }, [])
    
    const clickHandler = () => {
        setHighlighted(state => !state)
    }

    const deleteHandler = () => {
        setDeleted(true)
    }
    
    let style = {}
    if (highlghted) {
        style.backgroundColor = 'blue'
    }

    if (deleted) {
        return
    }
    
    return (
        <li style={style} className={styles['book']}>
            <article>
                <h2>{props.title}</h2>
                <div>Year: {props.year}</div>
                <div>Price: {props.price}</div>
                <footer>
                    <span>Author: {props.author}</span>
                </footer>
                <button onClick={clickHandler}>Highlight</button>
                <button onClick={deleteHandler}>Delete</button>
            </article>
        </li>
    )
}