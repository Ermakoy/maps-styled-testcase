import * as React from 'react';
import ReactMapboxGl, { Layer, Popup } from 'react-mapbox-gl';
import styled from 'styled-components';
import { StyledPopup } from 'app/components/modules/StyledPopup';

const StyledPopupInfo = styled.div`
  width: ${props => `${props.tripduration / 5}px`};
  height: ${props => `${props.tripduration / 5}px`};
  background: lightcoral;
`;
class PopupInfo extends React.Component {
  shouldComponentUpdate = nextProps => {
    const number = this.props.number || -1;
    const selectedRide = this.props.selectedRide || -1;
    return number === selectedRide || nextProps.number === nextProps.selectedRide;
  };

  render() {
    return this.props.number === this.props.selectedRide ? (
      <StyledPopupInfo tripduration={this.props.tripduration}>{this.props.station}</StyledPopupInfo>
    ) : (
      <StyledPopup />
    );
  }
}

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiZXJtYWtveSIsImEiOiJjamphYmJ6MzMxbDhnM2tuemQ1YnFmYjdkIn0.piZurYMVyrwSQ2kH1NMRwg',
});

const zoom = [1];

const CycleMap = props => (
  <Map
    style="mapbox://styles/mapbox/streets-v8"
    zoom={zoom}
    containerStyle={{
      height: '100%',
      width: '100%',
    }}
  >
    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }} />
    {props.items.map((ride, number) => (
      <React.Fragment>
        <Popup key={number + 'start'} coordinates={[ride['start station longitude'], ride['start station latitude']]}>
          <PopupInfo
            number={number}
            station={ride['start station name']}
            selectedRide={props.selectedRide}
            tripduration={ride.tripduration}
          />
        </Popup>
        <Popup key={number + 'end'} coordinates={[ride['end station longitude'], ride['end station latitude']]}>
          <PopupInfo
            number={number}
            station={ride['end station name']}
            selectedRide={props.selectedRide}
            tripduration={ride.tripduration}
          />
        </Popup>
      </React.Fragment>
    ))}
  </Map>
);
export default CycleMap;
