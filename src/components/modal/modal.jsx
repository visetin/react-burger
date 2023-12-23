import ReactDOM from 'react-dom';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from './ui/modal-overlay/modal-overlay';
import modalStyles from './modal.module.css';

const portalElement = document.getElementById('modal');

const Modal = ({
  children,
  title,
  handleClose,
}) => {

  return ReactDOM.createPortal(
    (
      <ModalOverlay onClick={handleClose}>
        <div className={`${modalStyles.window} pt-10 pr-10 pb-15 pl-10 `}>
          <div className="flex-row flex-jc-between flex-ai-center">
            {
              title && <h2 className="text text_type_main-large mr-9">{title}</h2>
            }

            <div className="icon-box ml-auto">
              <CloseIcon type="primary" onClick={handleClose} />
            </div>
          </div>
          {children}
        </div>
      </ModalOverlay>
    ),
    portalElement
  )
};

export default Modal;
