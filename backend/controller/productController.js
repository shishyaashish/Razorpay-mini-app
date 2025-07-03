/**
 yeh code actual hai but 
 import { instance } from "../server.js";
export const processPayment =async(req,res)=>{
    const option ={
        amount :Number(req.body.amount)*100, //amount in paisa
        currency:"INR",
    }
    const order = await instance.orders.create(option) //actual order creation 
  
    res.status(200).json({
        success:true,
        order,
       
    });
    }

    export const getKey = async(req, res) => {
        res.status(200).json({
            key: process.env.RAZORPAY_API_KEY || 'dummy_key_id',
        });

 */
//  Real Razorpay call hata diya
export const processPayment = async (req, res) => {
    try {
      //  Fake Dummy Order
      const fakeOrder = {
        id: "order_dummy_123456789",
        amount: Number(req.body.amount)*100,
        currency: "INR",
        status: "created",
        created_at: Date.now(),
      };
  
      res.status(200).json({
        success: true,
        order: fakeOrder,
      });
    } catch (err) {
      console.error("Mock Razorpay Error:", err);
      res.status(500).json({
        success: false,
        message: "Mock order failed",
      });
    }
  };
  export const getKey = async(req, res) => {
    res.status(200).json({
        key: process.env.RAZORPAY_API_KEY || 'dummy_key_id',
    });
    }