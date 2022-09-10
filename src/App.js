// Needed for class component
// import { Component } from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState('')

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox 
        className='monster-search-box'
        placeholder='search monsters'
        onChangeHandler={onSearchChange}
      />
      {/* <CardList monsters={filteredMonsters} /> */}
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       // Convert response into json, so it can be used
//       .then((response) => response.json())
//       // After resolve of above promise we will set
//       // the users to our initially empty state
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }

//   // With this optimization this function will only build once when this
//   // class is initialized for the first time
//   onSearchChange = (event) => {
//     // Here when input value changes we only update the searchField state
//     // so that we can keep the original monster list state and
//     // only change the filtering value
//     const searchField = event.target.value.toLocaleLowerCase()
//     this.setState(
//       () => {
//         return { searchField }
//       }
//     )
//   }

//   render() {

//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this

//     // We filter monsters list here and not inside the onChange event callback
//     // because while filtering we need the original monster list in the memory
//     // and only need the new array created by .filter() method
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })
//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox 
//           className='monster-search-box'
//           placeholder='search monsters'
//           onChangeHandler={onSearchChange}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
