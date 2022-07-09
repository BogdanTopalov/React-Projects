import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { BookList } from './components/BookList'
import { CharacterList } from './components/CharacterList';


function App() {
  const books = [
    { "title": "Northanger Abbey", "author": "Austen, Jane", "year": 1814, "price": 18.2 },
    { "title": "War and Peace", "author": "Tolstoy, Leo", "year": 1865, "price": 12.7 },
    { "title": "Anna Karenina", "author": "Tolstoy, Leo", "year": 1875, "price": 13.5 },
    { "title": "Mrs. Dalloway", "author": "Woolf, Virginia", "year": 1925, "price": 25 },
    { "title": "The Hours", "author": "Cunnningham, Michael", "year": 1999, "price": 12.35 },
    { "title": "Huckleberry Finn", "author": "Twain, Mark", "year": 1865, "price": 5.76 },
    { "title": "Bleak House", "author": "Dickens, Charles", "year": 1870, "price": 5.75 },
    { "title": "Tom Sawyer", "author": "Twain, Mark", "year": 1862, "price": 7.75 },
    { "title": "A Room of One's Own", "author": "Woolf, Virginia", "year": 1922, "price": 29 },
    { "title": "Harry Potter", "author": "Rowling, J.K.", "year": 2000, "price": 19.95 },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CharacterList />
        <Counter />
        <BookList books={books} />
      </header>
    </div>
  );
}

export default App;
