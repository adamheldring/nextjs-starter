import React, { Fragment } from "react";

export default props => {
  return (
    <>
      {/* <!-- Colors --> */}
      <div id="colors" className="container mb-5">
        <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto">
          <h3 className="mb-4">Colors</h3>
          <p>
            We've enhanced Bootstrap’s semantic color selection with brighter
            color variations in order to improve the contrast and accessibility.
          </p>
        </div>
        <div className="example col-md-10 ml-auto mr-auto">
          <div className="row">
            <div className="color-wrapper col-lg-3 col-md-6 col-sm-6">
              <div className="color">
                <div className="swatch" style={{ background: "#0067f4" }} />
                <span className="title">Primary</span>{" "}
                <span className="hex-value">#0067f4</span>
              </div>
            </div>
            <div className="color-wrapper col-lg-3 col-md-6 col-sm-6">
              <div className="color">
                <div className="swatch" style={{ background: "#5A6169" }} />
                <span className="title">Secondary</span>{" "}
                <span className="hex-value">#5A6169</span>
              </div>
            </div>
            <div className="color-wrapper col-lg-3 col-md-6 col-sm-6">
              <div className="color">
                <div className="swatch" style={{ background: "#17c671" }} />
                <span className="title">Success</span>{" "}
                <span className="hex-value">#17c671</span>
              </div>
            </div>
            <div className="color-wrapper col-lg-3 col-md-6 col-sm-6">
              <div className="color">
                <div className="swatch" style={{ background: "#00b8d8" }} />
                <span className="title">Info</span>{" "}
                <span className="hex-value">#00b8d8</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="color-wrapper col-lg-3 col-md-6 col-sm-6">
              <div className="color">
                <div className="swatch" style={{ background: "#FFB400" }} />
                <span className="title">Warning</span>{" "}
                <span className="hex-value">#ffb400</span>
              </div>
            </div>
            <div className="color-wrapper col-lg-3 col-md-6 col-sm-6">
              <div className="color">
                <div className="swatch" style={{ background: "#C4183C" }} />
                <span className="title">Danger</span>{" "}
                <span className="hex-value">#c4183c</span>
              </div>
            </div>
            <div className="color-wrapper col-lg-3 col-md-6 col-sm-6">
              <div className="color">
                <div className="swatch" style={{ background: "#E9ECEF" }} />
                <span className="title">Light</span>{" "}
                <span className="hex-value">#e9ecef</span>
              </div>
            </div>
            <div className="color-wrapper col-lg-3 col-md-6 col-sm-6">
              <div className="color">
                <div className="swatch" style={{ background: "#212529" }} />
                <span className="title">Dark</span>{" "}
                <span className="hex-value">#212529</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
