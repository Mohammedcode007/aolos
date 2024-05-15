import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CommonModal = ({ show, onHide, title, bodyText, onConfirm,isMobileScreen }) => {
  return (
    <Modal show={show} onHide={onHide} centered style={{zIndex:isMobileScreen && 9999999,width:isMobileScreen && '88%'}}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{bodyText}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CommonModal;
