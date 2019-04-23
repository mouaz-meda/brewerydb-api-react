import React, { Fragment } from "react";
import BeerListItem from "./BeerListItem";

class BeerList extends React.Component {
  render() {
    return (
      <Fragment>
        <div className={"container-fluid "}>
          <div className="row d-flex justify-content-center">
            {this.props.beers.map(beer => {
              return <BeerListItem key={beer.id} beer={beer} />;
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BeerList;
