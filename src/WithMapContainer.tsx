import {CRS, LatLngBounds, LatLngExpression} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {ImageOverlay, MapContainer} from "react-leaflet";

const LargeImageMap = () => {
    const position: LatLngExpression = [750, 750]
    const bounds = new LatLngBounds([[0, 0], [1500, 1500]])

    return (
        <MapContainer center={position} bounds={bounds} zoom={0} scrollWheelZoom={true} crs={CRS.Simple}
                      style={{height: "700px", width: "1500px"}}>

            <ImageOverlay url={"src/dortmund.svg"} bounds={bounds}/>

        </MapContainer>
    );
};

export default LargeImageMap;
