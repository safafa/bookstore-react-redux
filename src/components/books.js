import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import Book from './book';
import Form from './form';
import { addBook, removeBook } from '../redux/books/books';
import store from '../redux/configureStore';

const Books = () => {
  const [info, setInfo] = useState(store.getState().booksReducer);
  const dispatch = useDispatch();

  const submitBookToStore = (book) => {
    const newBook = {
      id: uuidv4(), // make sure it's unique
      title: book.title,
      author: book.author,
    };
    dispatch(addBook(newBook));
    localStorage.setItem('storeBook', JSON.stringify(store.getState().booksReducer));
    setInfo(JSON.parse(localStorage.getItem('storeBook')));
  };

  const rmBook = (book) => {
    dispatch(removeBook(book));
    localStorage.setItem('storeBook', JSON.stringify(store.getState().booksReducer));
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
