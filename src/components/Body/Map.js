import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
  position: "absolute",
  width: "100%",
  height: "100%",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: 23.703856,
          lng: 90.396434,
        }}
        zoom={15}
        onClick={this.onMapClicked}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD1rAzKOy-Gut1QTYTWxW10DBcG-19VRRc",
})(MapContainer);
