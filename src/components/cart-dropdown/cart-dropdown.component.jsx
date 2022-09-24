import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../store/cart/cart-selector'

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  const goToShopHandler = () => {
    navigate('/shop')
  }
  return (
    <CartDropdownContainer>
      <CartItems>
        {/* This says that if cartItems.length === truthy (that the length of cartItems is greater than 0) then map through cart items */}
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      {cartItems.length ? (
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      ) : (
        <Button onClick={goToShopHandler}>GO TO SHOP</Button>
      )}
    </CartDropdownContainer>
  )
}

export default CartDropdown
