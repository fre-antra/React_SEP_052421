import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const items = ["Kosher", "No Celery (inc celeriac)", "No Egg"];
  const [checked, setChecked] = useState([false, false, false]);
  const [allChecked, setAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState("");

  useEffect(() => {
    let string = "";
    checked.forEach((c, ind) => {
      if (c) {
        string += items[ind];
      }
    });
    setCheckedItems(string);
  });

  function toggleAll() {
    if (allChecked) {
      setChecked(new Array(checked.length).fill(false));
      setAllChecked(false);
    } else {
      setChecked(new Array(checked.length).fill(true));
      setAllChecked(true);
    }
  }

  function clearAll() {
    setChecked(new Array(checked.length).fill(false));
    setAllChecked(false);
  }

  function toggle(ind) {
    let newChecked = [...checked];
    newChecked[ind] = !newChecked[ind];
    setChecked(newChecked);
    let newAllChecked = true;
    for (let c of newChecked) {
      if (!c) {
        newAllChecked = false;
        break;
      }
    }
    setAllChecked(newAllChecked);
  }

  return (
    <div className="App">
      <h1>You selected: {checkedItems}</h1>
      <div class="row" id="check-all">
        <span>{
          allChecked ?
          <input type="checkbox" onClick={toggleAll} checked />
          :
          <input type="checkbox" onClick={toggleAll} />
        }</span>
        <span>Select All</span>
      </div>
      {items.map((item, ind) => {
        return (
          <div class="row" key={ind}>
            <span>{
              checked[ind] ?
              <input type="checkbox" onClick={() => toggle(ind)} checked />
              :
              <input type="checkbox" onClick={() => toggle(ind)} />
            }</span>
            <span>{item}</span>
          </div>
        )
      })}
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
}

export default App;
