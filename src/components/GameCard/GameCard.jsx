import React, { useState } from 'react';
import styles from './GameCard.module.css';
import { FaPlus } from "react-icons/fa";
import { Modal } from 'react-bootstrap'; // Assuming you're using React Bootstrap for modals
import { IMAGES } from '../../assets/images/Images';
import { LuUsers2 } from "react-icons/lu";
import { TiTick } from "react-icons/ti";

const GameCard = ({ imageUrl, heading, link, paragraph, price, cssClass, showButton }) => {
    const [showModal, setShowModal] = useState(false);

    const handleModalToggle = () => {
        setShowModal(!showModal);
    };

    return (
        <div className={`${styles.gameCard} ${cssClass}`}>
            {showButton ? (
                <div>
                    <button className={`${styles.CustomButton} btn btn-primary`} onClick={handleModalToggle}>
                        <FaPlus className='me-1' /> Create
                    </button>

                    <Modal className='custom-modla modal-lg' show={showModal} onHide={handleModalToggle}>
                        <Modal.Header closeButton>
                            <Modal.Title>Select ~</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className={`${styles.Gamewrapper} text-center mb-4`}>
                                        <div className={`${styles.imgBox}`}>
                                            <img src={IMAGES.spin} alt='spin' />
                                        </div>
                                        <div className={`${styles.contentBox}`}>
                                            <h5 className='pt-2'>Spin The Wheel</h5>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-md-4'>
                                    <div className={`${styles.Gamewrapper} text-center mb-4`}>
                                        <div className={`${styles.imgBox}`}>
                                            <img src={IMAGES.spin} alt='spin' />
                                        </div>
                                        <div className={`${styles.contentBox}`}>
                                             <h5 className='pt-2'>Spin The Wheel</h5>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-md-4'>
                                    <div className={`${styles.Gamewrapper} text-center mb-4`}>
                                        <div className={`${styles.imgBox}`}>
                                            <img src={IMAGES.spin} alt='spin' />
                                        </div>
                                        <div className={`${styles.contentBox}`}>
                                             <h5 className='pt-2'>Spin The Wheel</h5>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-md-4'>
                                    <div className={`${styles.Gamewrapper} text-center mb-4`}>
                                        <div className={`${styles.imgBox}`}>
                                            <img src={IMAGES.spin} alt='spin' />
                                        </div>
                                        <div className={`${styles.contentBox}`}>
                                             <h5 className='pt-2'>Spin The Wheel</h5>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-md-4'>
                                    <div className={`${styles.Gamewrapper} text-center mb-4`}>
                                        <div className={`${styles.imgBox}`}>
                                            <img src={IMAGES.spin} alt='spin' />
                                        </div>
                                        <div className={`${styles.contentBox}`}>
                                             <h5 className='pt-2'>Spin The Wheel</h5>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-md-4'>
                                    <div className={`${styles.Gamewrapper} text-center mb-4`}>
                                        <div className={`${styles.imgBox}`}>
                                            <img src={IMAGES.spin} alt='spin' />
                                        </div>
                                        <div className={`${styles.contentBox}`}>
                                             <h5 className='pt-2'>Spin The Wheel</h5>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </Modal.Body>
                        {/* <Modal.Footer>
              <button className="btn btn-secondary" onClick={handleModalToggle}>Close</button>
            </Modal.Footer> */}
                    </Modal>

                </div>
            ) : (

                <>
                    <div className={styles.topSection}>
                        {/* Top images */}
                        <img src={imageUrl} alt="Game" className={styles.gameImage} />
                    </div>
                    <div className={styles.bottomSection}>
                        {/* Heading */}
                        <h2 className={styles.heading}>{heading}</h2>
                        {/* Link */}
                        <a href={link} className={styles.link}>{link}</a>
                        {/* Paragraph */}
                        <p className={styles.description}>{paragraph}</p>
                        {/* Price with React icon */}
                        <div className={`${styles.priceWrapper} d-flex align-item-center`}>
                            <div className={styles.price}>
                                <LuUsers2 className='me-1' /> {price} 
                            </div>
                            {/* <div className={styles.price}>
                                {price} <span role="img" aria-label="React icon">⚛️</span>
                            </div> */}
                            <div className={`${styles.price} ms-3`}>
                               <TiTick className='me-1' /> {price}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default GameCard;
