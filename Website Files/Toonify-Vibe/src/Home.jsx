import { useEffect } from "react";
import LandingPage from "./components/LandingPage";
import landing_card from "./components/landing_card";
import { useGlobalContext } from "./context";
import ReactCompareImage from "react-compare-image";
import styled from "styled-components";

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
      <LandingPage />
      <Wrapper>
        <div className="image_beside_text">
          <p className="h2_text_left">
            Make your photos more <b>colorful</b>
          </p>
          <ReactCompareImage
            leftImage="src\assets\Cemeraman\eberhard-grossgasteiger-N2xScr6Gsgg-unsplash.jpg"
            rightImage="src\assets\Cemeraman_converted photos\8th.jpg"
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="image_beside_text">
          <ReactCompareImage
            leftImage="src\assets\Cemeraman\fer-gomez-Z2RdKLpLbDs-unsplash.jpg"
            rightImage="src\assets\Cemeraman_converted photos\9th.jpg"
          />

          <p className="h2_text_right">
            Create your photos more <b>vibrant</b>
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="image_beside_text">
          <p className="h2_text_left">
            Create <b>cute</b> pictures <b>cuter</b>
          </p>
          <ReactCompareImage
            leftImage="src\assets\images_for_compare_slider\download (3).jpg"
            rightImage="src\assets\images_for_compare_slider\casper1.jpg"
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .image_beside_text {
    display: flex;
    align-items: center;
    max-width: 70%;
    margin-left: auto;
    margin-right: auto;
    transition: transform 0.3s;
  }
  .h2_text_right {
    font-size: 5.4rem;
    margin-left: 150px;
  }
  .h2_text_left {
    font-size: 5.4rem;
    margin-right: 150px;
  }
  .image_beside_text:hover {
    transform: scale(1.1);
  }
`;

export default Home;
