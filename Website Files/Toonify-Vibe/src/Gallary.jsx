import React from "react";
import styled from "styled-components";
import ReactCompareImage from "react-compare-image";
import "./App.css";

const Gallary = () => {
  return (
    <Wrapper className="section">
      <h2 style={{ textAlign: "center", color: "gray" }}>
        <b>Our Gallary</b>
      </h2>
      <br />
      <br />

      <div className="gallary">
        <div className="gallary_item">
          <ReactCompareImage
            leftImage="src\assets\Cemeraman\fer-gomez-Z2RdKLpLbDs-unsplash.jpg"
            rightImage="src\assets\Cemeraman_converted photos\9th.jpg"
          />
        </div>

        <div className="gallary_item">
          <ReactCompareImage
            leftImage="src\assets\images_for_compare_slider\vegetables.webp"
            rightImage="src\assets\images_for_compare_slider\vec.jpg"
          />
        </div>

        <div className="gallary_item">
          <ReactCompareImage
            leftImage="src\assets\Cemeraman\kal-visuals-DqmXihYx5UE-unsplash.jpg"
            rightImage="src\assets\Cemeraman_converted photos\19th.jpg"
          />
        </div>

        <div className="gallary_item">
          <ReactCompareImage
            leftImage="src\assets\Cemeraman\samsung-memory-y3fYJWsgQt8-unsplash.jpg"
            rightImage="src\assets\Cemeraman_converted photos\40th.jpg"
          />
        </div>

        <div className="gallary_item">
          <ReactCompareImage
            leftImage="src\assets\Cemeraman\victor-hughes-zKJ-C7TvJVU-unsplash.jpg"
            rightImage="src\assets\Cemeraman_converted photos\50th.jpg"
          />
        </div>

        <div className="gallary_item">
          <ReactCompareImage
            leftImage="src\assets\Cemeraman\eberhard-grossgasteiger-N2xScr6Gsgg-unsplash.jpg"
            rightImage="src\assets\Cemeraman_converted photos\8th.jpg"
          />
        </div>
        <div className="gallary_item">
          <ReactCompareImage
            leftImage="src\assets\images_for_compare_slider\caspar-camille-rubin-o6btCGOhXBE-unsplash.jpg"
            rightImage="src\assets\images_for_compare_slider\casper.jpg"
          />
        </div>

        <div className="gallary_item">
          <ReactCompareImage
            leftImage="src\assets\images_for_compare_slider\download (1).jpg"
            rightImage="src\assets\images_for_compare_slider\casper3.jpg"
          />
        </div>

        <div className="gallary_item">
          <ReactCompareImage
            leftImage="src\assets\images_for_compare_slider\download (3).jpg"
            rightImage="src\assets\images_for_compare_slider\casper1.jpg"
          />
        </div>

        <div className="gallary_item">
          <ReactCompareImage
            leftImage="src\assets\images_for_compare_slider\download.jpg"
            rightImage="src\assets\images_for_compare_slider\casper4.jpg"
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .gallary {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(800px, 1fr));
    grid-gap: 30px;
  }
  .common_heading {
    text-align: center;
    font-weight: bold;
  }
  .gallery_item {
    width: 100%;
    height: auto;
    padding-bottom: 100%;
    object-fit: cover;
  }
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Gallary;
