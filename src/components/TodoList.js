import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text){
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(...todos);
    };

    const updateTodo = (id, newValue) => {
        if(!newValue.text){
            return;
        }

        setTodos(prev => prev.map(item => (item.id === id ? newValue : item)));
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isCompletel;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

  return (
    <>
      <h1>React Take Note App</h1>
      <h2>What're you going to do?</h2>
      <TodoForm onSubmit = {addTodo} />
      <Todo 
        todos = {todos} 
        completeTodo = {completeTodo} 
        removeTodo = {removeTodo}
        updateTodo = {updateTodo}
      />
    </>
  );
};

export default TodoList
