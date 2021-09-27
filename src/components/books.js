import React from 'react';
import Book from './book';

const Books = () => {
  const info = [
    {
      title: 'Book 1',
      author: 'Author1',
    },
    {
      title: 'Book 2',
      author: 'Author2',
    },
    {
      title: 'Book 3',
      author: 'Author3',
    },
    {
      title: 'Book 4',
      author: 'Author4',
    },
    {
      title: 'Book 5',
      author: 'Author5',
    },
  ];

  const booklist = info.map((book) => (
    <Book title={book.title} author={book.author} key={info.indexOf(book)} />));
  return (
    <ul>
      {booklist}
    </ul>
  );
};

export default Books;
