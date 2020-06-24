import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Header from '../../shared/Header/Header';
import Container from '../../shared/Container/Container';
import FloatingIcon from '../../shared/FloatingIcon/FloatingIcon';
import Card from '../../shared/Card/Card';

import './List.css';

const List = ({ shareBooks }) => {
  return(
    <div className="App">
      <Header title="SharedBook"/>
      <Link to="/create">
        <FloatingIcon icon="+"/>
      </Link>
      <Container>
        <div className="share-book-list">
          {shareBooks.length && shareBooks.map(book => (
            <Card imageUrl={book.imageUrl} author={book.author} />
          ))}
        </div>
      </Container>
    </div>
  )
};

List.propTypes = {
  shareBooks: PropTypes.array,
}

export default List;