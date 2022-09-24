/* button types:
default
inverted
google sign in
*/

import {
  BaseButton,
  GoogleButton,
  InvertedButton,
  ButtonSpinner,
} from './button.styles'

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType])

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType)
  return (
    //when isLoading is passed through, the button will be disabled
    <CustomButton disabled={isLoading} {...otherProps}>
      {/* if isLoading is true, then show ButtonSpinner otherwise show children */}
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  )
  // the dynamic class name allows for one button component to be shared amongst the whole application while still adding the ability to add unique styles
}

//children prop represent what the text will be inside the button

export default Button
