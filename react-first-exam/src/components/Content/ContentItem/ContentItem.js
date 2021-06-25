import './ContentItem.css';

const ContentItem = ({ data, handleColor, selected }) => {
  let cardClass = selected ? `card selected border__${data.color}` : `card`;

  return (
    <div className={`${cardClass}`}>
      <h4>{data.subtitle}</h4>
      <p>{data.text}</p>
      <button
        className="card__button"
        style={{ backgroundColor: `${data.color}` }}
        onClick={() => handleColor(data.color, data.id)}
      >
        {data.buttonText}
      </button>
    </div>
  );
};

export default ContentItem;
