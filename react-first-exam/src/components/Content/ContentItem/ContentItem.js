import './ContentItem.css';

const ContentItem = ({ data, handleColor, selected }) => {
  return (
    <div className="card" style={selected ? { borderColor: data.color } : null}>
      <h4>{data.subtitle}</h4>
      <p>{data.text}</p>
      <button
        className="card__button"
        style={{ backgroundColor: data.color }}
        onClick={() => handleColor(data.color)}
      >
        {data.buttonText}
      </button>
    </div>
  );
};

export default ContentItem;
