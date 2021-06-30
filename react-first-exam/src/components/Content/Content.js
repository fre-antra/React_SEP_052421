import { useState, useEffect } from 'react';
import ContentItem from './ContentItem/ContentItem';

import './Content.css';
import news from '../../data';

function getNews() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(news);
    }, 500);
  });
}

const Content = () => {
  const [title, setTitle] = useState('');
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedColor, setColor] = useState('');

  useEffect(() => {
    getNews().then((data) => {
      setData(data[1]);
      setTitle(data[0].title);
      setLoaded(true);
    });
  }, []);

  const handleColor = (targetColor) => {
    setColor(targetColor);
  };

  return (
    <div className="main">
      {loaded ? (
        <>
          <div className="header" style={{ color: `${selectedColor}` }}>
            <h3>{title}</h3>
          </div>
          <div className="content-container">
            {data.map((el, index) => {
              return (
                <ContentItem
                  key={index}
                  data={el}
                  handleColor={handleColor}
                  selected={el.color === selectedColor}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="loading-page">
          <img
            className="content-loader"
            src="logo512.png"
            alt="loading-loader"
          />
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Content;
