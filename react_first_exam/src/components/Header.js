import '../style/Header.css';

export default function Header(props) {
  const { color, head } = props;

  return (
    <div className='header' style={{ color: `${color}` }}>
      <h2>
        {color} && Title :{head}
      </h2>
    </div>
  );
}
