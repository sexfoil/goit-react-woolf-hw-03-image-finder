import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { getPixabayImages } from 'api/PixabayAPI';

import css from './App.module.css';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    loadMore: false,
    currentImage: null,
  };

  showCurrentImage = image => {
    this.setState({ currentImage: image });
    document.addEventListener('keydown', this.handleCurrentImageEscPress);
  };

  hideCurrentImage = () => {
    this.setState({ currentImage: null });
  };

  handleCurrentImageEscPress = evt => {
    if (evt.code === 'Escape') {
      this.hideCurrentImage();
      document.removeEventListener(this.handleCurrentImageEscPress);
    }
  };

  getImages = async (query, page) => {
    console.log('page>> ', page);
    try {
      this.setState({ loading: true });
      if (query !== this.state.query) {
        this.setState({ images: [] });
      }
      const data = await getPixabayImages(query, page);
      this.setState(prev => {
        const allImages =
          prev.images && page !== 1
            ? [...prev.images, ...data.hits]
            : data.hits;
        return {
          images: allImages,
          query: query,
          page: prev.page + 1,
          loadMore: allImages.length < data.totalHits,
        };
      });
    } catch (error) {
      console.log(`Something went wrong... Cause: ${error}`);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar getImages={this.getImages} />
        {this.state.images && (
          <ImageGallery
            images={this.state.images}
            showCurrentImage={this.showCurrentImage}
          />
        )}
        {this.state.loading && <Loader />}
        {this.state.loadMore && (
          <Button
            loadMore={this.getImages}
            query={this.state.query}
            page={this.state.page}
          />
        )}
        {this.state.currentImage && (
          <Modal
            image={this.state.currentImage}
            hideCurrentImage={this.hideCurrentImage}
          />
        )}
      </div>
    );
  }
}

export default App;
