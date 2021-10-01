/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/form.css';

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
    <section className="formsection">
      <div className="linef" />
      <h1 className="formTitle"> Add new Book </h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input className="titleInput" name="title" placeholder="title" value={book.title} onChange={(event) => handleChange(event)} />
        <input className="categoryInput" name="category" placeholder="category" value={book.category} onChange={(event) => handleChange(event)} />
        <button type="submit" value="Submit" className="formSubmit">ADD BOOK</button>
      </form>
    </section>
  );
};

Form.propTypes = { addBook: PropTypes.func.isRequired };

export default Form;
