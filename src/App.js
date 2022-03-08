import React, { Component } from 'react';
import BreadcrumbComponent from './Components/BreadcrumbComponent';
import CardComponent from './Components/CardComponent';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className="mt-5">
        <Header />
        <BreadcrumbComponent />
        <CardComponent />
      </div>
    )
  }
}

export default App;

