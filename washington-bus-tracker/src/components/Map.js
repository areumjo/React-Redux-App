/* global google */
import React from 'react';

const addMarker = (google, lat, lng) => {
    const myLatLng = {lat, lng};
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: myLatLng
    });
    const marker = new google.maps.Marker({
      position: myLatLng,
      map: map
    });
  }
  
class Map extends React.Component {
    // https://stackoverflow.com/a/48494032
    getGoogleMaps() {
  
        if (!this.googleMapsPromise) {
            this.googleMapsPromise = new Promise((resolve) => {
                window.resolveGoogleMapsPromise = () => {
                    resolve(google);
                    delete window.resolveGoogleMapsPromise;
                };

                const script = document.createElement("script");
                const API = 'AIzaSyA5NlL_XrTeWNKFqpONxnkNT5CQA7eeKTQ';
                script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=resolveGoogleMapsPromise`;
                script.async = true;
                document.body.appendChild(script);
            });
        }
  
      return this.googleMapsPromise;
    }
  
    componentWillMount() {
        // Start Google Maps API loading since we know we'll soon need it
        this.getGoogleMaps();
    }
  
    componentDidMount() {
        // Once the Google Maps API has finished loading, initialize the map
        this.getGoogleMaps().then(() => addMarker(google, this.props.lat, this.props.lon));
    }
  
    render() {
        return (
            <div>
                <h1>hey, here!</h1>
                <div id="map" style={{width: 400, height: 300, margin:"0 auto"}}></div>
            </div>
        )
    }
}

export default Map;