import React, {useEffect, useRef} from 'react';
import {Map, ImageOverlay, LatLngBoundsExpression, CRS} from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LargeImageMap: React.FC = () => {
    const mapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (mapRef.current) {
            const map = new Map(mapRef.current, {crs: CRS.Simple});
            const imageUrl = 'src/dortmund.svg';
            const imageBounds: LatLngBoundsExpression = [[0, 0], [2000, 2000]];
            map.setMinZoom(-5)

            const imageOverlay = new ImageOverlay(imageUrl, imageBounds);
            imageOverlay.addTo(map);

            map.fitBounds(imageBounds);

            return () => {
                map.remove();
            };
        }
    }, []); // Add an empty dependency array to ensure the effect runs only once during initial mount

    return <div ref={mapRef} style={{width: '1000px', height: '700px'}}></div>;
};

export default LargeImageMap;
