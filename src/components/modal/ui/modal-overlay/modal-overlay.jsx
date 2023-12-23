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

export default ModalOverlay;
