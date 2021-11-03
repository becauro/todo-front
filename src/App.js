import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import TodoList from './pages/TodoList';
import EditTodo from './pages/EditTodo';
import CreateTodo from './pages/CreateTodo';
import { fillLocalstorage } from './services/fillLocalStorage'
function App() {

  fillLocalstorage(); // DEV: Only for development purpose;
  
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Todos</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Todo</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={TodoList}/>
        <Route exact path="/edit/:id" component={EditTodo}/>
        <Route exact path="/create" component={CreateTodo}/>
      </Switch>
    </div>
  );
}

export default App;
