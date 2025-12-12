import React from "react";
import Profile from "../../assets/profile.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";
import { heroData } from "../../data";

function Home() {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>{heroData.name} </span>
            {heroData.role}
          </h1>

          <p className="home__description">{heroData.description}</p>

          <Link to={"/about"} className="button">
            More About Me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
}

export default Home;
