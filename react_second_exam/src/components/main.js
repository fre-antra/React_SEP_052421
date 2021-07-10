import '../style/main.css';
import Header from './header';

export default function Main() {
  return (
    <div className='main' id='main'>
      <Header />
      <div className='main-content'>
        <div className='title1'>Hello, I'm</div>
        <div className='title0'>XXXX</div>
        <div className='title1'>UI Developer. UX Desinger. Problem Solver.</div>
      </div>
      <div className='main-btns'>
        <a href='#aboutMe' className='btn title2'>
          Info
        </a>
        <a href='#portfolio' className='btn title2'>
          Portfolio
        </a>
      </div>
    </div>
  );
}
