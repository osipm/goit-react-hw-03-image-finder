import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, onClick }) => (
  <li className={s.ImageGalleryItem}>
    <img
      src={src}
      alt=""
      onClick={onClick}
      className={s.ImageGalleryItemImage}
    />
  </li>
);

export default ImageGalleryItem;

ImageGalleryItem.prototype = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
