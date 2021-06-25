import Header from './Header';
import { useState } from 'react';
import Card from './Card';
import '../style/Layout.css';

const title =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua.';

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue. In pellentesque massa placerat duis ultricies lacus sed turpis. Arcu felis bibendum ut tristique et. Accumsan sit amet nulla facilisi morbi tempus. Nunc sed blandit libero volutpat sed. Id semper risus in hendrerit gravida rutrum quisque non tellus. Eu tincidunt tortor aliquam nulla facilisi. Leo a diam sollicitudin tempor id eu nisl. Mollis nunc sed id semper risus in hendrerit. Mattis aliquam faucibus purus in massa tempor.';

const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'lightblue'];

export default function Layout() {
  const [head, setHead] = useState('Original Title');
  const [color, setColor] = useState('black');
  const [key, setKey] = useState('-1');

  const handleChangeTitle = ({ title, color, index }) => {
    setHead(title);
    setColor(color);
    setKey(index);
  };

  return (
    <>
      <Header head={head} color={color} />
      <div className='main'>
        {colors.map((color, index) => (
          <Card
            key={index}
            handleChangeTitle={handleChangeTitle}
            color={color}
            title={title}
            content={content}
            isClick={index === +key}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
