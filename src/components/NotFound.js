import React, { Fragment } from "react";
import Background from "./Background";

class NotFound extends React.Component {
  componentDidMount() {
    document.title = "Error 404";
  }
  render() {
    return (
      <Fragment>
        <Background />
        <div className="container">
          <div className="container-fluid shadow py-3">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-3">
                <img
                  className="img-fluid mb-3 mb-md-0"
                  src={"/assets/images/No-beer-404.jpg"}
                  alt="Not found"
                />
              </div>
              <div className="col-12 col-md-8 col-lg-9">
                <h2 className="text-white">404</h2>
                <p className="align-self-center">
                  Ooops .... sorry!
                  <br />
                  The requested page could not be found.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NotFound;
