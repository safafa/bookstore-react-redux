/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, rmBook }) => (
  <li>
    <span>{title}</span>
    <br />
    <span>{author}</span>
    <br />
    <button type="button" onClick={rmBook}>Remove</button>
  </li>
);
Book.propTypes = { title: PropTypes.string.isRequired, author: PropTypes.string.isRequired };
Book.propTypes = { rmBook: PropTypes.func.isRequired };
export default Book;
