import '../style/portfolio.css';

export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <div className='portfolio-head'>
        <div>Projects and Portfolio</div>
        <div>Sharing my endeavors and passions...</div>
      </div>

      <div className='portfolio-cards'>
        <div className='portfolio-card' id='card1'>
          <div>LUV TALK Website</div>
          <div>
            Website, created during my first internship, which utilized HTML,
            CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.
          </div>
          <div className='portfolio-btn'>
            <a href='#' className='btn'>
              More
            </a>
          </div>
        </div>
        <div className='portfolio-card' id='card2'>
          <div>Personal Website</div>
          <div>
            Enjoyable side project that was created to experiment with more HTML
            and CSS, but also provided an outlet to showcase my abilities and
            interests.
          </div>
          <div className='portfolio-btn'>
            <a href='#' className='btn'>
              More
            </a>
          </div>
        </div>
        <div className='portfolio-card' id='card3'>
          <div>Strike Zone Analysis</div>
          <div>
            Data analytics project completed during my time at the Illinois Math
            and Science Academy which studied the baseball strike zone based on
            the state of the game.
          </div>
          <div className='portfolio-btn'>
            <a href='#' className='btn'>
              More
            </a>
          </div>
        </div>
      </div>
      <div className='portfolio-foot portfolio-btn'>
        <a href='#' className='btn'>
          More Projects
        </a>
      </div>
    </div>
  );
}
