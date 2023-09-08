import React from "react";
import useModal from "../hooks/useModal";
import { Modal } from "./Modal";

export const Card = ({ path, quote, id }) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  const regexVideo = /.mp4$/;
  const finalPath = `${import.meta.env.BASE_URL}/imagesAndVideos/${path}`;
  const videoOrPhoto = regexVideo.test(path) ? null : (
    <img src={finalPath} alt={path}></img>
  );
  const classNameReverse = id % 2 === 0 ? "" : "-end";

  if (!quote) {
    quote = { date: "any", sentence: "any" };
  }
  const { date, sentence } = quote;

  return (
    videoOrPhoto && (
      <div className="card" key={id}>
        <figure className="figure-card" onClick={openModal}>
          {videoOrPhoto}
        </figure>

        <Modal
          isOpen={isOpenModal}
          closeModal={closeModal}
          isClassButton={classNameReverse}
        >
          <div className="container-content-modal">
            <figure className={`figure-modal${classNameReverse}`}>
              {videoOrPhoto}
              <figcaption className={`figc-modal${classNameReverse}`}>
                <h3 className="courier-new-fn">{date}</h3>
                <h4>"{sentence}</h4>
              </figcaption>
            </figure>
          </div>
        </Modal>
      </div>
    )
  );
};
