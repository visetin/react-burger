import PropTypes from 'prop-types';
import modalOverlayStyles from './modal-overlay.module.css';

const ModalOverlay = ({
  children,
  handleClick,
}) => {

  return (
    <div className={modalOverlayStyles.overlay} onClick={handleClick}>
      {children}
    </div>
  )
};

ModalOverlay.propTypes = {
  handleClick: PropTypes.func,
};

export default ModalOverlay;
