import '../style/main.css';

export default function Main() {
  return (
    <div className='main' id='main'>
      <h2>Hello, I'm</h2>
      <h1>XXX</h1>
      <h2>UI Developer. UX Desinger. Problem Solver.</h2>
      <div className='main-btns'>
        <a href='#aboutMe' className='btn'>
          Info
        </a>
        <a href='#portfolio' className='btn'>
          Portfolio
        </a>
      </div>
    </div>
  );
}
