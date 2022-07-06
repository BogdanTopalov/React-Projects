import { Book } from "./Book"

export const BookList = (props) => {
    // Example 1
    // const bookElements = []
    // for (const book of props.books) {
    //     bookElements.push(
    //         <li>
    //             <article>
    //                 <h2>{book.title}</h2>
    //                 <div>Year: {book.year}</div>
    //                 <div>Price: {book.price}</div>
    //                 <footer>
    //                     <span>Author: {book.author}</span>
    //                 </footer>
    //             </article>
    //         </li>
    //     )
    // }

    // Example 2
    // const bookElements = props.books.map(book => (
    //     <li>
    //         <article>
    //             <h2>{book.title}</h2>
    //             <div>Year: {book.year}</div>
    //             <div>Price: {book.price}</div>
    //             <footer>
    //                 <span>Author: {book.author}</span>
    //             </footer>
    //         </article>
    //     </li>
    // ))

    // Example 3
    // const bookElements = props.books.map(book =>
    //     <Book
    //         title={book.title}
    //         year={book.year}
    //         price={book.price}
    //         author={book.author}
    //     />
    // )

    // Example 4
    const bookElements = props.books.map((book, uniqueID) => <Book key={uniqueID} {...book}/>)

    return (
        <ul>
            {bookElements}
        </ul>
    )
}