const express = require('express');
const router = express.Router();
const Stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


router.post('/create-checkout-session', async (req, res) => {
    console.log(req.body);
    try {

        const lineItems = req.body.map((item) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price * 100 // Convert price to smallest currency unit (cents/paise)
            },
            quantity: item.quantity
        }));
        // const params = {
        //     submit_type: "pay",
        //     mode: "payment",
        //     payment_method_types: ['card'],
        //     billing_address_collection: "auto",
        //     shipping_options: [{ shipping_rate: "shr_1OqqrjSJxOVY5FBmNoiDPylA" }],
        //     line_items: lineItems,
        //     success_url: `${process.env.FRONTEND_URL}/success`,
        //     cancel_url: `${process.env.FRONTEND_URL}/cancel`
        // };


        const session = await Stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: "payment",
            success_url: `${process.env.FRONTEND_URL}/success`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`
        });
        res.status(200).json({ sessionId: session.id });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
