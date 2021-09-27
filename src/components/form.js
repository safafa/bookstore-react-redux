/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ addBook }) => {
  const [book, setBook] = useState({});

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    addBook(book);
    event.preventDefault();
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input name="author" placeholder="author" value={book.author} onChange={(event) => handleChange(event)} />
      <input name="title" placeholder="title" value={book.title} onChange={(event) => handleChange(event)} />
      <input type="submit" value="Submit" />
    </form>

  );
};

Form.propTypes = { addBook: PropTypes.func.isRequired };

export default Form;
