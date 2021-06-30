import '../style/Card.css';

export default function Card(props) {
  const { handleChange, color, title, content, isClick, index } = props;

  const boxShadow = isClick ? `5px 5px 8px ${color}` : 'none';
  const border = isClick ? `2px solid ${color}` : '2px solid white';

  const style = {
    border: `${border}`,
    boxShadow: `${boxShadow}`,
  };

  const handleClick = () => {
    handleChange({ title, color, index });
  };

  return (
    <div className='card' onClick={handleClick} style={style}>
      <h3 className='card-title'>{title}</h3>
      <div className='card-content'>{content}</div>
      <button className='card-btn' style={{ backgroundColor: `${color}` }}>
        See more detail
      </button>
    </div>
  );
}
