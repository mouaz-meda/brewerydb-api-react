import React, { Fragment } from "react";
import Background from "./Background";
import Loading from "./Loading";
import Pagination from "./Pagination";
import Error from "./Error";
import BeerApi from "../helpers/BeerApi";
import BeerListItem from "./BeerListItem";

class BeerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      isLoading: true,
      pagination: {
        total: 0,
        currentPage: 1,
        itemsPerPage: 50
      },
      apiError: false
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.setState(state => ({ ...state, isLoading: true }));
    const api = new BeerApi();

    api.getList(this.state.pagination.currentPage).then(response => {
      if (response) {
        this.setState({
          isLoading: false,
          beers: response.data.data,
          pagination: {
            currentPage: response.data.currentPage,
            itemsPerPage: this.state.pagination.itemsPerPage,
            total: response.data.totalResults
          }
        });
      } else {
        this.setState({
          apiError: true
        });
      }
    });
  }

  paginate = (page, itemsPerPage) => {
    this.setState(
      state => {
        state.pagination.currentPage = page;
        state.pagination.itemsPerPage = itemsPerPage;

        return state;
      },
      () => {
        this.loadData();
      }
    );
  };

  render() {
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
          <Pagination
            className={this.state.isLoading ? " hidden" : ""}
            total={this.state.pagination.total}
            current={this.state.pagination.currentPage}
            onChange={this.paginate}
            pageSize={this.state.pagination.itemsPerPage}
          />
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              {this.state.beers.map(beer => {
                return <BeerListItem key={beer.id} beer={beer} />;
              })}
            </div>
          </div>
          <Pagination
            className={this.state.isLoading ? " hidden" : ""}
            total={this.state.pagination.total}
            current={this.state.pagination.currentPage}
            onChange={this.paginate}
            pageSize={this.state.pagination.itemsPerPage}
          />
        </Fragment>
      );
    }
  }
}

export default BeerList;
