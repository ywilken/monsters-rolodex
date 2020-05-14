import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component.jsx';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    // .then(newResponse => console.log(newResponse))
    .then(users => this.setState( {monsters: users} ))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => {
      const filteredByName = monster.name.toLowerCase().includes(searchField.toLowerCase());
      const filteredByEmail =  monster.email.toLowerCase().includes(searchField.toLowerCase());
      return filteredByName + filteredByEmail;
    })
    return (
      <div className="App">
        <SearchBox 
          placeholder = "search monster"
          handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
    </div>
    );
  }

  // componentDidUpdate() {
  //   console.log(this.state)
  // }
}


// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       string: 'Hello Nick...'
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {this.state.string}
//         </p>
//         <h2>
//           What a nice idea!
//         </h2>
//         <button onClick={() => this.setState({string: 'Hello Monica...'})}>Change Text</button>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//     );
//   }
// }



/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>
          What a nice idea!
        </h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
