import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount () {

    var L = window.L;
    var map = L.map('mapid').setView([51.505, -0.09], 13);
    var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});		

    // start the map in South-East England
    map.setView(new L.LatLng(51.3, 0.7),9);
    map.addLayer(osm);
    var marker = L.marker([51.5, -0.09]).addTo(map);
    
  }

  render() {
    return (
      <div className="App">
        <div id="mapid"></div>
      </div>
    );
  }
}

export default App;
