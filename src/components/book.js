/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import '../css/book.css';

const Book = ({ title, category, rmBook }) => (
  <li className="bookCard">
    <span className="category">{category}</span>
    <h1 className="titke">{title}</h1>
    <ul className="buttonsList">
      <li><button type="button" className="button">Comments</button></li>
      <li><button type="button" className="button side-border" onClick={rmBook}>Remove</button></li>
      <li><button type="button" className="button">Edit</button></li>
    </ul>
  </li>
);
Book.propTypes = { title: PropTypes.string.isRequired, category: PropTypes.string.isRequired };
Book.propTypes = { rmBook: PropTypes.func.isRequired };
export default Book;
