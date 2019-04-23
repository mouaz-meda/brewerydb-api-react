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
        <div className="container shadow beer-detail">
          <div className=" d-flex justify-content-around align-items-center ">
            <div className="align-self-center">
              <img src={"/assets/images/No-beer-404.jpg"} alt="Not found" />
            </div>
            <div className="align-self-center">
              <h2 className="align-self-center not-found-header">404</h2>
              <p className="align-self-center">
                Ooops .... sorry!
                <br />
                The requested page could not be found.
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NotFound;
