// Needed for class component
// import { Component } from "react";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  const fetchMonsters = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      // Convert response into json, so it can be used
      .then((response) => response.json())
      // After resolve of above promise we will set
      // the users to our initially empty state
      .then((users) =>
        setMonsters(users)
      )
  }

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()

    setSearchField(searchFieldString)
  }

  useEffect(() => {
    fetchMonsters()
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className='monster-search-box'
        placeholder='search monsters'
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
