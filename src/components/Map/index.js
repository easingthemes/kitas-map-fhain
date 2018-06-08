import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../../config';
// import getGeoCodes from '../Geocode';
import ADDRESSES from '../../addresses';
import CODES from '../../codes';

const AnyReactComponent = ({ text }) => <div style={{width: '30px', height: '30px', background: 'green'}}>{text}</div>;

const AllKitas = () => {
    return CODES.map((code, i) => {
        return (
            <AnyReactComponent
                key={`item-${i}`}
                lat={code[0]}
                lng={code[1]}
                text={ADDRESSES[i]}
            />
        );
    });
};

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 52.514984,
      lng: 13.460138
    },
    zoom: 15
  };

    componentDidMount() {
        // getGeoCodes();
    }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
            {AllKitas()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
