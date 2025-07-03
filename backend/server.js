import app from './app.js';
import dotenv from 'dotenv';
import Razorpay from 'razorpay';
import cors from 'cors';
dotenv.config({ path: 'backend/config/config.env' });
const port = process.env.PORT || 3000;
app.use(cors());
export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY || 'dummy_key_id',
    key_secret: process.env.RAZORPAY_API_SECRET || 'dummy_key_secret',
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
    console.log(`Visit http://localhost:${port}`);
});