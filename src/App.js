import React, { Component } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import List from './components/List.jsx';
import Header from './components/Header.jsx';
import MESSAGE from './utility/constants';

const theme = {
  backgroundButton: '#A0ACB8',
  colorButton: 'white',
  backgroundButtonsInput: '#8594A3',
  backgroundHeader: '#708090',
  display: 'inline-block',
  colorList: 'gray'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      city: '',
      error: false,
      message: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.deleteListItem = this.deleteListItem.bind(this);
  }

  handleNameChange(e) {
    this.setState({ city: e.target.value });
  }

  handleKeyUp(e) {
    if (e.keyCode === 13 || e.keyCode === 188) {
      const city = this.state.city
        .trim()
        .replace(',', '')
        .toLowerCase();
      const url = `https://api.openweathermap.org/data/2.5/weather?appid=c3b8f2e28ea9bf6f5d8bcb678001ab74&units=metric&q=${city}`;
      if (city.length === 0) {
        this.setErrorMessage(MESSAGE.ENTER_CITY);
        return;
      }

      if (this.addedCity(city)) {
        this.setErrorMessage(MESSAGE.CITY_FOUND);
        return;
      }

      fetch(url)
        .then(response => response.json())
        .then(
          result =>
            result.name.toLowerCase() === city
              ? this.setState({
                list: [...this.state.list, result],
                city: '',
                error: false,
                message: ''
              })
              : this.setErrorMessage(MESSAGE.CITY_NOT_FOUND)
        )
        .catch(() => this.setErrorMessage(MESSAGE.CITY_NOT_FOUND));
    }
  }

  addedCity(val) {
    return this.state.list.some(item => val === item.name.toLowerCase());
  }

  setErrorMessage(message) {
    this.setState({ city: '', error: true, message });
  }

  deleteListItem(id) {
    this.setState({
      list: this.state.list.filter(e => e.id !== id),
      error: false,
      message: ''
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Header
            {...this.state}
            handleNameChange={this.handleNameChange}
            handleKeyUp={this.handleKeyUp}
            deleteListItem={this.deleteListItem}
          />
          <List list={this.state.list} />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

injectGlobal`
  body {
    font-family: 'Roboto', 'sans-serif';
    background: #DDE1E6;
    margin: 0px;
    padding: 0px;
  }
`;

export default App;
