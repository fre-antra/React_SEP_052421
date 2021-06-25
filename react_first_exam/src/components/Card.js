import '../style/Card.css';

export default function Card(props) {
  const { handleChange, color, title, content, isClick, index } = props;

  const boxShadow = isClick ? `10px 10px 4px ${color}` : 'none';
  const border = isClick ? `1px solid ${color}` : 'none';

  const style = {
    color: `${color}`,
    border: `${border}`,
    boxShadow: `${boxShadow}`,
  };

  const handleClick = () => {
    handleChange({ title, color, index });
  };

  return (
    <div className='card' onClick={() => handleClick()} style={style}>
      <h3 className='card-title'>{title}</h3>
      <div className='card-content'>{content}</div>
      <button className='card-btn' style={{ backgroundColor: `${color}` }}>
        See more detail
      </button>
    </div>
  );
}
