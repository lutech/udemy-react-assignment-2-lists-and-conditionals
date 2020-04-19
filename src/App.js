import React, {Component} from 'react';
import './App.css';

// Components
import Char from './Char/Char';
import Validation from './Validation/Validation';

class App extends Component {

  state = {
    characterCount : 0,
    characters: []
  }
  
  valueLengthChangeHandler = (e) => {
    const chars = e.target.value.split("");

    this.setState({
      characterCount: e.target.value.length,
      characters: [...chars]
    });
  }

  removeCharHandler = (index) => {  
    const chars = [...this.state.characters];
    chars.splice(index, 1);
    this.setState({
      characterCount: chars.length,
      characters: [...chars]
    })

  }

  render() {

    let validationMsg = null;

    if (this.state.characterCount < 5) {
      validationMsg = <Validation msg="Text too short."/>;
    } 
    else if (this.state.characterCount >= 5) {
        validationMsg = <Validation msg="Text is now long enough."/>;
    };
    
    
    let chars = null;

    if (this.state.characterCount > 0) {
      chars = this.state.characters.map((char, index) => {
          return <Char char={char} removeCharHandler={() => this.removeCharHandler(index)}/>
        });
    };
  
    return (
      <div className="App">
        <input type="text" onChange={(event) => this.valueLengthChangeHandler(event)} value={this.state.characters.join("")}/>
        <p>{this.state.characterCount}</p>
        {validationMsg} 
        {chars} 
      </div>
    );
  }
}

export default App;
