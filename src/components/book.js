/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import '../css/book.css';

const Book = ({ title, category, rmBook }) => (
  <li className="bookCard d-flex bg-white">
    <div className="bookInfo">
      <span className="category font-normal montserrat-font">{category}</span>
      <h1 className="title font-normal roboto-font">{title}</h1>
      <span className="author font-normal roboto-font azure-color">Fulan Fulan</span>
      <ul className="buttonsList d-flex">
        <li><span type="button" className="button right-border font-normal roboto-font azure-color">Comments</span></li>
        <li><button type="button" className="button font-normal roboto-font bg-white azure-color" onClick={rmBook}>Remove</button></li>
        <li><span type="button" className="button left-border font-normal roboto-font azure-color">Edit</span></li>
      </ul>
    </div>
    <div className="completedSection d-flex">
      <div className="Oval-2" />
      <div className="completion d-flex">
        <span className="percent font-normal montserrat-font">60%</span>
        <span className="completed font-normal montserrat-font">Completed</span>
      </div>
    </div>
    <div className="liner d-flex">
      <div className="line" />
      <div className="chapterSection d-flex">
        <span className="currChapter font-normal roboto-font">CURRENT CHAPTER</span>
        <span className="chapter font-normal roboto-font">Chapter 17</span>
        <button type="button" className="progress font-normal roboto-font">Update progress</button>
      </div>
    </div>
  </li>
);
Book.propTypes = { title: PropTypes.string.isRequired, category: PropTypes.string.isRequired };
Book.propTypes = { rmBook: PropTypes.func.isRequired };
export default Book;
