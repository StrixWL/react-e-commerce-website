import React from 'react'
import PayHeader from '../../components/Payment/PayHeader'
import PayForm from '../../components/Payment/PayForm'
import OrderInfo from '../../components/Payment/OrderInfo'

const Payment = () => {
  return (
    <div>
        <PayHeader />
        <div className="grid grid-cols-1 md:grid-cols-2">
            <PayForm />
            <OrderInfo />
       
        </div>
    </div>
  )
}

export default Payment
