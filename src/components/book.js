/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import '../css/book.css';

const Book = ({ title, category, rmBook }) => (
  <li className="bookCard">
    <div className="bookInfo">
      <span className="category">{category}</span>
      <h1 className="title">{title}</h1>
      <span className="author">Fulan Fulan</span>
      <ul className="buttonsList">
        <li><button type="button" className="button">Comments</button></li>
        <li><button type="button" className="button side-border" onClick={rmBook}>Remove</button></li>
        <li><button type="button" className="button">Edit</button></li>
      </ul>
    </div>
    <div className="completedSection">
      <div className="Oval-2" />
      <div>
        <span className="percent">60%</span>
        <span className="completed">Completed</span>
      </div>
    </div>
    <div className="chapterSection">
      <span className="currChapter">CURRENT CHAPTER</span>
      <span className="chapter">Chapter 17</span>
      <button type="button" className="progress">Update progress</button>
    </div>
  </li>
);
Book.propTypes = { title: PropTypes.string.isRequired, category: PropTypes.string.isRequired };
Book.propTypes = { rmBook: PropTypes.func.isRequired };
export default Book;
