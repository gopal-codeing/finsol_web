import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Centerheading from './Centerheading1';
import hanuman from './hanuman.jpg';


const HomeSection = () => {
  return (
    <>
      <section className="home-section">
        <div className="container">
          <div className="row" style={{height: "10%" }}>
            {/* Left side with sliding images */}
            <div className="col-md-8 left-side" style={{ width: "60%", height: "10%" }}>
              <div id="carouselExample" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner"style={{ width: "100%", height: "100%" }}>
                  <div className="carousel-item active">
                    <img src={hanuman} width="100%"  alt="Hanuman" />
                  </div>
                  <div className="carousel-item">
                    <img src={hanuman} width="100%"  alt="Hanuman" />
                  </div>
                  <div className="carousel-item">
                    <img src={hanuman} width="100%" alt="Hanuman" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side with three vertical divs */}
            <div className="col-md-4 right-side" style={{ width: "40%", height: "10%" }}>
              <div className="d-flex flex-column "style={{ width: "100%", height: "20%" }}>
                <div className="vertical-div " style={{ width: "100%", height: "20%" }}>
                  <img src={hanuman} width="50%" height="20%" alt="Hanuman" />
                </div>
                <div className="vertical-div h-50"style={{ width: "100%", height: "20%" }}>
                  <img src={hanuman} width="50%" height="20%" alt="Hanuman" />
                </div>
                <div className="vertical-div h-50" style={{ width: "100%", height: "20%" }}>
                  <img src={hanuman} height="20%" alt="Hanuman" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default HomeSection;
