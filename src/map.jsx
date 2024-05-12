import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const MapBlock = ({ onLoad, onError }) => {
  const apiKey = "AIzaSyDB2Pwe35cnVZRbkQd1dDR6TEXoyOFQef0";
  const loader = new Loader({ apiKey });

  useEffect(() => {
    loader.load().then((google) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const map = new google.maps.Map(document.getElementById("map"), {
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            zoom: 15,
          });

          const marker = new google.maps.Marker({
            position: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            map: map,
            title: "Your Location",
          });

          map.addListener("click", (event) => {
            marker.setPosition(event.latLng);
          });

          // Callback function to notify parent component that the map is loaded
          if (typeof onLoad === "function") {
            onLoad();
          }
        },
        () => {
          console.error("Error getting user location");

          // Callback function to notify parent component about the error
          if (typeof onError === "function") {
            onError();
          }
        }
      );
    });
  }, [loader, onLoad, onError]);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
};

export default MapBlock;
