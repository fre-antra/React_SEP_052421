import '../style/footer.css';

export default function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='footer-ex-links'>
        <a href='#main'>
          <img src='images/facebook.svg' alt='facebook' />
        </a>
        <a href='#main'>
          <img src='images/linkedin.svg' alt='linkedin' />
        </a>
        <a href='#main'>
          <img src='images/pinterest.svg' alt='pinterest' />
        </a>
        <a href='#main'>
          <img src='images/email.svg' alt='email' />
        </a>
      </div>
      <div className='footer-content'>
        <div>Phone: XXXXXX</div>
        <div>Email: XXXXX@gmail.com</div>
      </div>

      <div className='footer-bottom'>
        <div className='content1'>
          <li>XXXX</li>
          <li>Copyright © 2021</li>
          <li>NY</li>
        </div>
        <a href='#main' className='link content1'>
          Home
        </a>
        <div>
          <a href='#portfolio' className='link content1'>
            Portfolio
          </a>
          <li>
            <a href='#main' className='link content2'>
              Project1
            </a>
          </li>
          <li>
            <a href='#main' className='link content2'>
              Project2
            </a>
          </li>
          <li>
            <a href='#main' className='link content2'>
              Project3
            </a>
          </li>
          <li>
            <a href='#main' className='link content2'>
              See more
            </a>
          </li>
        </div>
        <div>
          <a href='#main' className='link content1'>
            Resume
          </a>
          <li>
            <a href='#main' className='link content2'>
              Download
            </a>
          </li>
        </div>
        <a href='#contact' className='link content1'>
          Contact
        </a>
      </div>
    </div>
  );
}
