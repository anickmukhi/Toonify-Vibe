import React from "react";
import styled from "styled-components";

const LandingCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  cursor: pointer;
  width: 340px;
  height: 480px;

  .front,
  .back {
    width: 100%;
    height: 100%;
    overflow: hidden;
    backface-visibility: hidden;
    position: absolute;
    transition: transform 0.6s linear;
  }

  .front img {
    height: 100%;
  }

  .back img {
    height: 100%;
  }

  .front {
    transform: perspective(600px) rotateY(0deg);
  }

  .back {
    transform: perspective(600px) rotateY(180deg);
  }

  .card:hover > .front {
    transform: perspective(600px) rotateY(-180deg);
  }

  .card:hover > .back {
    transform: perspective(600px) rotateY(0deg);
  }
`;

const landing_card = () => {
  return (
    <LandingCard>
      <div class="front">
        <img src="Butter.jpeg" alt="" />
      </div>
      <div class="back">
        <img src="BC.jpg" alt="" />
      </div>
    </LandingCard>
  );
};

export default landing_card;
