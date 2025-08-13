import { useState } from "react";
import FilterBar from './components/FilterBar';
import InputBar from './components/InputBar';
import List from './components/List';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState([]);

  const handleAdd = (note) => {
    setList(prev => [...prev, note]);
  };

  const handleDelete = (value) => {
    setList(newList => newList.filter((_, index) => index !== value));
  };

  const handleFilter = (value) => {
    const gigido = [...filter, value];
    setFilter(gigido);
  }

  return (
    <div className="body">
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>Todo App</h1>
        <div className="container1">
          <InputBar onAdd={handleAdd} />
          <FilterBar />
        </div>
        <br />
        <div className="container1">
          <List list={list} onDelete={handleDelete} onCheck={handleFilter} />
        </div>
      </div>
    </div>
  );
}

export default App;
