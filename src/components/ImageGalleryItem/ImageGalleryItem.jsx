import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li className={css['gallery-item']}>
      <img className={css['gallery-item-img']} src={src} alt={alt} />
    </li>
  );
};
