import Geocode from "react-geocode";
import { API_KEY } from '../../config';
import ADDRESSES from '../../addresses';

const getGeoCodes = () => {
    Geocode.setApiKey(API_KEY);
    Geocode.enableDebug();
    const promises = [];

    ADDRESSES.forEach((address) => {
        if (!address) {
            return;
        }

        promises.push(
            Geocode.fromAddress(address).then(
              response => {
                const { lat, lng } = response.results[0].geometry.location;
                return [lat, lng];
              },
              error => {
                console.error('er',error);
              }
            )
        );
    });

    Promise.all(promises)
        .then((data) => {
            console.log(data);
        }
    );
};

export default getGeoCodes;