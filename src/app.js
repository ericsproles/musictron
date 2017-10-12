import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import './app.css';
import dotenv from 'dotenv'
dotenv.config();


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  search() {
    console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search';
    const FETCH_URL = `${BASE_URL}?q=${this.state.query}client_id=${process.env.CLIENT}&type=artist&limit=1`;
    console.log(FETCH_URL);
  }

  render() {
    console.log(process.env.REACT_APP_CLIENT)
    return (
      <div className="App">
        <div className="App-title"> MusicTron </div>
        <FormGroup>
          <InputGroup>
            <FormControl 
              type="text"
              placeholder="Search for an artist"
              value={this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search()
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}> 
              <Glyphicon glyph="search"></Glyphicon> 
            </InputGroup.Addon>  
          </InputGroup>
        </FormGroup>
        <div className="Profile">
          <div>Artist Picture</div>     
          <div>Artist Name</div>
      </div>
      <div className="Gallery"> Gallery </div>
    </div>
    )
  }
}

export default App;