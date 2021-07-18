import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {toggleModal} from './actions';

let initialState = true;

const modal = createReducer(initialState, {
    [toggleModal]: (_, { payload }) => payload, 
});

export default combineReducers(
    {
        modal,
    }
)
