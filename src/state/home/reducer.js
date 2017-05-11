import { combineReducers } from 'redux';

import {
  HOME,
  SLOGAN
} from 'state/action-types';

export function items ( state = {}, action ) {
  switch ( action.type ) {
    case HOME:
      return Object.assign( {}, state, {
        [ action.user.ID ]: action.user
      } );
    case SLOGAN:
      return  Object.assign( {}, state, {
        slogan: action.slogan
      } );
  }

  return state;
}

export default combineReducers( {
  items,
} );
