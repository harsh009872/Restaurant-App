import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Welcome to Zaykaa-e-Dilli!</p>
            </div>
            <p className="mid">
              At Zaykaa-e-Dilli, we bring the vibrant flavors of Delhi straight
              to your plate. Nestled in the heart of the city, our restaurant is
              a celebration of the rich culinary heritage of India's capital.
              From the bustling streets of Chandni Chowk to the serene lanes of
              Lodhi Road, we have captured the essence of Delhi's diverse food
              culture in every dish we serve.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
