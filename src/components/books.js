import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import Book from './book';
import Form from './form';
import { addBook } from '../redux/books/books';

const Books = () => {
  if (JSON.parse(localStorage.getItem('storeBook')) === null) {
    const initInfo = [
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
    localStorage.setItem('storeBook', JSON.stringify(initInfo));
  }

  const dispatch = useDispatch();

  const submitBookToStore = (title, author) => {
    const newBook = {
      id: uuidv4(), // make sure it's unique
      title,
      author,
    };
    dispatch(addBook(newBook));
  };

  const [info, setInfo] = useState(JSON.parse(localStorage.getItem('storeBook')));

  const rmBook = (book) => {
    const newInfo = info.filter((livre) => livre !== book);
    localStorage.setItem('storeBook', JSON.stringify(newInfo));
    setInfo(JSON.parse(localStorage.getItem('storeBook')));
  };

  const booklist = info.map((book) => (
    <Book
      title={book.title}
      author={book.author}
      rmBook={() => rmBook(book)}
      key={info.indexOf(book)}
    />
  ));

  return (
    <div>
      <Form addBook={submitBookToStore} />
      <ul>
        {booklist}
      </ul>
    </div>
  );
};

export default Books;
