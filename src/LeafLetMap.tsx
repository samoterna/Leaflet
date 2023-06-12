import {CircleMarker, MapContainer, Marker, Popup, SVGOverlay, TileLayer, Tooltip} from "react-leaflet";
import {LatLngBoundsExpression, LatLngExpression} from "leaflet";

export function LeafLetMap(){
    const position:LatLngExpression = [51.505, -0.09]
    const bounds:LatLngBoundsExpression = [
        [51.49, -0.08],
        [51.5, -0.06],
    ]

    return(
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}  style={{height:"700px",width:"700px"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
                <rect x="0" y="0" width="100%" height="100%" fill="blue" />
                <circle r="5" cx="10" cy="10" fill="red" />
                <text x="50%" y="50%" stroke="white">
                    text
                </text>


            </SVGOverlay>


            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>

            <CircleMarker
                center={[51.51, -0.12]}
                pathOptions={{ color: 'red' }}
                radius={20}>
                <Tooltip>Tooltip for CircleMarker</Tooltip>
            </CircleMarker>

        </MapContainer>
    )
}