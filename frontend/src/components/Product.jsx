import React from 'react';
import axios from 'axios';
import Razorpay from 'razorpay';

function Product({ title, price, image }) {
  const checkoutHandler = async () => {
    try {
      // Fetch Razorpay key
      const { data: keyData } = await axios.get('/api/v1/getkey');
      const { key } = keyData;
      console.log('Razorpay Key:', key);

      // Create order
      const { data: orderData } = await axios.post('/api/v1/payment/process', { amount: price * 100 }); // Amount in paise
      const { order } = orderData;
      console.log('Order Data:', order);

      // Open Razorpay Checkout
      const options = {
        key, // Dynamic key from backend
        amount: order.amount, // Use amount from order data (in paise)
        currency: 'INR',
        name: 'Mishra Razorpay Integration',
        description: 'Test Transaction',
        order_id: order.id, // Order ID from backend
        handler: async (response) => {
          // Handle success (e.g., verify payment)
          console.log('Payment Success:', response);
          // Optionally call payment verification endpoint
          await axios.post('/api/v1/paymentVerification', response);
        },
        prefill: {
          name: 'Ashish Mishra',
          email: 'techinbox.ashishdevlife@gmail.com',
          contact: '9999999999',
        },
        theme: {
          color: '#F37254',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment Error:', error.message, error.response?.data);
    }
  };

  return (
    <div className="productContainer">
      <div className="productCard">
        <img src={image} alt={title} className="productImage" />
        <h3 className="productTitle">{title}</h3>
        <p className="productPrice">Price <strong>{price}</strong></p>
        <button className="payButton" onClick={checkoutHandler}>Pay {price}/-</button>
      </div>
    </div>
  );
}

export default Product;