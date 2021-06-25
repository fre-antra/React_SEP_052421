import { useState } from 'react';
import data from '../../data';
import ContentItem from './ContentItem/ContentItem';

import './Content.css';

const Content = () => {
  const [color, setColor] = useState('black');
  const [selectArray, setSelectArr] = useState(
    new Array(data.length).fill(false)
  );

  const handleColor = (targetColor, index) => {
    let arr = new Array(data.length).fill(false);
    arr[index] = true;
    setSelectArr(arr);

    setColor(targetColor);
  };

  return (
    <div className="main">
      <div className="header" style={{ color: `${color}` }}>
        <h3>
          CDC says roughly 4,100 people have been hospitalized or died with
          Covid breakthrough infections after vaccination
        </h3>
      </div>
      <div className="content-container">
        {data.map((el, index) => {
          return (
            <ContentItem
              key={index}
              data={el}
              handleColor={handleColor}
              selected={selectArray[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Content;
