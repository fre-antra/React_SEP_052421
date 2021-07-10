import '../style/summary.css';

export default function Summary() {
  return (
    <div className='summary' id='summary'>
      <div className='summary-card'>
        <img src='images/developerdesign.svg' alt='developerdesign' />
        <div className='summary-content'>
          <div className='title3'>Development and Design</div>
          <div className='content1'>
            I aim to put my creativity to the test, designing and building
            unique, meaningful products for clients or merely for my own
            interests.
          </div>
        </div>
      </div>

      <div className='summary-card'>
        <img src='images/responsivedesign.svg' alt='responsivedesign' />
        <div className='summary-content'>
          <div className='title3'>Ideas and Solutions</div>
          <div className='content1'>
            There are still many problems that exist in today's society,
            including laziness. Luckily, I hope to combat these issues by
            innovating, developing easy-to-use programs, solutions, or products.
          </div>
        </div>
      </div>
      <div className='summary-card'>
        <img src='images/innovativesolutions.svg' alt='innovativesolutions' />
        <div className='summary-content'>
          <div className='title3'>Development and Design</div>
          <div className='content1'>
            I aim to put my creativity to the test, designing and building
            unique, meaningful products for clients or merely for my own
            interests.
          </div>
        </div>
      </div>
      <div className='summary-card'>
        <img src='images/passion.svg' alt='passion' />
        <div className='summary-content'>
          <div className='title3'>Passion and Dedication</div>
          <div className='content1'>
            With my profound interest and commitment to my field of study, my
            projects rarely go unfinished and my problems are never left
            unresolved.
          </div>
        </div>
      </div>
    </div>
  );
}
