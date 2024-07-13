import React from "react";
import { Link } from "react-router-dom";

export const StarWarsUniverse = () => {




    return (
        <div className="container-fluid bg-light-subtle">
            <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">

            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>


            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>


            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>

  </div>
  <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://heywise.mblycdn.com/hw/resized/2020/01/770x480/147767-tv-feature-what-order-should-you-watch-all-the-star-wars-films-image1-1wdfjceytb.jpg" className="d-block w-60" alt="Characters"/>
           
            <div className="carousel-caption d-none d-md-block">
              <Link to="/pages/Characters"><button type="button" class="btn btn-outline-warning">characters</button></Link>
              <h5>Know all the characters</h5>
              <p>Get into the most popular saga Characters.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/06/TIE-Reaper-Star-Wars-Ships.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5" className="d-block w-60" alt=""/>
            <div className="carousel-caption d-none d-md-block">
            <Link to="/pages/StarShips"><button type="button" class="btn btn-outline-warning">Starships</button></Link>
              <h5>Know all the starships</h5>
              <p>The most representative starships of the saga.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://reviewsyouread.wordpress.com/wp-content/uploads/2021/03/utapau.jpeg?w=1024" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <Link to="/pages/Planets"><button type="button" class="btn btn-outline-warning">Planets</button></Link>
              <h5>All the planets, all the beauty</h5>
              <p>All the incredible place around the far far away...</p>
            </div>
          </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
            
        </div>
        </div>
    );
}