import Header from './Header';
import { useState } from 'react';
import Main from './Main';

export default function Layout() {
  const [head, setHead] = useState('Original Title');
  const [color, setColor] = useState('black');
  const [index, setIndex] = useState('-1');

  const handleChange = ({ title, color, index }) => {
    setHead(title);
    setColor(color);
    setIndex(index);
  };

  return (
    <>
      <Header head={head} color={color} />
      <Main handleChange={handleChange} index={index} />
    </>
  );
}
