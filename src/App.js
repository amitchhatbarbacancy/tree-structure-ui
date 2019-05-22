/* eslint-disable no-useless-constructor */
import React, {Component} from 'react';
import './App.css';
import jsonData from './inputJson';
import { isEmpty, isNull } from 'lodash';

class App extends Component {
  state = {
  }

  onParentClick(cNode) {
    console.log(`@@@@@@@@@@@@@@@@@@@`, cNode)
  }

  currentNode = (node) => jsonData.layers.filter(cNode => cNode.parentLayerId === node).map(cNode => (
  	<ul key={`node_${cNode.id}`}>
    { cNode.parentLayerId === -1 && <li onClick={(cNode) =>this.onParentClick(cNode)}>{cNode.name}</li> }
    { cNode.parentLayerId !== -1 && <li>{cNode.name}</li> }
      {this.currentNode(cNode.id)}
    </ul>
  ))

  render(){
    console.log("$$$$$$$$$$$$$", this.state)
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
