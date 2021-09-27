/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <li>
    <span>{title}</span>
    <span>{author}</span>
  </li>
);
Book.propTypes = { title: PropTypes.string.isRequired, author: PropTypes.string.isRequired };
export default Book;
