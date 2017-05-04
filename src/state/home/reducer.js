import { combineReducers } from 'redux';

import {
  HOME
} from 'state/action-types';

export function items ( state = {}, action ) {
  switch ( action.type ) {
    case HOME:
      return Object.assign( {}, state, {
        [ action.user.ID ]: action.user
      } );
  }

  return state;
}

export default combineReducers( {
  items,
} );
