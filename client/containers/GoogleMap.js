import React, {PropTypes, Component} from 'react';

import GoogleMap from 'google-map-react';

export default class SimpleMapPage extends Component {
    static defaultProps = {
        center: {lat: 40.1784934, lng: 44.5006323},
        zoom: 18
    };

    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            height: '100%'
        }
        return (
            <div style={style}>
            <GoogleMap
                yesIWantToUseGoogleMapApiInternals={true}
                onGoogleApiLoaded={({map, maps}) => {
                    window.map = map;
                    window.maps = maps;
                }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                bootstrapURLKeys={{
                    key: 'AIzaSyAe3bEQpqEzyShL3GDhJzb0LPfLjmhbT5Y'
                }}>
            </GoogleMap>
            </div>
        );
    }
}
