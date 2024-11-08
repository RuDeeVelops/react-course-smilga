import React from 'react';
import ReactDOM from 'react-dom/client';
import books from './books';
import Book from './Book';

import './index.css';

// parent component --------------------------------
const BookList = () => {
  const getBook = (id) => {
    const foundBook = books.find((book) => book.id === id);
    console.log(foundBook);
  };

  return (
    <>
      <h1>The Best Books</h1>{' '}
      <section className='bookList'>
        {books.map((book, index) => {
          return <Book {...book} key={book.id} index={index} getBook={getBook} />;
        })}
      </section>
    </>
  );
};

// render --------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
