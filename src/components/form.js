/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ addBook }) => (
  <form onSubmit={() => addBook({ author: 'test', title: 'test' })}>
    <input name="author" placeholder="author" />
    <input name="title" placeholder="title" />
    <input type="submit" value="Submit" />
  </form>
);

Form.propTypes = { addBook: PropTypes.func.isRequired };

export default Form;
