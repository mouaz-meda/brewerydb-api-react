import React, { Fragment } from "react";
import Loading from "./Loading";
import Error from "./Error";
import Background from "./Background";
import BeerApi from "../helpers/BeerApi";

class BeerDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: null,
      isLoading: true,
      apiError: false
    };
  }

  componentDidMount() {
    const api = new BeerApi();

    api.getSingle(this.props.id).then(response => {
      if (response) {
        this.setState({
          beer: response.data.data,
          isLoading: false
        });
      } else {
        this.setState({
          apiError: true
        });
      }
    });
  }

  isOrganic(beer) {
    if (!beer.isOrganic) {
      return "N/A";
    }

    switch (beer.isOrganic) {
      case "Y":
        return "YES";
      case "N":
        return "NO";
    }
  }

  thumbnail(beer) {
    if (!beer.labels || !beer.labels.medium) {
      return "/assets/images/No-beer-2-404.jpg";
    }

    return beer.labels.medium;
  }

  render() {
    const beer = this.state.beer;

    if (this.state.apiError) {
      return <Error />;
    } else if (this.state.isLoading) {
      return (
        <Fragment>
          <Background />
          <Loading />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Background />

          <div className="container shadow beer-detail">
            <div>
              <a className="btn back-button" href="/">
                <i className="fas fa-arrow-left" />
              </a>
            </div>

            <div className="d-flex row justify-content-around align-items-center">
              <div className="align-self-center">
                <img
                  src={this.thumbnail(beer)}
                  alt={`Bottle label: ${beer.name}`}
                />
              </div>

              <div className="align-self-center">
                <p>
                  <b>Name:</b> &nbsp; {beer.name || "N/A"}
                </p>

                <p>
                  <b>Abv:</b> &nbsp; {beer.abv ? beer.abv + " %" : "N/A"}
                </p>

                <p>
                  <b>Ibu:</b> &nbsp; {beer.ibu || "N/A"}
                </p>

                <p>
                  <b>Organic:</b> &nbsp;
                  {this.isOrganic(beer)}
                </p>

                <p>
                  <b>Create date:</b> &nbsp;
                  {beer.createDate ? beer.createDate : "N/A"}
                </p>

                <p>
                  <b>Update date:</b> &nbsp;
                  {beer.updateDate || "N/A"}
                </p>

                <p>
                  <b>Year:</b> &nbsp; {beer.year || "N/A"}
                </p>
                <p>
                  <b>Status:</b> &nbsp; {beer.status || "N/A"}
                </p>

                {beer.labels && (
                  <div>
                    <p>
                      <b>Labels:</b> &nbsp;
                      <a href={beer.labels.icon || ""}>Icon</a>, &nbsp;
                      <a href={beer.labels.medium || ""}>Medium</a>, &nbsp;
                      <a href={beer.labels.large || ""}>Large</a>
                    </p>
                  </div>
                )}

                {beer.glass && (
                  <div>
                    <p>
                      <b>Glass id: </b>&nbsp;
                      {beer.glass.id || "N/A"}
                    </p>
                    <p>
                      <b>Glass name:</b> &nbsp;
                      {beer.glass.name || "N/A"}
                    </p>
                    <p>
                      <b>Glass create data:</b> &nbsp;
                      {beer.glass.createDate || "N/A"}
                    </p>
                  </div>
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
