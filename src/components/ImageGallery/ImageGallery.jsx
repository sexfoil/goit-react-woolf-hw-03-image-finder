import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            alt={image.tags}
          />
        );
      })}
    </ul>
  );
};
