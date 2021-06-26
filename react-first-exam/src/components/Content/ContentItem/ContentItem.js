import './ContentItem.css';

const ContentItem = ({ data, handleColor, cardClass }) => {
  return (
    <div className={`${cardClass}`}>
      <h4>{data.subtitle}</h4>
      <p>{data.text}</p>
      <button
        className="card__button"
        style={{ backgroundColor: `${data.color}` }}
        onClick={() => handleColor(data.color)}
      >
        {data.buttonText}
      </button>
    </div>
  );
};

export default ContentItem;
