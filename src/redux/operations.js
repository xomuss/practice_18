import { toggleModal } from './actions';


export const toggleModalOperation = (value) => dispatch => {
    dispatch(toggleModal(value));
 };