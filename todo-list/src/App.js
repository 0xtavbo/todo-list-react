import './App.css';
import GlobalStyle from './styles/GlobalStyle';
import TodoList from './components/todoList/TodoList';
import { TodoListReducerProvider } from './context/TodoListReducer';

function App() {
  return (
    <>
      <TodoListReducerProvider>
        <div className="todolist-container">
          <TodoList />
        </div>
      </TodoListReducerProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
