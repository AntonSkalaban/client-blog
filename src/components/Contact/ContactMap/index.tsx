"use client";
import { FC, memo } from "react";
import Map, { Marker } from "react-map-gl/maplibre";

import { mapState, mapStyleUrl, markers } from "./constants";
import styled from "./styled.module.scss";

import "maplibre-gl/dist/maplibre-gl.css";

export const ContactMap: FC = memo(() => {
  return (
    <div className={styled.map}>
      <Map initialViewState={mapState} mapStyle={mapStyleUrl}>
        {markers.map(({ name, coordinates: { latitude, longitude } }) => (
          <Marker key={name} longitude={longitude} latitude={latitude} color="red" />
        ))}
      </Map>
    </div>
  );
});
