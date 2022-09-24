import { useState } from 'react'

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import { useSelector } from 'react-redux'

import { selectCartTotal } from '../../store/cart/cart-selector'

import { userSelector } from '../../store/user/user-selector'

import { BUTTON_TYPE_CLASSES } from '../button/button.component'

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from './payment-form.styles'

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const amount = useSelector(selectCartTotal)
  const currentUser = useSelector(userSelector)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const paymentHandler = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessingPayment(true)

    const response = await fetch(`/.netlify/functions/create-payment-intent`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json())

    const clientSecret = response.paymentIntent.client_secret
    /* or
     const { 
       paymentIntent: { client_secret },
      } = response

  */

    //creating the payment
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          //if currentUser = true, then use currentUser displayName. Else use 'Guest'
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    })

    setIsProcessingPayment(false)

    if (paymentResult.error) {
      alert(paymentResult.error)
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful')
      }
    }
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <PaymentButton
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          type="submit"
          isLoading={isProcessingPayment}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm
