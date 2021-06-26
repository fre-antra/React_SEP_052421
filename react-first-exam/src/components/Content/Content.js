import { useState } from 'react';
import data from '../../data';
import ContentItem from './ContentItem/ContentItem';

import './Content.css';

const Content = () => {
  const [selectedColor, setColor] = useState('');

  const handleColor = (targetColor) => {
    setColor(targetColor);
  };

  return (
    <div className="main">
      <div className="header" style={{ color: `${selectedColor}` }}>
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
              cardClass={
                el.color === selectedColor
                  ? `card card--selected border-${el.color}`
                  : `card`
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Content;
