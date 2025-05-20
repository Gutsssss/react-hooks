import React, { useReducer, useState } from 'react';

// Начальное состояние
const initialState = {
  todos: []
};

// Редуктор
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.text,
            completed: false
          }
        ]
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
}

function TodoList() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', text });
      setText('');
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
      />
      <button onClick={handleAdd}>Добавить</button>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}>
              {todo.completed ? 'Отменить' : 'Выполнить'}
            </button>
            <button onClick={() => dispatch({ type: 'DELETE_TODO', id: todo.id })}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;