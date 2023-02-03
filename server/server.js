const express = require("express");
const app = express();

const stripe = require("stripe")(
  "sk_test_51MWngsEnyGDuL2I4jHjEKAJEIskiaPV3FJ3CbbjGIMkdvxsdtbqOPFvgHIAdkJXXkiNcISQreiN6bSsF9RlotJeQ00ZBoUMe23"
);

const cors = require("cors");
app.use(express.json(), cors());

const dotenv = require("dotenv");
dotenv.config();

const connectDb = require("./config/mongoose.config");
connectDb();

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};


app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});


// const pirateRouter = require("./routes/pirate.routes");
// app.use("/api/pirates", pirateRouter);

const colors = require("colors");
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(colors.bgGreen(`Listening on port ${PORT}`))
);
