import { useState } from 'react';
import { addTodo, deleteTodo } from './TodoApi';
import TodoItem from './TodoItem';
import '../style/Todolist.css';

function Todolist() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  // getTodos().then((res) => setList([...res]));

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      const newTodo = {
        title: input,
        userId: 1,
        completed: false,
      };

      addTodo(newTodo).then((res) => {
        res.id = Math.floor(Math.random(1) * 10000) + 300;
        setList([...list, res]);
        setInput('');
      });
    }
  };

  const handleDelete = (id) => {
    deleteTodo(id).then(() => setList([...list.filter((x) => x.id !== id)]));
  };

  return (
    <div className='main'>
      <h1>To Do List</h1>
      <input
        className='input'
        type='text'
        onChange={handleInputChange}
        onKeyDown={handleEnterKey}
        placeholder='Type your plan here...'
        value={input}
      />
      {list.map((item) => (
        <TodoItem item={item} key={item.id} handleClick={handleDelete} />
      ))}
    </div>
  );
}

export default Todolist;
