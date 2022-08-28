import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
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
    // We filter monsters list here and not inside the onChange event callback
    // because while filtering we need the original monster list in the memory
    // and only need the new array created by .filter() method
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    })
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          onChange={(event) => {
            // Here when input value changes we only update the searchField state
            // so that we can keep the original monster list state and
            // only change the filtering value
            const searchField = event.target.value.toLocaleLowerCase()
            this.setState(
              () => {
                return { searchField }
              }
            )
          }}
        />
        {filteredMonsters.map((monster) => {
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
