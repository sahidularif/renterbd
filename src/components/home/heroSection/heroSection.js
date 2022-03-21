import React from 'react';
import '../../../styles/header.css';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";
const HeroSection = () => {
    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null
    });

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
    };
    return (
        <div className="hero-section justify-content-center align-items-center my-auto">
            <div className="heading-section">
                <h1 className=""><strong>Find</strong><br /> your amazing room and roommate</h1>
            </div>
            <div class="search-bar">
                <div>
                    <PlacesAutocomplete
                        value={address}
                        onChange={setAddress}
                        onSelect={handleSelect}
                    >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div>
                                <p>Latitude: {coordinates.lat}</p>
                                <p>Longitude: {coordinates.lng}</p>

                                <input {...getInputProps({ placeholder: "Type address" })} />

                                <div>
                                    {loading ? <div>...loading</div> : null}

                                    {suggestions.map(suggestion => {
                                        const style = {
                                            backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                        };

                                        return (
                                            <div {...getSuggestionItemProps(suggestion, { style })}>
                                                {suggestion.description}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </PlacesAutocomplete>
                </div>
            </div>
            <div className="search-tag">
                <h1>Or browse the highlights</h1>
                <div className="tag-btn">
                    <button class="tag-btn-btn"><i class="far fa-bed"></i> Private room</button>
                    <button class="tag-btn-btn"><i class="fal fa-hotel"></i> Hotel</button>
                    <button class="tag-btn-btn"><i class="fal fa-building"></i> Apartment</button>
                    <button class="tag-btn-btn"><i class="fal fa-parking"></i> Parking</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;