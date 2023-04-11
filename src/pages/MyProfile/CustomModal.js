import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CustomModal = (props) => {
  const { modalTitle, toggleModal, handleSave, children, isOpen, buttonLabel } =
    props;

  return (
    <Modal isOpen={isOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>{modalTitle}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <button className="btn btn-secondary" onClick={toggleModal}>
          Cancel
        </button>
        <button className="btn btn-primary" onClick={handleSave}>
          {buttonLabel}
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default CustomModal;
