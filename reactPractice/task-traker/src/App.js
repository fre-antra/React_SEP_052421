import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [showAdd, setShowadd] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      // setTasks is function
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // Fetch data from db.json
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:8000/tasks");

    // json is a function, so it has to be invoded
    const data = await res.json();

    return data;
  };

  // const deleteTask = (id) => {
  //   // console.log('id', id ); //这里的id是 click event， 如果要print id 得在Taks.js里面 ()=>{onDelete(taks.id)}

  //   setTasks(tasks.filter((task) => task.id !== id));
  // };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8000/tasks/${id}`);

    // json is a function, so it has to be invoded
    const data = await res.json();

    return data;
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updateTask = { ...taskToToggle, reminder: taskToToggle.reminder };

    const res = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              reminder: data.reminder,
            }
          : task
      )
    );
  };

  // add task
  const addTask = async (task) => {
    // // console.log(task);

    // // generate id for current new task and combine them into object
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = {
    //   id,
    //   ...task,
    // };
    console.log(task);
    const request = await fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await request.json();
    setTasks([...tasks, data]);
  };

  return (
    <Router>
      <div className="container">
        {" "}
        {/* parse the function to change the state of show add */}{" "}
        <Header onAdd={() => setShowadd(!showAdd)} showAdd={showAdd} />{" "}
        {showAdd && <AddTask onAdd={addTask} />}{" "}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No task to display"
        )}{" "}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
