import React, { Fragment } from "react";
import Loading from "./Loading";
import Background from "./Background";
import Error from "./Error";
import axios from "axios";

class BeerDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: null,
      isLoading: Boolean,
      isDataArrived: Boolean
    };
  }

  componentDidMount() {
    const url = "http://localhost:5000/api/get-single";

    axios
      .get(url, {
        params: {
          id: this.props.id
        }
      })
      .then(response => {
        if (response) {
          if (response.status === 200) {
            this.setState({
              beer: response.data.data,
              isLoading: false,
              isDataArrived: true
            });
          }
        } else {
          this.setState({
            isDataArrived: false
          });
        }
      })
      .catch(error => {
        this.setState({
          isDataArrived: false
        });
        console.error(error);
      });
  }

  render() {
    const beer = this.state.beer;

    if (!this.state.isDataArrived) {
      return <Error />;
    }
    if (this.state.isLoading) {
      return (
        <Fragment>
          <Background />
          <Loading />
        </Fragment>
      );
    }

    if (this.state.isDataArrived) {
      return (
        <Fragment>
          <Background />

          <div className="container shadow beer-detail">
            <div>
              <a className="btn back-button" href="/">
                <i className="fas fa-arrow-left" />
              </a>
            </div>

            <div className=" d-flex row justify-content-around align-items-center">
              <div className="align-self-center">
                <img
                  src={
                    beer.labels
                      ? beer.labels.medium
                      : "/assets/images/No-beer-2-404.jpg"
                  }
                  alt="Label"
                />
              </div>

              <div className="align-self-center">
                <p>
                  <b>Name:</b> &nbsp; {beer.name ? beer.name : "N/A"}
                </p>

                <p>
                  <b>Abv:</b> &nbsp; {beer.abv ? beer.abv + " %" : "N/A"}
                </p>

                <p>
                  <b>Ibu:</b> &nbsp; {beer.ibu ? beer.ibu : "N/A"}
                </p>

                <p>
                  <b>Organic:</b> &nbsp;
                  {beer.isOrganic
                    ? beer.isOrganic === "Y"
                      ? "YES"
                      : "NO"
                    : "N/A"}
                </p>

                <p>
                  <b>Create date:</b> &nbsp;
                  {beer.createDate ? beer.createDate : "N/A"}
                </p>

                <p>
                  <b>Update date:</b> &nbsp;
                  {beer.updateDate ? beer.createDate : "N/A"}
                </p>

                <p>
                  <b>Year:</b> &nbsp; {beer.year ? beer.year : "N/A"}
                </p>
                <p>
                  <b>Status:</b> &nbsp; {beer.status ? beer.status : "N/A"}
                </p>

                {beer.labels ? (
                  <div>
                    <p>
                      <b>Labels:</b> &nbsp;
                      <a href={beer.labels.icon ? beer.labels.icon : ""}>
                        Icon
                      </a>
                      , &nbsp;
                      <a href={beer.labels.medium ? beer.labels.medium : ""}>
                        Medium
                      </a>
                      , &nbsp;
                      <a href={beer.labels.large ? beer.labels.large : ""}>
                        Large
                      </a>
                    </p>
                  </div>
                ) : (
                  ""
                )}

                {beer.glass ? (
                  <div>
                    <p>
                      <b>Glass id: </b>&nbsp;
                      {beer.glass.id ? beer.glass.id : "N/A"}
                    </p>
                    <p>
                      <b>Glass name:</b> &nbsp;
                      {beer.glass.name ? beer.glass.name : "N/A"}
                    </p>
                    <p>
                      <b>Glass create data:</b> &nbsp;
                      {beer.glass.createDate ? beer.glass.createDate : "N/A"}
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
  }
}

export default BeerDetail;
