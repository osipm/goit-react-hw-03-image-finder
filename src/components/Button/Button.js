import s from './Button.module.css';
import PropTypes from 'prop-types';
const Button = ({ onClickLoad }) => {
  return (
    <div className={s.containerBtn}>
      <button type="button" onClick={onClickLoad} className={s.Button}>
        Load more
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  onClickLoad: PropTypes.func.isRequired,
};
