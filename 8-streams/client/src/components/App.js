import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Page1 = () => {
  return <div>Page1</div>
}
const Page2 = () => {
  return <div>Page2
    <button>Click me</button>
  </div>
}


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Page1} />
          <Route path="/pagetwo" component={Page2} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
