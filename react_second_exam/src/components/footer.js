import '../style/footer.css';

export default function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='footer-ex-links'>
        <a href='#'>Facebook</a>
        <a href='#'>LinkedIn</a>
        <a href='#'>Pintrest</a>
        <a href='#'>Email</a>
      </div>
      <div className='footer-content'>Phone: XXXXXX Email: XXXXX@gmail.com</div>
      <div className='footer-bottom'>
        <div>XXXX Copyright © 2021 NY</div>
        <div>Home</div>
        <div>
          <div>Portfolio</div>
          <li>Project1</li>
          <li>Project2</li>
          <li>Project3</li>
          <li>See more</li>
        </div>
        <div>Resume</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
