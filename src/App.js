import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import PriceList from './components/PriceList';

const items = [
  {
    "id": 1,
    "title": "trip out",
    "price": 200,
    "date": "2018-09-18",
    "category": {
      "id": 1,
      "name": "trip",
      "type": "outcome",
    }
  },
  {
    "id": 2,
    "title": "trip out",
    "price": 300,
    "date": "2018-09-18",
    "category": {
      "id": 1,
      "name": "trip",
      "type": "outcome",
    }
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <PriceList
          items={items}
          onModifyItem={(item) => {console.log(item.id)}}
          onDeleteItem={(item) => {console.log(item.id)}} />
      </div>
    );
  }
}

export default App;
