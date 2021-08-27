import {
    NEXT_PAGE
} from '../_actions/types'

/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unreachable */
export default function(state ={}, action) {
    switch (action.type) {
        case NEXT_PAGE:
            return {...state, page : action.payload + 1}
            break;
    default:
        return state;
    }

}