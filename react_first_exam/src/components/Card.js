import '../style/Card.css';
import { useContext } from 'react';
import { LayoutContext } from '../contexts/LayoutContext';

export default function Card(props) {
  const { color, title, content, idx } = props;
  const { index, handleChange } = useContext(LayoutContext);

  const isClick = idx === index;

  const boxShadow = isClick ? `5px 5px 8px ${color}` : 'none';
  const border = isClick ? `2px solid ${color}` : '2px solid white';

  const style = {
    border: `${border}`,
    boxShadow: `${boxShadow}`,
  };

  const handleClick = () => {
    handleChange({ title, color, idx });
  };

  return (
    <div className='card' onClick={handleClick} style={style}>
      <h3 className='card-title'>{title}</h3>
      <div className='card-content'>{content}</div>
      <button className='card-btn' style={{ backgroundColor: `${color}` }}>
        See more detail...
      </button>
    </div>
  );
}
