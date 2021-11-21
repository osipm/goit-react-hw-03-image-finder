import './App.css';
import { ToastContainer } from 'react-toastify';
import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchPicture: '',
  };

  handleFormSubmit = searchPicture => {
    this.setState({ searchPicture });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchPicture={this.state.searchPicture} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
