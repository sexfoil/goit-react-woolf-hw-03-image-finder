import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, showCurrentImage }) => {
  return (
    <li className={css['gallery-item']} onClick={() => showCurrentImage(image)}>
      <img
        className={css['gallery-item-img']}
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  );
};
