import { useState } from 'react';
import { LayoutContext } from '../contexts/LayoutContext';
import Header from './Header';
import Main from './Main';

export default function Layout() {
  const [head, setHead] = useState('Original Title');
  const [color, setColor] = useState('black');
  const [index, setIndex] = useState(-1);

  console.log('Layout render!');

  const handleChange = ({ title, color, idx }) => {
    setHead(title);
    setColor(color);
    setIndex(idx);
  };

  return (
    <>
      <LayoutContext.Provider value={{ head, color, index, handleChange }}>
        <Header />
        <Main />
      </LayoutContext.Provider>
    </>
  );
}
