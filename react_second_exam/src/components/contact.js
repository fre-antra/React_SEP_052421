import '../style/contact.css';

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className='contact-head'>
        <div>Contact</div>
        <div>XXX-XX-XXX</div>
      </div>
      <div className='contact-body'>
        <div className='contact-content'>
          <div>
            <div>
              <span>Reaching out to me</span>
              <p>
                Don't be afraid to contact me! I'm happy to answer any
                questions, provide more information, or just have a nice
                conversation! Fill out the form below to being reaching out to
                me. If you prefer another email client other than your default,
                which will appear after clicking the button and have all of the
                information you just entered, you can email me at XXXXX.
              </p>
            </div>
          </div>
          <div>
            <span>Contact Information</span>
            <li>XXXX</li>
            <li>XXXX</li>
            <li>123-456-789</li>
            <li>XXXXX.gmail.com</li>
          </div>
        </div>
        <div className='contact-form'>
          <form>
            <label for='firstName'>First Name</label>
            <input type='text' id='firstName' placeholder='First Name'></input>
            <label for='lastName'>Last Name</label>
            <input type='text' id='lastName' placeholder='Last Name'></input>
            <label for='email'>Email</label>
            <input type='email' id='email' placeholder='Email'></input>
            <label for='message'>Message</label>
            <textarea id='mesage' placeholder='Message'></textarea>
            <input type='submit' className='btn'></input>
          </form>
        </div>
      </div>
    </div>
  );
}
