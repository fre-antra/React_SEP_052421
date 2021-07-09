import '../style/contact.css';

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className='contact-content'>
        <table>
          <tr>
            <h3>Reaching out to me</h3>
            <div>
              Don't be afraid to contact me! I'm happy to answer any questions,
              provide more information, or just have a nice conversation! Fill
              out the form below to being reaching out to me. If you prefer
              another email client other than your default, which will appear
              after clicking the button and have all of the information you just
              entered, you can email me at XXXXX.
            </div>
          </tr>
          <tr>
            <h3>Contact Information</h3>
            <li>XXXX</li>
            <li>XXXX</li>
            <li>123-456-789</li>
            <li>XXXXX.gmail.com</li>
          </tr>
        </table>
      </div>
      <div className='contact-form'>
        <form>
          <table>
            <tr>
              <td>
                <label for='firstName'>First Name</label>
                <input
                  type='text'
                  id='firstName'
                  placeholder='First Name'
                ></input>
              </td>
              <td>
                <label for='lastName'>Last Name</label>
                <input
                  type='text'
                  id='lastName'
                  placeholder='Last Name'
                ></input>
              </td>
            </tr>
            <tr>
              <label for='email'>Email</label>
              <input type='email' id='email' placeholder='Email'></input>
            </tr>
            <tr>
              <label for='message'>Message</label>
              <textarea id='mesage' placeholder='Message'></textarea>
            </tr>
            <tr>
              <input type='submit'></input>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}
