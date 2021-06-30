import React, {useState, useEffect} from 'react'
import { fetchList } from "../Api/Api";

export default function WithTodoList(props) {
  const { render } = props;
  const [todolist, setTodolist] = useState([]);
    useEffect(() => {
      fetchList().then((data) => setTodolist(data));
    }, []);
  return <div>{render(todolist)}</div>;
}
