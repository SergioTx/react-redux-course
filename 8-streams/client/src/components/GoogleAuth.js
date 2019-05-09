import React from 'react';
import { GAPI_TOKEN } from '../config';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: GAPI_TOKEN,
        scope: 'email',
      });
    });
  }

  render() {
    return <div>GoogleAuth</div>
  }
}

export default GoogleAuth;
