const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

export const getBooks = () => async (dispatch) => {
  const request = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OUkbJoOxy2T99jHKMB3y/books');
  const entries = await request.json();
  const books = Object.entries(entries).map(([key, value]) => {
    const [bookEntries] = value;
    return {
      item_id: key,
      ...bookEntries,
    };
  });
  if (books) {
    dispatch({
      type: GET_BOOKS,
      books,
    });
  }
};

export const addBook = (book) => async (dispatch) => {
  const created = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OUkbJoOxy2T99jHKMB3y/books', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.item_id,
      title: book.title,
      category: book.category,
    }),
  });
  if (created) {
    dispatch({
      type: ADD_BOOK,
      book,
    });
  }
};

export const removeBook = (book) => async (dispatch) => {
  const deleted = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OUkbJoOxy2T99jHKMB3y/books/${book.item_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.item_id,
    }),
  });
  if (deleted) {
    dispatch({
      type: REMOVE_BOOK,
      book,
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.book.item_id);
    case GET_BOOKS:
      return [...action.books];
    default:
      return state;
  }
};

export default reducer;
