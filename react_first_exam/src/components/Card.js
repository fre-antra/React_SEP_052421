import '../style/Card.css';

export default function Card(props) {
  const { handleChangeTitle, color, title, content, isClick, index } = props;

  const boxShadow = isClick ? `4px 4px 2px ${color}` : 'none';

  const style = {
    color: `${color}`,
    border: `1px solid ${color}`,
    boxShadow: `${boxShadow}`,
  };

  const handleClick = () => {
    handleChangeTitle({ title, color, index });
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
