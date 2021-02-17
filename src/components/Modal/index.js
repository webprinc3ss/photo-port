import React from 'react';

function Modal({ currentPhoto }) {
    const { name, category, description, index } = currentPhoto;
    return (
        //3SX
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`).default} alt="current category" />
                <p>{description}</p>
                <button type="button">
                    Close the modal
                </button>
            </div>
        </div>
    );
}

export default Modal;
