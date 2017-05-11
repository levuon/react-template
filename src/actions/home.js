

import { SLOGAN } from '../state/action-types'



function loadSlogan() {
  return dispatch => {
    return dispatch({
      type: SLOGAN,
      slogan: 'hahahaha!'
    })
  }
}


export default {
  loadSlogan
};
