import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const stripePromise = loadStripe(
  "pk_test_51MWngsEnyGDuL2I49oDUN5te4CQJ6EK1yc8kxEJajYovWITqkqqx5vMfart5BJP8YD2nvhUBnbCfKHtfdjtqSsmm009TRrdUhw"
);

function Checkout() {
  const [clientSecret, setClientSecret] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [ccname, setCcname] = useState("");
  // const [zip, setZip] = useState("");

  // const [forms, setForms] = useState([]);
  // const [hasBeenSubmitted, setHasBeenSubmitted] = useState("false");
  const [FirstNameErrors, setFirstNameErrors] = useState(null);
  const [LastNameErrors, setLastNameErrors] = useState(null);
  const [AddressErrors, setAddressErrors] = useState(null);
  const [CountryErrors, setCountryErrors] = useState(null);
  const [CcNameErrors, setCcNameErrors] = useState(null);


  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 1) {
      setFirstNameErrors("Valid first name is required.");
    } else if (e.target.value.length < 2) {
      setFirstNameErrors("Field must be at least 2 characters!");
    } else {
      setFirstNameErrors(null);
    }
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 1){
      setLastNameErrors('Valid last name is required.');
    }else if (e.target.value.length < 2 ){
      setLastNameErrors("Field must be at least 2 characters!")
    }else {
      setLastNameErrors(null);
    }
  };

  const addressHandler = (e) => {
    setAddress(e.target.value);
    if (e.target.value.length < 1){
      setAddressErrors('Please enter the address.');
    }else if (e.target.value.length < 2 ){
      setAddressErrors("Field must be at least 6 characters!")
    }else {
      setAddressErrors(null);
    }
  };

  const ccNameHandler = (e) => {
    setCcname(e.target.value);
    if (e.target.value.length < 1) {
      setCcNameErrors("Valid first name is required.");
    } else if (e.target.value.length < 2) {
      setCcNameErrors("Field must be at least 2 characters!");
    } else {
      setCcNameErrors(null);
    }
  };




  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:4242/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.log(err));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div style={{ backgroundColor: "#F8F7F2" }} className="container marketing pt-3 w-50">


<form className="needs-validation" novalidate>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label for="firstName" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      required
                      value={firstName}
                      onChange={firstNameHandler}
                    />

                    {FirstNameErrors && (
                      <span class="form-text text-danger">
                        {FirstNameErrors}
                      </span>
                    )}

                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label for="lastName" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder=""
                      required
                      value={lastName}
                      onChange={lastNameHandler}
                    />

                    {LastNameErrors && (
                      <span class="form-text text-danger">
                        {LastNameErrors}
                      </span>
                    )}
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                  </div>






      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
      {/* <button className="w-100 btn btn-primary btn-lg" type="submit">Donate now</button> */}
      <hr className="my-4" />


      </form>

      <footer className="my-5 pt-5 text-muted text-center text-small">
    <p className="mb-1">&copy; 2023 Mateus Palace</p>
    <ul className="list-inline">
      <li className="list-inline-item"><Link to="#">Privacy</Link></li>
      <li className="list-inline-item"><Link to="#">Terms</Link></li>
      <li className="list-inline-item"><Link to="#">Support</Link></li>
    </ul>
  </footer>
    </div>
  );
}

export default Checkout;
