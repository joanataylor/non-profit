import React from "react";
import { Link } from "react-router-dom";
import MateusLogo from "./img/fcm-logotipo.svg";
// import axios from axios;

import { useState } from "react";

const Donate = () => {
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

  // const handleDonations = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:8000/api/stripe/")
  //     .then((res) => {
  //       console.log(res.data);
  //       setErrors(null);
  //       navigate("/donate");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setErrors(err?.response?.data?.errors);
  //     });
  // };

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

  // const cpasswordHandler = (e) => {
  //   setCpassword(e.target.value);
  //   if (e.target.value.length < 1){
  //     setCpasswordErrors('Password must match!');
  //   }else if (password != e.target.value){
  //     setCpasswordErrors("Password must match!")
  //   }else if (e.target.value.length < 8 ){
  //     setPasswordErrors("Password must be at least 8 characters!")
  //   }else {
  //     setCpasswordErrors(false);
  //   }
  // }
  return (
    <div>
      <div className="container">
        <main>
          <div className="py-5 text-center">
            <img
              className="img-fluid"
              src={MateusLogo}
              alt="error"
              width="272"
              height="257"
            />
            {/* <h2>Checkout form</h2> */}
            <p className="lead">
              Mateus Palace is a 501(c)3 charity. Your gift is tax-deductible as
              allowed by U.S. law.
            </p>
          </div>

          <div className="row g-5">
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Billing address</h4>


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

                  <div className="col-12">
                    <label for="email" className="form-label">
                      Email <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="you@example.com"
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div className="col-12">
                    <label for="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required
                      value={address}
                      onChange={addressHandler}
                    />

                    {AddressErrors && (
                      <span class="form-text text-danger">
                        {AddressErrors}
                      </span>
                    )}

                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div className="col-12">
                    <label for="address2" className="form-label">
                      Address 2 <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address2"
                      placeholder="Apartment or suite"
                    />
                  </div>

                  <div className="col-md-5">
                    <label for="country" className="form-label">
                      Country
                    </label>
                    <select className="form-select" id="country" required value={country}
                      onChange={lastNameHandler}
                    >

                    {CountryErrors && (
                      <span class="form-text text-danger">
                        {CountryErrors}
                      </span>
                    )}
                      <option value="">Choose...</option>
                      <option>United States</option>
                      <option>Portugal</option>
                      <option>Canada</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>

                  <div className="col-md-4">
                    <label for="state" className="form-label">
                      State
                    </label>
                    <select className="form-select" id="state" required>
                      <option value="">Choose...</option>
                      <option>Arizona</option>
                      <option>California</option>
                      <option>Florida</option>
                      <option>Maryland</option>
                      <option>Virgina</option>
                      <option>Washington DC</option>
                      <option>Wyoming</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label for="zip" className="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="same-address"
                  />
                  <label className="form-check-label" for="same-address">
                    Shipping address is the same as my billing address
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="save-info"
                  />
                  <label className="form-check-label" for="save-info">
                    Save this information for next time
                  </label>
                </div>

                <hr className="my-4" />

                <h4 className="mb-3">Payment</h4>

                <div className="my-3">
                  <div className="form-check">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      checked
                      required
                    />
                    <label className="form-check-label" for="credit">
                      Credit card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required
                    />
                    <label className="form-check-label" for="debit">
                      Debit card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required
                    />
                    <label className="form-check-label" for="paypal">
                      PayPal
                    </label>
                  </div>
                </div>

                <div className="row gy-3">
                  <div className="col-md-6">
                    <label for="cc-name" className="form-label">
                      Name on card
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder=""
                      required
                      value={ccname}
                      onChange={ccNameHandler}
                    />

                    {CcNameErrors && (
                      <span class="form-text text-danger">
                        {CcNameErrors}
                      </span>
                    )}

                    
                    <small className="text-muted">
                      Full name as displayed on card
                    </small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label for="cc-number" className="form-label">
                      Credit card number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label for="cc-expiration" className="form-label">
                      Expiration
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>

            <div className="col-md-3">
              <label for="cc-cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
              <div className="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr className="my-4" />

          <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to Donations</button>
        </form>
      </div>
    </div>
  </main>

  <footer className="my-5 pt-5 text-muted text-center text-small">
    <p className="mb-1">&copy; 2023 Mateus Palace</p>
    <ul className="list-inline">
      <li className="list-inline-item"><Link to="#">Privacy</Link></li>
      <li className="list-inline-item"><Link to="#">Terms</Link></li>
      <li className="list-inline-item"><Link to="#">Support</Link></li>
    </ul>
  </footer>
</div>
</div>
  )
}
export default Donate;
