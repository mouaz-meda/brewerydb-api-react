import React, { Fragment } from "react";
import Background from "./Background";

class Error extends React.Component {
  componentDidMount() {
    document.title = "Connection error";
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
                  src={"/assets/images/No-beer.jpg"}
                  alt="Error"
                />
              </div>
              <div className="col-12 col-md-8 col-lg-9">
                <h2 className="text-white">Connection Error</h2>
                <p>
                  Ooops .... sorry!
                  <br />
                  Connection to server failed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Error;
