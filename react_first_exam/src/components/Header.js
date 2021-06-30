import '../style/Header.css';
import { useContext } from 'react';
import { LayoutContext } from '../contexts/LayoutContext';

export default function Header(props) {
  const { color, head } = useContext(LayoutContext);

  return (
    <div className='header' style={{ color: `${color}` }}>
      <h2>
        {color} && Title :{head}
      </h2>
    </div>
  );
}
