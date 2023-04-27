import React, { forwardRef, useImperativeHandle } from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";

export const ModalRegistro = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    showAlert() {
      alert("Hello from Child Component");
    },
  }));
  return (
    <div>
      <Modal>
        <ModalHeader>asdasdas</ModalHeader>
        <ModalBody>asdasdsa</ModalBody>
      </Modal>
    </div>
  );
});
