import { Component, Fragment } from "react";

import Link from "next/link";
import { withRouter } from "next/router";

import NavbarStyleguides from "../sections/styleguides/NavbarStyleguides";
import ColorStyleguides from "../sections/styleguides/ColorStyleguides";
import TypographyStyleguides from "../sections/styleguides/TypographyStyleguides";
import IconStyleguides from "../sections/styleguides/IconStyleguides";

class Styleguides extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="">
        {/* <!-- Page Content --> */}
        <div className="page-content">
          {/* <!-- Content --> */}
          <div className="content clearfix">
            <div id="introduction" className="container mt-5 mb-5">
              <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto">
                <p className="lead">
                  Willy is a modern UI kit based on the work that we have done
                  so far in building a robust and flexible design system that
                  can be scaled to both desktop and mobile.
                </p>
              </div>
            </div>
            <ColorStyleguides />

            <TypographyStyleguides />

            <IconStyleguides />
            {/* <!-- Form Controls --> */}
            <div id="forms" className="container mb-5">
              <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto">
                <h3 className="mb-4">Form Controls</h3>
                <p>
                  All form controls are improved with micro-transitions and
                  shadows that bring depth and improve the overall user
                  experience.
                </p>
              </div>
              {/* <!-- Form Controls - Simple Forms: Default / Using Icons (Seamless) --> */}
              <div className="example col-lg-8 col-md-10 ml-auto mr-auto">
                <h5>Simple Forms</h5>
                {/* <!-- Form Controls: Simple Forms --> */}
                <div className="row mb-5">
                  <div className="col-md-12">
                    <form>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label
                            htmlFor="form1-name"
                            className="col-form-label"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="form1-name"
                            placeholder="Name"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label
                            htmlFor="form1-email"
                            className="col-form-label"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="form1-email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label htmlFor="form1-password">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="form1-password"
                            placeholder="Password"
                            required
                          />
                        </div>
                        <div className="col-md-3 mb-4">
                          <label htmlFor="form1-state">State</label>
                          <select className="custom-select" id="form1-state">
                            <option value="" selected="selected">
                              Choose One
                            </option>
                            <option value="1">California</option>
                            <option value="2">Florida</option>
                            <option value="3">New Jersey</option>
                            <option value="4">New York</option>
                            <option value="5">Texas</option>
                          </select>
                        </div>
                        <div className="col-md-3 mb-4">
                          <label htmlFor="form1-zip">Zip</label>
                          <input
                            type="text"
                            className="form-control"
                            id="form1-zip"
                            placeholder="Zip"
                            required
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <!-- Form Controls: Using Icons --> */}
                <h5 className="mb-4">Using Icons</h5>
                <p>
                  Form controls can be stylised by utilizing icons from either
                  supported packs. They can be placed inside default or
                  seamlessly integrated input group addons.
                </p>
                {/* <!-- Form Controls: Using Icons - Seamless --> */}
                <div className="row mb-2">
                  <div className="col-12">
                    <h6 className="text-muted">Seamless</h6>
                    <form>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <div className="input-group input-group-seamless">
                            <span className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="fa fa-user" />{" "}
                              </span>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              id="form1-username"
                              placeholder="Username"
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <div className="input-group input-group-seamless">
                            <input
                              type="password"
                              className="form-control"
                              id="form2-password"
                              placeholder="Password"
                            />{" "}
                            <span className="input-group-append">
                              <span className="input-group-text">
                                <i className="fa fa-lock" />
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <!-- Form Controls: Using Icons - Default --> */}
                <div className="row mb-2">
                  <div className="col-12">
                    <h6 className="text-muted">Default</h6>
                    <form>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <div className="input-group">
                            <span className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="fa fa-user" />{" "}
                              </span>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              id="form2-username"
                              placeholder="Username"
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <div className="input-group">
                            <input
                              type="password"
                              className="form-control"
                              id="form3-password"
                              placeholder="Password"
                            />{" "}
                            <span className="input-group-append">
                              <span className="input-group-text">
                                <i className="fa fa-lock" />
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Form Controls: Custom Controls --> */}
              <div className="example col-lg-8 col-md-10 ml-auto mr-auto">
                <div className="container">
                  <div className="row">
                    <h5 className="mb-4 w-100">Custom Controls</h5>
                    <p className="mb-5">
                      The default custom form fields are improved and extended.
                      One of the new additions being the{" "}
                      <strong>toggle switch</strong> control.
                    </p>
                  </div>
                  <div className="row mb-5">
                    <div className="custom-controls-example col-md-4 col-sm-4 col-xs-12 pl-0">
                      <h6 className="text-muted mb-2">Checkboxes</h6>
                      <fieldset>
                        <div className="custom-control custom-checkbox d-block my-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            Apple
                          </label>
                        </div>
                      </fieldset>
                      <fieldset>
                        <div className="custom-control custom-checkbox d-block my-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck2"
                            checked="checked"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck2"
                          >
                            Banana
                          </label>
                        </div>
                      </fieldset>
                      <fieldset disabled="disabled">
                        <div className="custom-control custom-checkbox d-block my-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck3"
                          >
                            Orange
                          </label>
                        </div>
                      </fieldset>
                      <fieldset disabled="disabled">
                        <div className="custom-control custom-checkbox d-block my-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck4"
                            checked="checked"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck4"
                          >
                            Mango
                          </label>
                        </div>
                      </fieldset>
                    </div>
                    <div className="custom-controls-example col-md-4 col-sm-4 col-xs-12">
                      <h6 className="text-muted mb-2">Radio Buttons</h6>
                      <fieldset>
                        <div className="custom-control custom-radio d-block my-2">
                          <input
                            type="radio"
                            id="customRadio1"
                            name="customRadio"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio1"
                          >
                            Cookies
                          </label>
                        </div>
                      </fieldset>
                      <fieldset>
                        <div className="custom-control custom-radio d-block my-2">
                          <input
                            type="radio"
                            id="customRadio2"
                            name="customRadio"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio2"
                          >
                            Cupcakes
                          </label>
                        </div>
                      </fieldset>
                      <fieldset disabled="disabled">
                        <div className="custom-control custom-radio d-block my-2">
                          <input
                            type="radio"
                            id="customRadio3"
                            name="customRadio"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio3"
                          >
                            Donuts
                          </label>
                        </div>
                      </fieldset>
                      <fieldset disabled="disabled">
                        <div className="custom-control custom-radio d-block my-2">
                          <input
                            type="radio"
                            id="customRadio4"
                            name="customRadio"
                            className="custom-control-input"
                            checked="checked"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio4"
                          >
                            Ice Cream
                          </label>
                        </div>
                      </fieldset>
                    </div>
                    <div className="custom-controls-example col-md-4 col-sm-4 col-xs-12 pl-4">
                      <h6 className="text-muted mb-1">Toggles</h6>
                      <fieldset>
                        <div className="custom-control custom-toggle d-block my-2">
                          <input
                            type="checkbox"
                            id="customToggle1"
                            name="customToggle1"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customToggle1"
                          >
                            Push Notification
                          </label>
                        </div>
                      </fieldset>
                      <fieldset>
                        <div className="custom-control custom-toggle d-block my-2">
                          <input
                            type="checkbox"
                            id="customToggle2"
                            name="customToggle2"
                            className="custom-control-input"
                            checked="checked"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customToggle2"
                          >
                            Web Notification
                          </label>
                        </div>
                      </fieldset>
                      <fieldset disabled="disabled">
                        <div className="custom-control custom-toggle d-block my-2">
                          <input
                            type="checkbox"
                            id="customToggle3"
                            name="customToggle3"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customToggle3"
                          >
                            Email
                          </label>
                        </div>
                      </fieldset>
                      <fieldset disabled="disabled">
                        <div className="custom-control custom-toggle d-block my-2">
                          <input
                            type="checkbox"
                            id="customToggle4"
                            name="customToggle4"
                            className="custom-control-input"
                            checked="checked"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customToggle4"
                          >
                            SMS
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6 pl-0 custom-dropdown-example">
                      <h6 className="text-muted mb-3">Custom Dropdown</h6>
                      <fieldset>
                        <select className="custom-select w-100" required>
                          <option value="">Select Favourite Number</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-md-6 pl-0">
                      <h6 className="text-muted mb-3">Custom File Input</h6>
                      <fieldset>
                        <div className="custom-file w-100">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="customFile"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="customFile"
                          >
                            Choose file...
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h5 className="mb-4">Validation</h5>
                    <p className="mb-4">
                      Form validation is also improved to match the new overall
                      form feel, while following the same interaction principles
                      for consistency.
                    </p>
                    <form className="was-validated">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="form-2-first-name">First name</label>
                          <input
                            type="text"
                            className="form-control is-valid"
                            id="form-2-first-name"
                            placeholder="First name"
                            value="John"
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="form-2-last-name">Last name</label>
                          <input
                            type="text"
                            className="form-control is-valid"
                            id="form-2-last-name"
                            placeholder="Last name"
                            value="Doe"
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="form-2-city">City</label>
                          <input
                            type="text"
                            className="form-control is-invalid"
                            id="form-2-city"
                            placeholder="City"
                            required
                          />
                          <div className="invalid-feedback">Invalid city</div>
                        </div>
                        <div className="col-md-3 mb-3">
                          <label htmlFor="form-2-state">State</label>
                          <input
                            type="text"
                            className="form-control is-invalid"
                            id="form-2-state"
                            placeholder="State"
                            required
                          />
                          <div className="invalid-feedback">Invalid state</div>
                        </div>
                        <div className="col-md-3 mb-3">
                          <label htmlFor="form-2-zip">Zip</label>
                          <input
                            type="text"
                            className="form-control is-invalid"
                            id="form-2-zip"
                            placeholder="Zip"
                            required
                          />
                          <div className="invalid-feedback">
                            Invalid ZIP code
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="form-file-4">Photo ID Scan</label>
                          <div className="custom-file w-100">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="customFile2"
                              required
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="customFile2"
                            >
                              Choose file...
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="d-block" htmlFor="form-3-select">
                            Favourite Number
                          </label>
                          <select
                            className="custom-select w-100"
                            id="form-3-select"
                            required
                          >
                            <option value="">Invalid select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="form-3-terms"
                              required
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="form-3-terms"
                            >
                              Do you agree to our terms & conditions?
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="custom-controls-stacked d-block">
                            <div className="custom-control custom-radio mb-1">
                              <input
                                type="radio"
                                id="radioStacked1"
                                name="radio-stacked"
                                className="custom-control-input"
                                required
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="radioStacked1"
                              >
                                Subscribe me
                              </label>
                            </div>
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="customRadio5"
                                name="radio-stacked"
                                className="custom-control-input"
                                required
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customRadio5"
                              >
                                Don't subscribe me
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Sliders --> */}
            <div
              id="sliders"
              className="container mb-5"
              style={{ paddingBottom: "1px" }}
            >
              <div className="my-5">
                <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto">
                  <h3 className="mb-4">Sliders</h3>
                  <p>
                    Sliders are also a new custom control and can be integrated
                    almost anywhere with minimal markup{" "}
                    <i>(a single element)</i> and extended customisation options
                    via JavaScript.
                  </p>
                </div>
                <div className="example col-lg-8 col-md-10 ml-auto mr-auto mb-0">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div id="slider-example-1">
                        <input type="hidden" className="custom-slider-input" />
                        <input type="hidden" className="custom-slider-input" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div id="slider-example-2">
                        <input type="hidden" className="custom-slider-input" />
                        <input type="hidden" className="custom-slider-input" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div id="slider-example-3">
                        <input type="hidden" className="custom-slider-input" />
                        <input type="hidden" className="custom-slider-input" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Datepickers --> */}
            <div id="datepickers" className="container">
              <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto">
                <h3 className="mb-4">Datepickers</h3>
                <p>
                  Datepickers are also available and similar to slider controls
                  they are <strong>very easy to create</strong>, being based on
                  a single input element. Datepickers are customisable as well,
                  letting you create complex configurations with range
                  selections for example.
                </p>
              </div>
              <div className="example col-lg-8 col-md-10 ml-auto mr-auto">
                <div className="row">
                  <div className="col-lg-4 col-md-12">
                    <div className="form-group">
                      <label htmlFor="datepicker-example-1">
                        Date of Birth
                      </label>
                      <div className="input-group with-addon-icon-left">
                        <input
                          type="text"
                          className="form-control"
                          id="datepicker-example-1"
                          placeholder="Date of Birth"
                        />{" "}
                        <span className="input-group-append">
                          <span className="input-group-text">
                            <i className="fa fa-calendar" />
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12">
                    <div className="form-group">
                      <label>Employment Period</label>
                      <div
                        className="input-daterange input-group"
                        id="datepicker-example-2"
                      >
                        <span className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-calendar" />{" "}
                          </span>
                        </span>
                        <input
                          type="text"
                          className="input-sm form-control"
                          name="start"
                          placeholder="Start Date"
                        />
                        <input
                          type="text"
                          className="input-sm form-control"
                          name="end"
                          placeholder="End Date"
                        />{" "}
                        <span className="input-group-append">
                          <span className="input-group-text">
                            <i className="fa fa-calendar" />
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Cards --> */}
            <div
              id="cards"
              className="container mb-2"
              style={{ paddingBottom: "1px" }}
            >
              <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto">
                <h3 className="mb-4">Cards</h3>
                <p>
                  We wanted cards to stand out and bring depth without changing
                  their original structure. All of this while allowing them to
                  play well with the other components.
                </p>
              </div>
              <div className="example col-md-12 ml-auto mr-auto">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="/static/images/placeholders/sample-1.jpg"
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h4 className="card-title">Sample Card Title</h4>
                        <p className="card-text">
                          He seems sinking under the evidence could not only
                          grieve and a visit. The father is to bless and placed
                          in his length hid...
                        </p>
                        <a href="#" className="btn btn-primary">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-4 sm-hidden">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="/static/images/placeholders/sample-2.jpg"
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h4 className="card-title">Sample Card Title</h4>
                        <p className="card-text">
                          He seems sinking under the evidence could not only
                          grieve and a visit. The father is to bless and placed
                          in his length hid...
                        </p>
                        <a href="#" className="btn btn-primary">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-4 sm-hidden">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="/static/images/placeholders/sample-3.jpg"
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h4 className="card-title">Sample Card Title</h4>
                        <p className="card-text">
                          He seems sinking under the evidence could not only
                          grieve and a visit. The father is to bless and placed
                          in his length hid...
                        </p>
                        <a href="#" className="btn btn-primary">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 d-none sm-hidden last">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="/static/images/placeholders/sample-1.jpg"
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h4 className="card-title">Sample Card Title</h4>
                        <p className="card-text">
                          He seems sinking under the evidence could not only
                          grieve and a visit. The father is to bless and placed
                          in his length hid...
                        </p>
                        <a href="#" className="btn btn-primary">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Buttons --> */}
            <div id="buttons" className="container">
              <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto">
                <h3 className="mb-4">Buttons</h3>
                <p>
                  Two new button modifiers are introduced in Willy that allow
                  you to create <strong>pill-shaped</strong> and{" "}
                  <strong>squared</strong> buttons for both filled and outlined
                  variations for an extended range of possible combinations.
                </p>
              </div>
              <div className="example example-buttons">
                <div className="col-md-9 ml-auto mr-auto">
                  <h5 className="text-muted mb-4">Normal</h5>
                </div>
                {/* <!-- Normal Buttons --> */}
                <div className="row mb-4">
                  <div className="col-md-9 ml-auto mr-auto d-flex justify-content-around buttons-wrapper">
                    <button type="button" className="btn btn-primary">
                      Primary
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Secondary
                    </button>
                    <button type="button" className="btn btn-success">
                      Success
                    </button>
                    <button type="button" className="btn btn-danger">
                      Danger
                    </button>
                    <button type="button" className="btn btn-warning">
                      Warning
                    </button>
                    <button type="button" className="btn btn-info">
                      Info
                    </button>
                    <button type="button" className="btn btn-light">
                      Light
                    </button>
                    <button type="button" className="btn btn-dark">
                      Dark
                    </button>
                  </div>
                </div>
                {/* <!-- Outlined Buttons --> */}
                <div className="mb-5 row">
                  <div className="col-md-9 ml-auto mr-auto d-flex justify-content-around buttons-wrapper">
                    <button type="button" className="btn btn-outline-primary">
                      Primary
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                      Secondary
                    </button>
                    <button type="button" className="btn btn-outline-success">
                      Success
                    </button>
                    <button type="button" className="btn btn-outline-danger">
                      Danger
                    </button>
                    <button type="button" className="btn btn-outline-warning">
                      Warning
                    </button>
                    <button type="button" className="btn btn-outline-info">
                      Info
                    </button>
                    <button type="button" className="btn btn-outline-light">
                      Light
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                      Dark
                    </button>
                  </div>
                </div>
                <div className="col-md-9 ml-auto mr-auto">
                  <h5 className="text-muted mb-4">Squared</h5>
                </div>
                {/* <!-- Squared Buttons --> */}
                <div className="mb-4 row">
                  <div className="col-md-9 ml-auto mr-auto d-flex justify-content-around buttons-wrapper">
                    <button
                      type="button"
                      className="btn btn-primary btn-squared"
                    >
                      Primary
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-squared"
                    >
                      Secondary
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-squared"
                    >
                      Success
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-squared"
                    >
                      Danger
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-squared"
                    >
                      Warning
                    </button>
                    <button type="button" className="btn btn-info btn-squared">
                      Info
                    </button>
                    <button type="button" className="btn btn-light btn-squared">
                      Light
                    </button>
                    <button type="button" className="btn btn-dark btn-squared">
                      Dark
                    </button>
                  </div>
                </div>
                {/* <!-- Squared and Outlined Buttons --> */}
                <div className="mb-5 row">
                  <div className="col-md-9 ml-auto mr-auto d-flex justify-content-around buttons-wrapper">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-squared"
                    >
                      Primary
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-squared"
                    >
                      Secondary
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success btn-squared"
                    >
                      Success
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-squared"
                    >
                      Danger
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-warning btn-squared"
                    >
                      Warning
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-info btn-squared"
                    >
                      Info
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-light btn-squared"
                    >
                      Light
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-squared"
                    >
                      Dark
                    </button>
                  </div>
                </div>
                <div className="col-md-9 ml-auto mr-auto">
                  <h5 className="text-muted mb-4">Pill-shaped</h5>
                </div>
                {/* <!-- Pill Shaped Buttons --> */}
                <div className="mb-4 row">
                  <div className="col-md-9 ml-auto mr-auto d-flex justify-content-around buttons-wrapper">
                    <button type="button" className="btn btn-primary btn-pill">
                      Primary
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-pill"
                    >
                      Secondary
                    </button>
                    <button type="button" className="btn btn-success btn-pill">
                      Success
                    </button>
                    <button type="button" className="btn btn-danger btn-pill">
                      Danger
                    </button>
                    <button type="button" className="btn btn-warning btn-pill">
                      Warning
                    </button>
                    <button type="button" className="btn btn-info btn-pill">
                      Info
                    </button>
                    <button type="button" className="btn btn-light btn-pill">
                      Light
                    </button>
                    <button type="button" className="btn btn-dark btn-pill">
                      Dark
                    </button>
                  </div>
                </div>
                {/* <!-- Pill-shaped and Outlined Buttons --> */}
                <div className="mb-5 row">
                  <div className="col-md-9 ml-auto mr-auto d-flex justify-content-around buttons-wrapper">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-pill"
                    >
                      Primary
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-pill"
                    >
                      Secondary
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success btn-pill"
                    >
                      Success
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-pill"
                    >
                      Danger
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-warning btn-pill"
                    >
                      Warning
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-info btn-pill"
                    >
                      Info
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-light btn-pill"
                    >
                      Light
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-pill"
                    >
                      Dark
                    </button>
                  </div>
                </div>
                <div className="col-md-9 ml-auto mr-auto">
                  <h5 className="text-muted mb-4">Using Icons</h5>
                </div>
                {/* <!-- Buttons with Icons : Material Icons --> */}
                <div className="mb-4 row">
                  <div className="col-md-9 ml-auto mr-auto d-flex justify-content-around buttons-wrapper">
                    <button type="button" className="btn btn-pill btn-primary">
                      <i className="fa fa-download mr-1" /> Download
                    </button>
                    <button
                      type="button"
                      className="btn btn-pill btn-secondary"
                    >
                      <i className="fa fa-lock mr-1" />
                      Authorize
                    </button>
                    <button type="button" className="btn btn-pill btn-success">
                      <i className="fa fa-check mr-1" />
                      Success
                    </button>
                    <button type="button" className="btn btn-pill btn-danger">
                      <i className="fa fa-remove mr-1" />
                      Delete
                    </button>
                    <button type="button" className="btn btn-pill btn-info">
                      <i className="fa fa-envelope mr-1" /> Message
                    </button>
                    <button type="button" className="btn btn-pill btn-warning">
                      <i className="fa fa-star mr-1" />
                      Favourite
                    </button>
                  </div>
                </div>
                {/* <!-- Buttons with Icons : FontAwesome --> */}
                <div className="mb-5 row">
                  <div className="col-md-9 ml-auto mr-auto d-flex justify-content-around buttons-wrapper">
                    <button
                      type="button"
                      className="btn btn-pill btn-outline-primary"
                    >
                      <i className="fa fa-download mr-1" /> Download
                    </button>
                    <button
                      type="button"
                      className="btn btn-pill btn-outline-secondary"
                    >
                      <i className="fa fa-lock mr-1" />
                      Authorize
                    </button>
                    <button
                      type="button"
                      className="btn btn-pill btn-outline-success"
                    >
                      <i className="fa fa-check mr-1" />
                      Success
                    </button>
                    <button
                      type="button"
                      className="btn btn-pill btn-outline-danger"
                    >
                      <i className="fa fa-remove mr-1" />
                      Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-pill btn-outline-info"
                    >
                      <i className="fa fa-envelope mr-1" /> Message
                    </button>
                    <button
                      type="button"
                      className="btn btn-pill btn-outline-warning"
                    >
                      <i className="fa fa-star mr-1" />
                      Favourite
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Progress Bars --> */}
            <div id="progress-bars" className="container">
              <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto">
                <h3 className="mb-4">Progress Bars</h3>
                <p>
                  In addition to the default styles Willy allows you to adjust
                  the width and add labels to your progress bars.
                </p>
              </div>
              <div className="example col-lg-9 col-md-12 ml-auto mr-auto px-0">
                <div className="row">
                  <div className="col-md-6 pb-widths">
                    <h6 className="text-muted">Widths</h6>
                    <div className="progress progress-sm mb-4">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="progress mb-4">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="progress progress-lg">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h6 className="text-muted">Labels</h6>
                    <div className="progress mb-4">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "20%" }}
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        20%
                      </div>
                    </div>
                    <div className="progress mb-4">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        50%
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        70%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Modals --> */}
            <div id="modals" className="container">
              <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto">
                <h3 className="mb-4">Modals</h3>
                <p>
                  Display confirmation messages, forms or any type of content to
                  your users using beautiful and non-disruptive modals.
                </p>
              </div>
              <div className="mb-5">
                {/* <!-- Trigger --> */}
                <button
                  type="button"
                  className="btn btn-primary btn-pill btn-lg d-table ml-auto mr-auto"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  ✋ Click Me!
                </button>
                {/* <!-- Modal Body --> */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabiIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          🤔 Think about it
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        Triggering this action might affect you later.{" "}
                        <strong>Do you still want to continue?</strong>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Nope
                        </button>
                        <button
                          type="button"
                          className="btn btn-success"
                          data-dismiss="modal"
                        >
                          Yep
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Badges --> */}
            <div id="badges" className="container">
              <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto">
                <h3 className="mb-4">Badges</h3>
                <p>
                  Badges are similar to buttons and are available in all theme
                  colors with filled and outlined modes and also with three
                  variation styles: rounded, pill-shaped and squared.
                </p>
              </div>
              <div className="example col-md-10 ml-auto mr-auto mb-5 pb-4">
                <div className="row mb-3">
                  <div className="d-table ml-auto mr-auto">
                    <span className="badge mr-3 badge-primary">Primary</span>{" "}
                    <span className="badge mr-3 badge-outline-secondary">
                      Secondary
                    </span>{" "}
                    <span className="badge mr-3 badge-pill badge-success">
                      Success
                    </span>{" "}
                    <span className="badge mr-3 badge-pill badge-outline-danger">
                      Danger
                    </span>{" "}
                    <span className="badge mr-3 badge-squared badge-warning">
                      Warning
                    </span>{" "}
                    <span className="badge mr-3 badge-squared badge-outline-info">
                      Info
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Popups / Popovers --> */}
            <div id="popups-popovers" className="container">
              <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto">
                <h3 className="mb-4">Tooltips & Popovers</h3>
                <p>
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-10 col-md-10 ml-auto mr-auto mb-5 pb-4">
                  <div className="row ml-auto mr-auto">
                    {/* <!-- Tooltips --> */}
                    <div className="col-lg-6 col-md-12 mb-3">
                      <h5 className="text-muted mb-4 d-block">Tooltips</h5>
                      {/* <!-- Tooltip: Top --> */}
                      <button
                        type="button"
                        className="btn btn-primary mr-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="I'm on top! 👆"
                      >
                        Top
                      </button>
                      {/* <!-- Tooltip: Bottom --> */}
                      <button
                        type="button"
                        className="btn btn-primary mr-1"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="I'm at the bottom! 👇"
                      >
                        Bottom
                      </button>
                      {/* <!-- Tooltip: Left --> */}
                      <button
                        type="button"
                        className="btn btn-primary mr-1"
                        data-toggle="tooltip"
                        data-placement="Left"
                        title="I'm on the left! 👈"
                      >
                        Left
                      </button>
                      {/* <!-- Tooltip: Right --> */}
                      <button
                        type="button"
                        className="btn btn-primary mr-1"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="I'm on the right! 👉"
                      >
                        Right
                      </button>
                    </div>
                    {/* <!-- Popovers --> */}
                    <div className="col-lg-6 col-md-12">
                      <h5 className="text-muted mb-4">Popovers</h5>
                      {/* <!-- Popovers: Top --> */}
                      <button
                        type="button"
                        className="btn btn-secondary mr-1"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="top"
                        data-content="On top of things!"
                      >
                        Top
                      </button>
                      {/* <!-- Popovers: Bottom --> */}
                      <button
                        type="button"
                        className="btn btn-secondary mr-1"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="bottom"
                        data-content="🙃 I'm down here!"
                      >
                        Bottom
                      </button>
                      {/* <!-- Popovers: Left --> */}
                      <button
                        type="button"
                        className="btn btn-secondary mr-1"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="left"
                        data-content="Oh! What's left then? 🤔"
                      >
                        Left
                      </button>
                      {/* <!-- Popovers: Right --> */}
                      <button
                        type="button"
                        className="btn btn-secondary mr-1"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="right"
                        data-content="I'm always right! 😎"
                      >
                        Right
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Alerts --> */}
            <div id="alerts">
              <div className="container">
                <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto">
                  <h3 className="mb-4">Alerts</h3>
                </div>
              </div>
              <div className="mb-5">
                {/* <!-- Info Dismissible Alert --> */}
                <div
                  className="alert alert-info alert-dismissible fade show"
                  role="alert"
                >
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>{" "}
                  <i className="fa fa-info" /> <strong>Hey!</strong> I think you
                  should know this.
                </div>
                {/* <!-- Success Dismissible Alert --> */}
                <div
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>{" "}
                  <i className="fa fa-check" /> <strong>Yay!</strong> Everything
                  is fine!
                </div>
                {/* <!-- Warning Dismissible Alert --> */}
                <div
                  className="alert alert-warning alert-dismissible fade show"
                  role="alert"
                >
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>{" "}
                  <i className="fa fa-warning" /> <strong>Oops!</strong>{" "}
                  Something might be wrong
                </div>
                {/* <!-- Danger Dismissible Alert --> */}
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>{" "}
                  <i className="fa fa-exclamation-circle" />{" "}
                  <strong>On no!</strong> Something really bad happened!
                </div>
              </div>
            </div>
          </div>
          <NavbarStyleguides />
        </div>
        {/* <!-- JavaScript --> */}
        {/* <!-- Dependencies --> */}
        <script
          async
          defer="defer"
          src="https://buttons.github.io/buttons.js"
        />
        <script async src="//platform.twitter.com/widgets.js" charSet="utf-8" />
        <script
          src="https://code.jquery.com/jquery-3.2.1.min.js"
          integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
          crossOrigin="anonymous"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"
          integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4"
          crossOrigin="anonymous"
        />
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"
          integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1"
          crossOrigin="anonymous"
        />
        <script src="scripts/shards.js?v=2.0.0" />
        <script src="scripts/main.js?v=2.0.0" />
      </div>
    );
  }
}

export default Styleguides;
