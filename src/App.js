import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: { firstName: 'Yihua', lastName: 'Zhang' },
      company: 'ZTM'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello, {this.state.name.firstName} {this.state.name.lastName}
          </p>
          <p>
            Welcome to {this.state.company}
          </p>
          <button onClick={() => {
            // Shallow Merge
            // this.setState({
            //   name: { firstName: 'Doğan', lastName: 'Aker' }
            // })

            // Secondary Callback
            // Ideal and Optimal way of writing code
            this.setState(() => {
              return { name: { firstName: 'Doğan', lastName: 'Aker' } }
            }, () => {
              console.log('Secondary Callback State:', this.state)
              // this one returns updated state, runs after below console.log
            })
            console.log('Original State', this.state)
            // this one returns original state, runs before above console.log
          }}>Change Name</button>
        </header>
      </div>
    );
  }

}

export default App;
