import Header from './components/Header/Header'
import ContentBoxes from './components/ContentBoxes/ContentBoxes'
import {data} from './DummyData'
import React, {useState} from 'react'

function App() {
  const [color, setColor] = useState('')

  const handleColor = (colorName) => {
    setColor(colorName);
  };

  return (
    <div>
      <Header color={color} />
      <ContentBoxes data={data} handleColor={handleColor} />
    </div>
  );
}

export default App;
