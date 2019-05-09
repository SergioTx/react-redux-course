import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Page1 = () => {
  return <div>Page1
    <a href="/pagetwo">page2 (BAD!!!!!)</a>
  </div>
}
const Page2 = () => {
  return <div>Page2
    <button>Click me</button>
    <a href="/">page1 (BAD!!!!!)</a>
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
