import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsDropdownOpen } from '../../store/user/user-actions'
import {
  selectDropdownOpen,
  userSelector,
} from '../../store/user/user-selector'
import { NavP } from './signed-in-user.styles'

const SignedIn = () => {
  const currentUser = useSelector(userSelector)
  const isDropdownOpen = useSelector(selectDropdownOpen)
  const dispatch = useDispatch()
  const toggleIsDropdownOpenHandler = () =>
    dispatch(setIsDropdownOpen(!isDropdownOpen))

  return (
    <Fragment>
      <NavP onClick={toggleIsDropdownOpenHandler}>
        {`HELLO ${currentUser.displayName.toUpperCase()}`}
      </NavP>
    </Fragment>
  )
}

export default SignedIn
