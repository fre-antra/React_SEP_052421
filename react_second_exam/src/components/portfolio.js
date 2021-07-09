import '../style/portfolio.css';

export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <div className='portfolio-head'>
        <h1>Projects and Portfolio</h1>
        <h4>Sharing my endeavors and passions...</h4>
      </div>

      <div className='portfolio-cards'>
        <div className='portfolio-card'>
          <div>
            <h3>LUV TALK Website</h3>
            <div>
              Website, created during my first internship, which utilized HTML,
              CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.
            </div>
          </div>
          <div className='portfolio-btn'>
            <a href='#'>More</a>
          </div>
        </div>
        <div className='portfolio-card'>
          <div>
            <h3>Personal Website</h3>
            <div>
              Enjoyable side project that was created to experiment with more
              HTML and CSS, but also provided an outlet to showcase my abilities
              and interests.
            </div>
          </div>
          <div className='portfolio-btn'>
            <a href='#'>More</a>
          </div>
        </div>
        <div className='portfolio-card'>
          <div>
            <h3>Strike Zone Analysis</h3>
            <div>
              Data analytics project completed during my time at the Illinois
              Math and Science Academy which studied the baseball strike zone
              based on the state of the game.
            </div>
          </div>
          <div className='portfolio-btn'>
            <a href='#'>More</a>
          </div>
        </div>
      </div>
      <div className='portfolio-foot portfolio-btn'>
        <a href='#'>More Projects</a>
      </div>
    </div>
  );
}
