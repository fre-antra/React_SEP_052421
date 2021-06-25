import '../style/Header.css';

export default function Header(props) {
  const { color, head } = props;

  return (
    <h2 className='header' style={{ color: `${color}` }}>
      {color} {head}
    </h2>
  );
}
