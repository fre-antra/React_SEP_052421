import '../style/footer.css';

export default function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='footer-ex-links'>
        <a href='#'>
          <img src='images/facebook.svg' alt='facebook' />
        </a>
        <a href='#'>
          <img src='images/linkedin.svg' alt='linkedin' />
        </a>
        <a href='#'>
          <img src='images/pinterest.svg' alt='pinterest' />
        </a>
        <a href='#'>
          <img src='images/email.svg' alt='email' />
        </a>
      </div>
      <div className='footer-content'>Phone: XXXXXX Email: XXXXX@gmail.com</div>

      <div className='footer-bottom'>
        <div>XXXX Copyright © 2021 NY</div>
        <a href='#' className='link'>
          Home
        </a>
        <div>
          <a href='#portfolio' className='link'>
            Portfolio
          </a>
          <li>
            <a href='#' className='link'>
              Project1
            </a>
          </li>
          <li>
            <a href='#' className='link'>
              Project2
            </a>
          </li>
          <li>
            <a href='#' className='link'>
              Project3
            </a>
          </li>
          <li>
            <a href='#' className='link'>
              See more
            </a>
          </li>
        </div>
        <div>
          <a href='#' className='link'>
            Resume
          </a>
          <li>
            <a href='#' className='link'>
              Download
            </a>
          </li>
        </div>
        <a href='#contact' className='link'>
          Contact
        </a>
      </div>
    </div>
  );
}
