import React, { Fragment } from "react";

export default props => {
  return (
    <>
      {/* <!-- Typography --> */}
      <div id="typography" className="container mb-5">
        <div className="row">
          <div className="col-lg-8 col-md-10 ml-auto mr-auto">
            <h2 className="mb-4">Typography</h2>
            <p>
              Willy uses Libre Franklin as its primary typeface for headings and
              the system’s UI font with a Roboto-first fallback (only on
              non-Apple devices) for the remaining content.
            </p>
          </div>
        </div>

        <div className="example col-md-10 ml-auto mr-auto">
          <table className="table table-striped table-responsive-md">
            <thead>
              <tr>
                <th>Type</th>
                <th>Example</th>
                <th>Font</th>
                <th>Font Size</th>
                <th>Line Height</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Heading 1</td>
                <td>
                  <h1>Hello</h1>
                </td>
                <td>Libre Franklin Semibold</td>
                <td>3.052 REM</td>
                <td>3 REM</td>
              </tr>
              <tr>
                <td>Heading 2</td>
                <td>
                  <h2>Hello</h2>
                </td>
                <td>Libre Franklin Medium</td>
                <td>2.441 REM</td>
                <td>2.25 REM</td>
              </tr>
              <tr>
                <td>Heading 3</td>
                <td>
                  <h3>Hello</h3>
                </td>
                <td>Libre Franklin Medium</td>
                <td>1.953 REM</td>
                <td>2.25 REM</td>
              </tr>
              <tr>
                <td>Paragraph</td>
                <td>
                  <p>Hello there!</p>
                </td>
                <td>System UI / Roboto</td>
                <td>1 REM</td>
                <td>1.5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
