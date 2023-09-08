import "./Modal.css";

import ReactDOM from "react-dom";

export const Modal = ({
  children,
  isOpen,
  closeModal,
  isClassButton,
  notPortal = false,
}) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return notPortal ? (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button
          onClick={closeModal}
          className={`modal-close ${isClassButton ? "reverse" : ""}`}
        >
          <p>X</p>
        </button>
        {children}
      </div>
    </article>
  ) : (
    ReactDOM.createPortal(
      <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-container" onClick={handleModalContainerClick}>
          <button
            onClick={closeModal}
            className={`modal-close ${isClassButton ? "reverse" : ""}`}
          >
            <p>X</p>
          </button>
          {children}
        </div>
      </article>,
      document.getElementById("modal")
    )
  );
};
