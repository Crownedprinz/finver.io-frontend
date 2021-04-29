import "./App.css";

function App() {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      {/*favicon icon*/}
      <link
        rel="icon"
        href="assets/img/favicon.png"
        type="image/png"
        sizes="16x16"
      />
      {/*title*/}
      <title>Finver</title>
      {/*build:css*/}
      <link rel="stylesheet" href="assets/css/main.css" />
      {/* endbuild */}
      {/*preloader start*/}
      {/* <div id="preloader">
        <div className="loader1">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div> */}
      {/*preloader end*/}
      <header className="header position-relative z-9">
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-dark navbar-theme-primary fixed-top headroom">
          <div className="container position-relative">
            <a className="navbar-brand mr-lg-3" href="index">
              {/*  <img class="navbar-brand-dark" src="assets/img/logo.png" alt="menuimage">
                    <img class="navbar-brand-light" src="assets/img/logo.png" alt="menuimage">
 */}{" "}
            </a>
            <div
              className="navbar-collapse collapse"
              id="navbar-default-primary"
            >
              <div className="navbar-collapse-header">
                <div className="row">
                  <div className="col-6 collapse-brand">
                    <a href="#">
                      <h2>Finver</h2>
                    </a>
                  </div>
                  <div className="col-6 collapse-close">
                    <i
                      className="fas fa-times"
                      data-toggle="collapse"
                      role="button"
                      data-target="#navbar-default-primary"
                      aria-controls="navbar-default-primary"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    />
                  </div>
                </div>
              </div>
              <ul className="navbar-nav navbar-nav-hover ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Docs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href>
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center">
              <button
                className="navbar-toggler ml-2"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-default-primary"
                aria-controls="navbar-default-primary"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div className="main">
        <section
          className="section pt-9 pb-9 section-header text-white gradient-overly-right-color"
          style={{
            background:
              'url("assets/img/hero-new-img-8.png")no-repeat center center / cover',
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-6">
                <div className="hero-slider-content">
                  <h1 className="display-2">Finver</h1>
                  <p className="lead">
                    Easy access to financial data and income analytics of
                    customers across all banks in Nigeria
                  </p>
                  <a href="#" className="btn btn-secondary mt-4">
                    How To Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-sm pb-0 mt-n8 z-5 position-relative">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-md-4 mb-4 mb-lg-0">
                <div className="single-promo-block promo-hover-bg-1 hover-image shadow p-5 rounded-custom bg-white">
                  <div className="promo-block-content">
                    <h5>Our Mission</h5>
                    <p className="mb-0">
                      Make use of technology to drive financial inclusion and
                      enable credit access in Africa{" "}
                    </p>
                    <p />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-md-4 mb-4 mb-lg-0">
                <div className="single-promo-block promo-hover-bg-2 hover-image shadow p-5 rounded-custom bg-white">
                  <div className="promo-block-content">
                    <h5>Our Vision</h5>
                    <p className="mb-0">
                      Be the foremost financial institution that drives
                      financial inclusion through credit access in Africa{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-md-4 mb-4 mb-lg-0">
                <div className="single-promo-block promo-hover-bg-3 hover-image shadow p-5 rounded-custom bg-white">
                  <div className="promo-block-content">
                    <h5>Motto</h5>
                    <p className="mb-0">
                      Enabling Financial Inclusion and Credit Access in Africa{" "}
                    </p>
                    <p className="mt-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lg  ">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-12 col-lg-6 mb-4 mb-md-4 mb-lg-0">
                <div className="card bg-primary position-relative  shadow-lg fancy-radius p-3">
                  <div className="dot-shape-top position-absolute">
                    <img
                      src="assets/img/color-shape.svg"
                      alt="dot"
                      className="img-fluid"
                    />
                  </div>
                  <img
                    className="fancy-radius img-fluid"
                    src="assets/img/hero-new-img.png"
                    alt="modern desk"
                  />
                  <div className="dot-shape position-absolute bottom-0">
                    <img src="assets/img/dot-shape.png" alt="dot" />
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-5">
                <div className="video-promo-content">
                  <h2>Our Business</h2>
                  <p className="lead">
                    Finver is a financial verification service which aids credit
                    access and validates credit worthiness by creating access to
                    customers’ financial data, automated analytics and
                    predictions on customers’ credit worthiness.{" "}
                  </p>
                  <a href="#transaction" className="btn btn-primary  mt-3">
                    More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section section-lg"
          style={{ marginTop: "-10%" }}
          id="transaction"
        >
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-md-5 col-lg-5">
                <div className="feature-content section-title">
                  <h2>Transactions </h2>
                  <p className="lead">
                    Easily view customer account activity for up to 24 months,
                    across all banks in Nigeria
                  </p>
                  <p className="lead">
                    Finver’s Transactions product allows you to access a
                    customer’s transaction history; this gives you transaction
                    records for different type accounts, such as current and
                    savings accounts
                  </p>
                  <a href="#" className="btn btn-secondary mt-4">
                    How It Works
                    <span className="icon icon-xs ml-2">
                      <span className="fas fa-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-4 mb-md-4 mb-lg-0">
                <div className="feature-widget-wrap">
                  <div className="row justify-content-center">
                    <div className="col-12">
                      <div className="card card-body shadow mt-4">
                        <div className="d-flex">
                          <div className="mr-3 mr-md-4">
                            <div className="mb-4 p-3 p-md-4 icon icon-shape icon-md rounded-circle bg-default-alt text-default">
                              <i className="fas fa-user" />
                            </div>
                          </div>
                          <div className="feature-content">
                            <h5>Authenticate User/ User Consent</h5>
                            <p className="mb-0">
                              Your customers choose their bank and verify their
                              identity by entering their phone number and
                              account number. They should receive a one time
                              password to proceed with the authentication
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="card card-body shadow mt-4">
                        <div className="d-flex">
                          <div className="mr-3 mr-md-4">
                            <div className="mb-4 p-3 p-md-4 icon icon-shape icon-md rounded-circle bg-secondary-alt text-secondary">
                              <i className="fas fa-layer-group" />
                            </div>
                          </div>
                          <div className="feature-content">
                            <h5>Link Account</h5>
                            <p className="mb-0">
                              When customers authenticate, you should have
                              access to their account via Finver’s API
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="card card-body shadow mt-4">
                        <div className="d-flex">
                          <div className="mr-3 mr-md-4">
                            <div className="mb-4 p-3 p-md-4 icon icon-shape icon-md rounded-circle bg-success-alt text-success">
                              <i className="fas fa-route" />
                            </div>
                          </div>
                          <div className="feature-content">
                            <h5>API Report</h5>
                            <p className="mb-0">
                              Finver will provide you with a report on your
                              dashboard that corresponds with your API requests
                              and you will get details of your selected products
                              category
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lg" style={{ marginTop: "-10%" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center mb-5">
                  <h2>Analytics</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12 mb-4 mb-md-4 mb-lg-0">
                <div className="right-radial-top text-center">
                  <div className="icon icon-shape icon-lg bg-default-alt text-default rounded-circle">
                    <i className="fas fa-bezier-curve" />
                  </div>
                  <h5 className="mt-4 mb-3">Spending Patterns</h5>
                  <p>
                    You get insight into how customers spend over time. You also
                    get a breakdown of both the credit and debit category of
                    transactions i.e. You get real-time information based on
                    outflows and inflows after monthly income.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12 mb-4 mb-md-4 mb-lg-0">
                <div className="right-radial-bottom text-center">
                  <div className="icon icon-shape icon-lg bg-secondary-alt text-secondary rounded-circle">
                    <i className="fab fa-buffer" />
                  </div>
                  <h5 className="mt-4 mb-3">
                    Determine Eligibility (Finver’s Score)
                  </h5>
                  <p>
                    Whether you need to validate a user’s personal information,
                    spending power, demography, or their ability and willingness
                    to pay, we provide access to the vital information needed
                    and also provide a score to vet a customer for you to make
                    informed decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lg bg-soft ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center mb-5">
                  <h2>What You Get To Benefit</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="icon-box text-center p-5 border border-variant-soft rounded-custom bg-white shadow-soft">
                  <div className="card-icon mb-4">
                    <img
                      src="assets/img/icon/icon-2.svg"
                      alt="icon"
                      width={60}
                      className="img-fluid"
                    />
                  </div>
                  <h2 className="h5">
                    Validating a user’s personal information
                  </h2>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="icon-box text-center p-5 border border-variant-soft rounded-custom bg-white shadow-soft">
                  <div className="card-icon mb-4">
                    <img
                      src="assets/img/icon/icon-3.svg"
                      alt="icon"
                      width={60}
                      className="img-fluid"
                    />
                  </div>
                  <h2 className="h5">
                    ability and willingness to pay is a breeze
                  </h2>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="icon-box text-center p-5 border border-variant-soft rounded-custom bg-white shadow-soft">
                  <div className="card-icon mb-4">
                    <img
                      src="assets/img/icon/icon-1.svg"
                      alt="icon"
                      width={60}
                      className="img-fluid"
                    />
                  </div>
                  <h2 className="h5">ability in making informed decisions</h2>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="icon-box text-center p-5 border border-variant-soft rounded-custom bg-white shadow-soft">
                  <div className="card-icon mb-4">
                    <img
                      src="assets/img/icon/icon-8.svg"
                      alt="icon"
                      width={60}
                      className="img-fluid"
                    />
                  </div>
                  <h2 className="h5">spending power</h2>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="icon-box text-center p-5 border border-variant-soft rounded-custom bg-white shadow-soft">
                  <div className="card-icon mb-4">
                    <img
                      src="assets/img/icon/icon-6.svg"
                      alt="icon"
                      width={60}
                      className="img-fluid"
                    />
                  </div>
                  <h2 className="h5">demographic ability</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-sm py-5 ">
          <div className="container">
            <div className="row justify-content-around align-items-center">
              <div className="col-md-7">
                <div className="subscribe-content">
                  <h3>Get started — it's free</h3>
                  <p className="mb-lg-0 mb-md-0">
                    Bring your idea’s to life with 1000 free API calls. This
                    applies to all Finver’s product so you can see what works
                    for your project
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="action-btn text-lg-right text-sm-left">
                  <a href="#" className="btn btn-primary">
                    Explore API Docs for more information
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer-wrap">
        <div className="footer footer-top section section-md bg-primary text-white">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-4 mb-4">
                <a className="footer-brand mr-lg-5 d-flex" href>
                  <h1>Finver</h1>
                </a>
                <div className="btn-wrapper mt-4">
                  <button
                    className="btn btn-icon-only btn-pill btn-twitter mr-2 icon icon-xs icon-shape"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="40k Followers"
                  >
                    <span aria-hidden="true" className="fab fa-twitter" />
                  </button>
                  <button
                    className="btn btn-icon-only btn-pill btn-facebook mr-2 icon icon-xs icon-shape"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="50k Like"
                  >
                    <span aria-hidden="true" className="fab fa-facebook-f" />
                  </button>
                  <button
                    className="btn btn-icon-only btn-pill btn-youtube mr-2 icon icon-xs icon-shape"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="25k Subscribe"
                  >
                    <span aria-hidden="true" className="fab fa-youtube" />
                  </button>
                  <button
                    className="btn btn-icon-only btn-pill btn-dribbble icon icon-xs icon-shape"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="20k Followers"
                  >
                    <span aria-hidden="true" className="fab fa-linkedin" />
                  </button>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                <h5 className="mb-4">Company</h5>
                <ul className="links-vertical">
                  <li>
                    <a target="_blank" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      How it Works
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                <h5 className="mb-4">Resources</h5>
                <ul className="links-vertical">
                  <li>
                    <a target="_blank" href="#">
                      Help
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-2">
                <h5 className="mb-4">Support</h5>
                <ul className="links-vertical">
                  <li>
                    <a target="_blank" href="#">
                      Help
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      Tech Support
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      Contact Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer py-3 bg-primary text-white border-top border-variant-default">
          <div className="container">
            <div className="row">
              <div className="col p-3">
                <div className="d-flex text-center justify-content-center align-items-center">
                  <p className="copyright pb-0 mb-0">
                    Copyrights © 2021. All rights reserved by
                    <a href="#" target="_blank">
                      Finver
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*scroll bottom to top button start*/}
      <button className="scroll-top scroll-to-target" data-target="html">
        <span className="fas fa-hand-point-up" />
      </button>
      {/*scroll bottom to top button end*/}
      {/*build:js*/}
      {/**/}
      {/*endbuild*/}
    </div>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <Route exact path="/">
//         <Redirect push to={"/landing.html"} />
//       </Route>
//     </Router>
//   );
// }
