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
        <div className="container shadow beer-detail">
          <div className=" d-flex justify-content-around align-items-center ">
            <div className="align-self-center">
              <img src={"/assets/images/No-beer.jpg"} alt="Not found" />
            </div>
            <div className="align-self-center">
              <h2 className="align-self-center not-found-header">
                Connection Error
              </h2>
              <p className="align-self-center">
                Ooops .... sorry!
                <br />
                Connection to server failed.
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Error;
