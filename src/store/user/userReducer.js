import { USER_ACTION_TYPES } from './user-types'

const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
  isDropdownOpen: false,
}

//Reducers change the object and values inside them based on the action also returns back current state
export const userReducer = (state = USER_INITIAL_STATE, action) => {
  //payload stores the value that is important to the reducer
  const { type, payload } = action

  /*
  {
    currentUser: null,
    firstName: '',
    lastName: '',
  } 

  the ...state below means that were to spread through all states and values within the object but only alters states and values listed after (currentUser)
  */
  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      }
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      }
    case USER_ACTION_TYPES.SET_IS_DROPDOWN_OPEN:
      return {
        ...state,
        isDropdownOpen: payload,
      }

    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
      return {
        ...state,
        error: payload,
      }

    default:
      return state
  }
}
