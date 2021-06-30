import { useState } from 'react';
import { LayoutContext } from '../contexts/LayoutContext';

export default function LayoutProvider(props) {
  const [head, setHead] = useState('Original Title');
  const [color, setColor] = useState('black');
  const [index, setIndex] = useState(-1);

  const handleChange = ({ title, color, idx }) => {
    setHead(title);
    setColor(color);
    setIndex(idx);
  };

  return (
    <LayoutContext.Provider value={{ head, color, index, handleChange }}>
      {props.children}
    </LayoutContext.Provider>
  );
}
