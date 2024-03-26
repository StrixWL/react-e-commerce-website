// Payment.js
import React from 'react';
import PayHeader from '../../components/Payment/PayHeader';
import PayForm from '../../components/Payment/PayForm';
import OrderInfo from '../../components/Payment/OrderInfo';

const Payment = () => {
  return (
    <div className="flex flex-col md:flex-row md:min-h-screen">
      <div className="md:w-1/2">
        {/* PayForm will take up half the width on medium screens and up */}
        <PayForm />
      </div>
      <div className="md:w-1/2">
        {/* OrderInfo will also take up half the width and be sticky */}
        <OrderInfo />
      </div>
    </div>
  );
};

export default Payment;
