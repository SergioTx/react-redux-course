import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    // the only time we can make direct assignment to state
    this.state = {lat: null, errorMessage: ''};

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // the only way to update state is setState()
        // cannot do this.state.lat = xxx;
        this.setState({lat: position.coords.latitude});
      },
      (err) =>{
        this.setState({errorMessage: err.message});
      } 
    );
  }

  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
