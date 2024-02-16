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
    loading: false,
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = async () => {
    const data = await getPixabayImages('cat', 1);
    this.setState({ images: data.hits });
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar />
        <ImageGallery images={this.state.images} />
        {this.state.loading && <Loader />}
        {false && <Modal />}
        <Button />
      </div>
    );
  }
}

export default App;
