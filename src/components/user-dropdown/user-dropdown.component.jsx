import { useDispatch } from 'react-redux'
import { signOutStart } from '../../store/user/user-actions'
import {
  DropdownLink,
  DropdownSpan,
  UserDropdownContainer,
} from './user-dropdown.styles'

const UserDropdown = () => {
  const dispatch = useDispatch()
  const signOutUser = () => dispatch(signOutStart())
  return (
    <UserDropdownContainer>
      <DropdownLink to="/profile">PROFILE</DropdownLink>
      <DropdownSpan onClick={signOutUser}>SIGN OUT</DropdownSpan>
    </UserDropdownContainer>
  )
}

export default UserDropdown
