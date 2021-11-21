import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleESCButtonClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleESCButtonClose);
  }

  handleESCButtonClose = event => {
    if (event.code !== 'Escape') return;
    this.props.onClose();
  };

  handleClose = event => {
    if (event.target !== event.currentTarget) return;
    this.props.onClose();
  };

  render() {
    const { src, tags } = this.props;
    return createPortal(
      <div className={s.Overlay} onClick={this.handleClose}>
        <div className={s.Modal}>
          <img src={src} alt={tags} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
