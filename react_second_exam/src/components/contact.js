import '../style/contact.css';

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className='contact-head'>
        <div className='title1'>Contact</div>
        <div className='title3 italic'>XXX-XX-XXX</div>
      </div>
      <div className='contact-body'>
        <div className='contact-content'>
          <div>
            <div className='title2'>Reaching out to me</div>
            <div className='content1'>
              Don't be afraid to contact me! I'm happy to answer any questions,
              provide more information, or just have a nice conversation! Fill
              out the form below to being reaching out to me. If you prefer
              another email client other than your default, which will appear
              after clicking the button and have all of the information you just
              entered, you can email me at XXXXX.
            </div>
          </div>
          <div>
            <div className='title2'>Contact Information</div>
            <div className='content1'>
              <li>XXXX</li>
              <li>XXXX</li>
              <li>123-456-789</li>
              <li>XXXXX.gmail.com</li>
            </div>
          </div>
        </div>
        <form className='contact-form title3'>
          <div className='form-names'>
            <div>
              <label htmlFor='firstName'>First Name*</label>
              <input
                type='text'
                id='firstName'
                placeholder='First Name'
              ></input>
            </div>

            <div>
              <label htmlFor='lastName'>Last Name*</label>
              <input type='text' id='lastName' placeholder='Last Name'></input>
            </div>
          </div>
          <div>
            <label htmlFor='email'>Email*</label>
            <input type='email' id='email' placeholder='Email'></input>
          </div>
          <div>
            <label htmlFor='message'>Message*</label>
            <textarea id='mesage' placeholder='Message'></textarea>
          </div>
          <input type='submit' className='btn title3' id='form-btn'></input>
        </form>
      </div>
    </div>
  );
}
