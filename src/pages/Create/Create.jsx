import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../shared/Header/Header';
import FloatingIcon from '../../shared/FloatingIcon/FloatingIcon';
import Container from '../../shared/Container/Container';
import './Create.css';

class Create extends Component {

  constructor(props) {
    super(props);
    
    this.state= {
      author: '',
      imageUrl: '',
    };
  }
  
  handleOnUpdateAuthor(value) {
    this.setState({
      author: value,
    });
  };

  handleOnUpdateImageUrl(value) {
    this.setState({
      imageUrl: value,
    });
  };

  handleOnSave = () => {
    this.props.onCreate(this.state) 
  }


  render(){
    return(
      <div className="form">
        <Header title="SharedBook"/>
        <Link to="/">
          <FloatingIcon icon="x"/>
        </Link>
        <Container>
          <div>
            <h2>Create a new book</h2>
            <input 
              placeholder="Add the author of the book" 
              type="text"
              onChange={(e) => {
                this.handleOnUpdateAuthor(e.target.value);
              }}
            />
            <input 
              placeholder="Add the image url of the book" 
              type="text"
              onChange={(e) => {
                this.handleOnUpdateImageUrl(e.target.value);
              }}
            />
            <Link to="/">
              <button onClick={this.handleOnSave}>
                Create
              </button>
            </Link>
          </div>
        </Container>
      </div>
    )
  }
}

export default Create;