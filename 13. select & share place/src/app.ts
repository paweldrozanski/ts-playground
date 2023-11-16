import axios from "axios";
import { Loader } from "@googlemaps/js-api-loader";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "some-key";

type GoogleDeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  console.log(enteredAddress);
  // send this to Google's API!
  axios
    .get<GoogleDeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress,
      )}&key=${GOOGLE_API_KEY}`,
    )
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = response.data.results[0].geometry.location;
      console.log(coordinates);

      const loader = new Loader({
        apiKey: GOOGLE_API_KEY,
        version: "weekly",
      });

      loader.load().then(async () => {
        const { Map } = (await google.maps.importLibrary(
          "maps",
        )) as google.maps.MapsLibrary;
        new Map(document.getElementById("map") as HTMLElement, {
          center: { lat: coordinates.lat, lng: coordinates.lng },
          zoom: 16,
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

form?.addEventListener("submit", searchAddressHandler);
