import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { CustomButton } from '..';
import { BEMHelper } from '../../../utils/bem-helper';
import './styles.scss'
import { IModalProps } from '../Interfaces/dtos';


const classHelper = BEMHelper('modal')
export const ModalComponent: React.FC<IModalProps> = ({
  buttonText,
  modalTitle,
  modalBody,
  modalCloseText,
  modalConfirmText,
  animation = true,
  backdropTransition = '',
  dialogTransition = '',
  size,
  fullscreen,
  centered = false, // Default centered to false if not provided
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <CustomButton size='large' onClick={handleShow}>
            {buttonText}
          </CustomButton>
      <Modal
        show={show}
        onHide={handleClose}
        animation={animation}
        backdropTransition={backdropTransition}
        dialogTransition={dialogTransition}
        size={size}
        fullscreen={fullscreen}
        centered={centered} // Use the centered prop
        bsPrefix={classHelper('')}
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBody}</Modal.Body>
        <Modal.Footer className={classHelper('footer')}>
          <CustomButton buttonType='button-disabled' size='large'  onClick={handleClose}>
            {modalCloseText}
          </CustomButton>
          <CustomButton size='large'  onClick={handleClose}>
            {modalConfirmText}
          </CustomButton>
        </Modal.Footer>
      </Modal>
    </>
  );
};

