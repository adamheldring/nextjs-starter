import React, { Fragment } from "react";

export default props => {
  return (
    <>
      {/* <!-- Icon Packs --> */}
      <div id="icon-packs" className="container mb-5">
        <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto mb-5">
          <h2 className="text-center mb-4">Icon Packs 🦄</h2>
          <p className="text-center">
            Willy supports by default both <b>Material</b> and{" "}
            <b>FontAwesome</b> packs. Icons can be placed in almost any element
            without the need of modifying the kit.
          </p>
        </div>
      </div>
      <div className="icons-example clearfix mb-5">
        <div className="icons-example-wrapper material-icons col-md-6 float-left">
          <div className="material-icons col-lg-3 col-md-3 col-sm-12 d-table text-center ml-auto mr-auto py-5">
            <img
              className="mb-4"
              src="/static/images/icon-libraries/material-icons.svg"
              alt="Willy supports the Material Icons pack by default."
            />
            <h2 className="text-light mb-2">Material Icons</h2>
            <h5 className="text-muted mb-0">Over 900+ Icons</h5>
          </div>
        </div>
        <div className="icons-example-wrapper font-awesome col-md-6 float-left">
          <div className="material-icons col-lg-3 col-md-3 col-sm-12 d-table text-center mr-auto ml-auto py-5">
            <img
              className="mb-4"
              src="/static/images/icon-libraries/fontawesome-icons.svg"
              alt="Willy supports the FontAwesome Icons pack by default."
            />
            <h2 className="text-light mb-2">Font Awesome</h2>
            <h5 className="text-muted mb-0">Over 600+ Icons</h5>
          </div>
        </div>
      </div>
    </>
  );
};
