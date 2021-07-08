import React from 'react';

class Dashboard extends React.Component {
  render() {
    const { todolist } = this.props;
    const todosCount = todolist.length;
    const completedCount = todolist.filter((todo) => todo.completed === true).length;

    return (
      <section>
        <h1> todosCount:{todosCount}</h1>
        <h1> completedCount:{completedCount}</h1>
      </section>
    );
  }
}

export default Dashboard;