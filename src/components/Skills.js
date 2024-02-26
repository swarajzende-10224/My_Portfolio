import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Proficient in advanced C/C++ and Java, with expertise in data structures. Skilled in full-stack web development using HTML, CSS, JavaScript, React.js, Node.js, and Express.js. Strong problem-solving abilities complemented by knowledge in Database Management Systems (DBMS)</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Web Designer" />
                  <h5>Web Designer</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Versatile Software Developer" />
                  <h5>Versatile Software Developer</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Database Analyst" />
                  <h5>Database Analyst</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Data Structures" />
                  <h5>Data Structures</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
