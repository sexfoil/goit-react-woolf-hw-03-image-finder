import css from './Modal.module.css';

export const Modal = ({ image, hideCurrentImage }) => {
  return (
    <div className={css.overlay} onClick={() => hideCurrentImage()}>
      <div className={css.modal}>
        <img src={image.largeImageURL} alt={image.tags} />
      </div>
    </div>
  );
};
