import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  onTermSubnmit = (term) => {
    youtube.get('/search', {
      params: { q: term }
    });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubnmit}/>
      </div>
    );
  }
}

export default App;
