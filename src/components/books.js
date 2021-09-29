import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import Book from './book';
import Form from './form';
import { addBook, removeBook, getBooks } from '../redux/books/books';
import '../css/books.css';

const Books = () => {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.booksReducer);

  const rmBook = (book) => {
    dispatch(removeBook(book));
  };

  const booklist = info.map((book) => (
    <Book
      title={book.title}
      category={book.category}
      rmBook={() => rmBook(book)}
      key={info.indexOf(book)}
    />
  ));

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const submitBookToStore = (book) => {
    const newBook = {
      item_id: uuidv4(), // make sure it's unique
      title: book.title,
      category: book.category,
    };
    dispatch(addBook(newBook));
  };

  return (
    <div>
      <ul className="booksList">
        {booklist}
      </ul>
      <Form addBook={submitBookToStore} />
    </div>
  );
};

export default Books;
