"use client";
import { useState, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";

const Map = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchLngLat, setSearchLngLat] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const autocompleteRef = useRef(null);
  const [address, setAddress] = useState("");

  // laod script for google map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading....</div>;

  // static lat and lng
  const center = { lat: 51.509865, lng: -0.118092 };

  // handle place change on search
  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    setSelectedPlace(place);
    setSearchLngLat({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
    setCurrentLocation(null);
  };

  // get current location
  const handleGetLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setSelectedPlace(null);
          setSearchLngLat(null);
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  // on map load
 

  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
    

      {/* map component  */}
      <GoogleMap
       
        zoom={currentLocation || selectedPlace ? 18 : 12}
        center={currentLocation || searchLngLat || center}
        mapContainerClassName="map"
        mapContainerStyle={{ width: "100%", height: "400px", margin: "auto",borderRadius:"10px",boxShadow:"0 0 10px 0 rgba(0, 0, 0, 0.1)" }}       
      >
        {selectedPlace && <Marker position={searchLngLat} />}
        {currentLocation && <Marker position={currentLocation} />}
      </GoogleMap>
    </div>
  );
};

export default Map;
