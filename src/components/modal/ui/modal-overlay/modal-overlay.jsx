import modalOverlayStyles from './modal-overlay.module.css';

const ModalOverlay = ({
  children,
  onClick,
}) => {

  return (
    <div className={modalOverlayStyles.overlay} onClick={onClick}>
      {children}
    </div>
  )
};

export default ModalOverlay;
