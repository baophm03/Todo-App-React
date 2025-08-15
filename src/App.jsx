import { useState } from "react";
import FilterBar from './components/FilterBar';
import InputBar from './components/InputBar';
import List from './components/List';
import './App.css';

const FILTERS = {
  ALL: 'Tất cả',
  ACTIVE: 'Chưa xong',
  DONE: 'Hoàn thành',
};

function App() {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState(FILTERS.ALL);

  // Thêm item mới với done=false
  const handleAdd = (text) => {
    const item = { id: crypto.randomUUID(), text, done: false };
    setList(prev => [...prev, item]);
  };

  // Tạo danh sách đã lọc
  const visibleList = list.filter(item => {
    if (filter === FILTERS.ACTIVE) return !item.done;
    if (filter === FILTERS.DONE) return item.done;
    return true;
  });

  // Nhận kiểu filter từ FilterBar
  const handleFilterChange = (type) => {
    setFilter(type);
  };

  // Xóa theo id
  const handleDelete = (id) => {
    setList(prev => prev.filter(item => item.id !== id));
  };

  const handleToggle = (id) => {
    setList(prev =>
      prev.map(item => item.id === id ? { ...item, done: !item.done } : item)
    );
  };

  return (
    <div className="body">
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>Todo App</h1>

        <div className="container1">

          {/* lấy data từ input */}
          <InputBar onAdd={handleAdd} />

          <FilterBar
            value={filter}
            onChange={handleFilterChange}
            tabs={[FILTERS.ALL, FILTERS.ACTIVE, FILTERS.DONE]}
          />
        </div>

        <br />

        <div className="container1">
          <List
            list={visibleList}
            onDelete={(id) => handleDelete(id)}
            onToggle={(id) => handleToggle(id)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
