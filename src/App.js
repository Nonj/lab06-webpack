import React from 'react';
import SearchForm from './SearchForm';

class App extends React.Component {

  //placeholder callback
  handleSearch() {
    window.alert("You searched for something!");
  }

  render() {
    return (
      <main className="container">
        <h1>Hello Webpack!</h1>
        <SearchForm onSearch={this.handleSearch} />
      </main>
    );
  }
}

export default App;