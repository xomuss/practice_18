import React, {Component} from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';


class Modal extends Component {
  state = {};

  onEscClick = (evt) => {
    if (evt.code === "Escape") {
      this.props.toggleModal(!this.props.valueState)
    };
  };

  componentDidMount() {
      window.addEventListener('keydown', this.onEscClick)
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscClick)
  };
    
    
  render() {
    console.log(this.props.valueState)
      return (
        createPortal(
          <div>
            <div className={s.overlay}>
              <div className={s.content}>
                <h1>modal</h1>
              </div>
            </div>
          </div>,
          document.getElementById('modal'),
        )
      )
    };
};
  




export default Modal;
