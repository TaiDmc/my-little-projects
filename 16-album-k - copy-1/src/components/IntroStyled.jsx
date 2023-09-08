import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useModal from "../hooks/useModal";
import { Modal } from "./Modal";

const pathsOfPhotos = [
  "1672021060854.jpg",
  "1672021061734.jpg",
  "1672021062566.jpg",
  "1672021063920.jpg",
  "1672021060985.jpeg",
  "1672021061755.jpg",
  "1672021062667.jpg",
  "1672021063940.jpg",
  "1672021061005.jpeg",
  "1672021061776.jpg",
  "1672021062948.jpg",
  "1672021063961.jpg",
  "1672021061021.jpeg",
  "1672021061803.jpg",
  "1672021063028.jpg",
  "1672021063984.jpg",
  "1672021061039.jpeg",
  "1672021061820.jpg",
  "1672021063177.jpg",
  "1672021064007.jpg",
  "1672021061835.jpg",
  "1672021063226.jpg",
  "1672021064052.jpg",
  "1672021061498.jpg",
  "1672021062105.jpg",
  "1672021063670.jpg",
  "1672021061521.jpg",
  "1672021062127.jpg",
  "1672021063717.jpg",
  "1672021061559.jpg",
  "1672021062146.jpg",
  "1672021063745.jpg",
  "1672021061581.jpg",
  "1672021062163.jpg",
  "1672021063770.jpg",
  "1672021061605.jpg",
  "1672021062178.jpg",
  "1672021063799.jpg",
  "1672021061626.jpg",
  "1672021062233.jpg",
  "1672021063826.jpg",
  "1672021061668.jpg",
  "1672021062496.jpg",
  "1672021063849.jpg",
  "1672021061691.jpg",
  "1672021062522.jpg",
  "1672021063872.jpg",
  "1672021061713.jpg",
  "1672021062543.jpg",
  "1672021063896.jpg",
];
const numInit = 0;
const directory = `${import.meta.env.BASE_URL}/imagesAndVideos/`;

export const IntroStyled = () => {
  const [numberForPath, setNumberForPath] = useState(numInit);
  const [path, setPath] = useState(pathsOfPhotos[numberForPath]);
  const [isOpenModal, openModal, closeModal] = useModal(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumberForPath((numberForPath) => numberForPath + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (numberForPath >= pathsOfPhotos.length) setNumberForPath(numInit);
    setPath(pathsOfPhotos[numberForPath]);
  }, [numberForPath]);

  const DivIamge = styled.div`
    min-height: 100vh;
    min-width: 100%;
    background-image: url(${directory + path});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 50%;
    background-attachment: fixed;
    opacity: 0.2;
    animation: changeImg 10s linear infinite alternate both;
    display: inline-block;

    @keyframes changeImg {
      0% {
        transform: translateX(-100%);
        filter: brightness(0%);
      }

      50% {
        transform: translateX(0);
        filter: brightness(100%);
      }

      100% {
        transform: translateX(110%);
        filter: brightness(30%);
      }
    }

    @media screen and (min-width: 48em) {
      background-size: 70%;
      background-position: center;
    }

    @media screen and (min-width: 60em) {
      background-size: 50%;
      background-position: center;
    }
  `;

  const DivContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const IntroContent = styled.div`
    background-color: #111;
    border: thin solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 70%;
    font-weight: 500;
    margin: 1rem;
    /* max-width: 70%; */
    overflow: scroll;
    outline: thin solid white;
    outline-offset: -0.8rem;
    position: absolute;
    padding: 2rem;
    /* top: 10%;
    bottom: 10%;
    right: 10%;
    left: 10%; */

    @media screen and (min-width: 48em) {
      top: 20%;
      left: 20%;
      right: 20%;
      bottom: 20%;
    }
  `;

  const H1 = styled.h1`
    font-family: "Courier New", Courier, monospace;
    font-weight: 300;
  `;

  return (
    <DivContainer onClick={openModal}>
      <DivIamge />

      <IntroContent onClick={closeModal}>
        <H1>Intro</H1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          accusantium aut, magni consequatur officiis officia adipisci nisi
          eligendi sunt earum accusamus quae sequi error aliquam! Tenetur ipsam
          aspernatur et temporibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          accusantium aut, magni consequatur officiis officia adipisci nisi
          eligendi sunt earum accusamus quae sequi error aliquam! Tenetur ipsam
          aspernatur et temporibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          accusantium aut, magni consequatur officiis officia adipisci nisi
          eligendi sunt earum accusamus quae sequi error aliquam! Tenetur ipsam
          aspernatur et temporibus.
        </p>
      </IntroContent>
    </DivContainer>
  );
};
