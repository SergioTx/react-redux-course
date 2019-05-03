import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    // the only time we can make direct assignment to state
    this.state = {lat: null};

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // the only way to update state is setState()
        // cannot do this.state.lat = xxx;
        this.setState({lat: position.coords.latitude});
      },
      (err) => console.log(err)
    );
  }

  // React says we have to define render!!
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
