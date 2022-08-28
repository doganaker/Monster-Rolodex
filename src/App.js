import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      // Convert response into json, so it can be used
      .then((response) => response.json())
      // After resolve of above promise we will set
      // the users to our initially empty state
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          onChange={(event) => {
            const eventString = event.target.value.toLocaleLowerCase()
            const newMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(eventString)
            })
            this.setState(
              () => {
                return { monsters: newMonsters }
              },
              () => {
                console.log(this.state)
              }
            )
          }}
        />
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
