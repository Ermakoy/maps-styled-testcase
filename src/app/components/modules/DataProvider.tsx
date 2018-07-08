import * as React from 'react';
import styled from 'styled-components';
import * as Papa from 'papaparse';

const Loading = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: papayawhip;
`;

class DataProvider extends React.PureComponent {
  state = {
    isDataFetching: true,
    result: {},
    selectedRide: null,
  };

  public setSelectedRide = (ride = null) => {
    this.setState({ selectedRide: ride });
  };

  componentDidMount = () => {
    const data = require('../../../data.csv');
    Papa.parse(data, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: result => {
        this.setState({ result: result.data.slice(0, 50), isDataFetching: false });
      },
    });
  };

  render() {
    return this.state.isDataFetching ? (
      <Loading>Loading...</Loading>
    ) : (
      this.props.render({
        data: this.state.result,
        selectedRide: this.state.selectedRide,
        updateSelectedRide: this.setSelectedRide,
      })
    );
  }
}

export default DataProvider;
