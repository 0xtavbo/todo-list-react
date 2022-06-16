import './App.css';
import GlobalStyle from './styles/GlobalStyle';
import TodoList from './components/todoList/TodoList';
import { TodoListReducerProvider } from './context/TodoListReducer';

function App() {
  return (
    <>
      <TodoListReducerProvider>
        <div className="todolist-container">
          <h3>ToDo List</h3>
          <TodoList />
        </div>
      </TodoListReducerProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
