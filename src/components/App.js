import React, { Fragment } from "react";
import Pagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
import Background from "./Background";
import Loading from "./Loading";
import BeerList from "./BeerList";
import Error from "./Error";
import "@fortawesome/fontawesome-free/css/all.css";
import "../sass/App.scss";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      isLoading: Boolean,
      pagination: {
        total: 0,
        currentPage: 1,
        itemsPerPage: 0
      },
      isDataArrived: Boolean
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.setState(state => ({ ...state, isLoading: true }));

    const url = "http://localhost:5000/api/get-beers";

    axios
      .get(url, {
        params: {
          p: this.state.pagination.currentPage
        }
      })
      .then(response => {
        if (response) {
          if (response.data.currentPage !== response.data.numberOfPages) {
            this.setState({
              isDataArrived: true,
              isLoading: false,
              beers: response.data.data,
              pagination: {
                currentPage: response.data.currentPage,
                itemsPerPage: response.data.data.length,
                total: response.data.totalResults
              }
            });
          }

          // fix pagination break at last page
          if (response.data.currentPage === response.data.numberOfPages) {
            this.setState({
              isDataArrived: true,
              isLoading: false,
              beers: response.data.data,
              pagination: {
                currentPage: response.data.currentPage,
                itemsPerPage: 50,
                total: response.data.totalResults
              }
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
          <Fragment>
            <div
              className={
                "d-flex justify-content-center container-fluid shadow  "
              }
            >
              <Pagination
                className={this.state.isLoading ? " hidden" : ""}
                total={this.state.pagination.total}
                current={this.state.pagination.currentPage}
                locale={localeInfo}
                onChange={this.paginate}
                pageSize={this.state.pagination.itemsPerPage}
              />
            </div>
            <BeerList beers={this.state.beers} />
            <div
              className={
                "d-flex justify-content-center container-fluid shadow  "
              }
            >
              <Pagination
                className={this.state.isLoading ? " hidden" : ""}
                total={this.state.pagination.total}
                current={this.state.pagination.currentPage}
                locale={localeInfo}
                onChange={this.paginate}
                pageSize={this.state.pagination.itemsPerPage}
              />
            </div>
          </Fragment>
        </Fragment>
      );
    }
  }
}

export default App;
