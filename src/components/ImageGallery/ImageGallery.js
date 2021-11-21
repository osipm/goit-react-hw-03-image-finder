import { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';

class ImageGallery extends Component {
  state = {
    hits: [],
    page: 1,
    showModal: false,
    itemId: null,
    loading: false,
    loadMore: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.loading) return;
    const isNewSearch = prevProps.searchPicture !== this.props.searchPicture;
    const isNewPage = prevState.page !== this.state.page;
    const page = isNewSearch ? 1 : this.state.page;
    if (isNewSearch || isNewPage) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchPicture}&page=${page}&key=23546576-898e6f2f9578ee60189c27f38&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => response.json())
        .then(response => {
          if (isNewSearch) {
            this.setState({ hits: response.hits, page: 1 });
          } else {
            this.setState({ hits: [...prevState.hits, ...response.hits] });
          }
        })
        .finally(() => {
          this.setState({ loading: false, loadMore: true });
        });
    }
  }

  handleLoad = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleItemClick = itemId => {
    this.setState({ itemId });
    this.toggleModal();
  };

  render() {
    const { hits, showModal, itemId, loading, loadMore } = this.state;

    const modalImage = hits?.find(hit => hit.id === Number(itemId));
    const imageSrc = modalImage?.largeImageURL;
    const imageTags = modalImage?.tags;
    return (
      <div>
        <ul className={s.ImageGallery}>
          {this.state.hits.map(img => (
            <ImageGalleryItem
              src={img.webformatURL}
              key={img.id}
              onClick={() => this.handleItemClick(img.id)}
            />
          ))}
        </ul>
        {loading && <Loader />}
        {loadMore && <Button onClickLoad={this.handleLoad} />}

        {showModal && (
          <Modal onClose={this.toggleModal} src={imageSrc} alt={imageTags} />
        )}
      </div>
    );
  }
}

export default ImageGallery;
