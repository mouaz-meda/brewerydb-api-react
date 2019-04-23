import React from "react";

class Loading extends React.Component {
  render() {
    return (
      <div className="loading container-fluid shadow text-center">
        <p className="loading-text">
          Loading ... &nbsp;
          <i className="fa fa-spin fa-spinner" aria-hidden="true" />
        </p>
      </div>
    );
  }
}

export default Loading;
