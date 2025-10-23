import mapboxgl from "mapbox-gl";
import { useTheme } from "next-themes";
import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";

export const MapSection = () => {
  const mapContainerRef = React.useRef<HTMLDivElement>( null );
  const mapRef = React.useRef<mapboxgl.Map>( null );
  const { theme } = useTheme();
  const [styleLoaded, setStyleLoaded] = React.useState( false );
  React.useEffect( () => {
    console.log( "api key", process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN );
    mapRef.current = new mapboxgl.Map( {
      container: "map",
      center: [105.828284, 21.000239],
      zoom: 13.2,
      attributionControl: false,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
    } );
    // Create marker by img
    const imgMarker = document.createElement( "img" );
    imgMarker.src = "/location.svg";
    imgMarker.style.width = "50px";
    imgMarker.style.height = "50px";

    // create label for marker
    const el = document.createElement( "div" );
    el.innerHTML = `Your desired html here`;
    el.className = `marker`;

    // Set marker into mapbox
    new mapboxgl.Marker( { element: imgMarker } )
      .setLngLat( [105.828284, 21.000239] )
      .addTo( mapRef.current );

    imgMarker.addEventListener( "click", () => {
      window.open(
        "https://www.google.com/maps?q=21.000239,105.828284",
        "_blank",
      );
    } );
    mapRef.current.on( "style.load", () => {
      setStyleLoaded( true );
    } );
    return () => {
      mapRef?.current?.remove(); // Cleanup khi component unmount
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] );
  React.useEffect( () => {
    if ( !styleLoaded ) return;
    mapRef.current?.setConfigProperty(
      "basemap",
      "lightPreset",
      theme === "light" ? "day" : "night",
    );
  }, [theme, styleLoaded] );
  return (
    <div
      className="h-[404px] overflow-hidden md:w-1/2"
      id="map"
      ref={mapContainerRef}
    />
  );
};
