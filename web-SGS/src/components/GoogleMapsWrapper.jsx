import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

export const GoogleMapsWrapper = ({children}) => {
  // Ideally we want the apiKey to be fetch from an environment variable
  const apiKey = "AIzaSyCjRO_glGYg21Dypvu75UI7CxnIVXtt3Cw";

  if (!apiKey) {
    return <div>Cannot display the map: google maps api key missing</div>;
  }

  return <Wrapper apiKey={apiKey}>{children}</Wrapper>;
};