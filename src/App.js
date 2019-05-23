/* eslint-disable no-useless-constructor */
import React, {Component} from 'react';
import './App.css';
import jsonData from './inputJson';

class App extends Component {
  state = {
  }

  currentNode = (node) => jsonData.layers.filter(cNode => cNode.parentLayerId === node).map(cNode => (
  	<ul key={`node_${cNode.id}`}>
    <li>{cNode.name}</li>
      {this.currentNode(cNode.id)}
    </ul>
  ))

  render(){
    return (
      <div className="App">
        <div>
          {this.currentNode(-1)}
        </div>
      </div>
    );
    }
  }
  

export default App;
