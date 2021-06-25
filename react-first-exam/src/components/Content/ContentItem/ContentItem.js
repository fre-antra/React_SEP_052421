import './ContentItem.css';

const ContentItem = ({ data, handleColor, selected }) => {
  let cln = '';
  if (selected) {
    cln = `card selected ${data.color}`;
  } else {
    cln = 'card';
  }

  return (
    <div className={`${cln}`}>
      <h4>{data.subtitle}</h4>
      <p>{data.text}</p>
      <button
        className="card__button"
        style={{
          backgroundColor: `${data.color}`,
        }}
        onClick={() => handleColor(data.color, data.id)}
      >
        {data.buttonText}
      </button>
    </div>
  );
};

export default ContentItem;
