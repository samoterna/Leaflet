import {useEffect, useRef, useState} from 'react';
import {Map, ImageOverlay, LatLngBoundsExpression, CRS} from 'leaflet';
import 'leaflet/dist/leaflet.css';

const WithMapReference = () => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const [imageBounds]= useState<LatLngBoundsExpression>([[0, 0], [2000, 2000]]);
    const imageUrl = 'src/dortmund.svg';
    const [imageOverlay] = useState<ImageOverlay> (new ImageOverlay(imageUrl, imageBounds));

    useEffect(() => {
        if (mapRef.current) {
            const map = new Map(mapRef.current, {crs: CRS.Simple});
            map.setMinZoom(-5)
            imageOverlay.addTo(map);
            map.fitBounds(imageBounds);

            return () => {
                map.remove();
            };
        }
    }, [imageBounds, imageOverlay]);

    return <div ref={mapRef} style={{width: '1000px', height: '700px'}}></div>;
};

export default WithMapReference;
