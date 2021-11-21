import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';
const Loader = () => {
  return (
    <Spinner
      className={s.spinner}
      type="Rings"
      color="#00BFFF"
      height={80}
      width={80}
    />
  );
};

export default Loader;
