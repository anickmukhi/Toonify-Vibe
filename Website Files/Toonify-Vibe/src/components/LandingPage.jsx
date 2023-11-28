import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";
import { useAuth0 } from "@auth0/auth0-react";

const LandingPage = () => {
  const { name, image } = useGlobalContext();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            We are {name}.Tap into the Toonify photo to cartoon filter to
            cartoonize your favorite pictures online free with just a few
            clicks.
          </p>
          {isAuthenticated ? (
            <>
              <Button className="btn hireme-btn">
                <NavLink to="/ToEdit">Cartoonize Your Photo</NavLink>
              </Button>
            </>
          ) : (
            <>
              <Button
                className="btn_custome_login"
                onClick={() => loginWithRedirect()}
              >
                Cartoonize Your Photo
              </Button>
            </>
          )}
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 25rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  .btn_custome_login {
    max-width: 40%;
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default LandingPage;
