import '../style/aboutMe.css';

export default function AboutMe() {
  return (
    <div className='aboutMe' id='aboutMe'>
      <div className='aboutMe-head'>
        <div className='title1'>About Me</div>
        <div className='title3 italic'>Sharing a little bit of my story...</div>
      </div>

      <div className='aboutMe-content'>
        <div className='title2'>General Overview</div>
        <div className='content1'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </div>
      </div>

      <div className='aboutMe-content'>
        <div className='title2'>Statistics</div>
        <div className='content2 italic'>
          And for those that don't fancy reading:
        </div>
        <div className='content1'>
          <li>Male, 200 years old.</li>
          <li>Five feet 110 inches</li>
          <li>Favorite fonts:Roboto</li>
          <li>Loves to learn new things</li>
        </div>
      </div>

      <div className='aboutMe-content'>
        <a href='#contact' className='btn title2' id='btn'>
          Contact
        </a>
      </div>
    </div>
  );
}
