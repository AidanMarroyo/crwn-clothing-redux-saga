import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onProfileUpdate } from '../../store/user/user-saga'
import { userSelector } from '../../store/user/user-selector'
import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import { UserInfoContainer } from './user-info.styles'

const UserInfoForm = () => {
  const currentUser = useSelector(userSelector)
  const { displayName, password, confirmPassword } = currentUser
  const [formFields, setFormFields] = useState(currentUser)
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('passwords do not match')
      return
    }

    try {
      dispatch(onProfileUpdate(displayName, password))
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <UserInfoContainer>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          value={displayName}
          onChange={handleChange}
          name="displayName"
        ></FormInput>

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></FormInput>

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        ></FormInput>
        <Button type="submit">Update</Button>
      </form>
    </UserInfoContainer>
  )
}

export default UserInfoForm
