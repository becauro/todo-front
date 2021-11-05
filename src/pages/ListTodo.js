import React from 'react';
import { Link } from 'react-router-dom';
import { getAll, remove } from '../services/api_localStorage';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tasks: [],
        }
        this.removeTodo = this.removeTodo.bind(this);
    };

   componentDidMount() {
  
    const ls = getAll();

      this.setState({
       tasks: ls,
       });
  
   };


   removeTodo(id) {

    // console.log('ID a ser removido:');
    // console(id)
    remove(id);

    window.location.reload();
   };

    render() {
      const { tasks } = this.state;

        const rows = tasks && tasks.map(
          (todo, index) => {
            return (
            <tr key={todo.id}>
            <td> { todo['task'] } </td>
            <td>
              <Link to={`/edit/${todo.id}`}>Edit</Link>
              &nbsp; &nbsp;
              <button onClick={() => this.removeTodo(todo.id)}> Remove </button>
            </td>
            <td>
                { todo.status }
            </td>
            </tr>
          )
          }
        );

        return (
        
          <div className="container">
            <div className="mt-3">
              <h3>Todo List</h3>
              <table className="table table-striped mt-3">
              <thead>
                  <tr>
                  <th>Task</th>
                  <th>Actions</th>
                  <th>Status</th>
                  </tr>
              </thead>
              <tbody>
                { rows }
              </tbody>
              </table>
            </div>
          </div>
        
        )
    }
}