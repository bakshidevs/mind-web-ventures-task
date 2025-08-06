"use client"

// MapView.tsx or a Leaflet setup file
import L, { LatLngBoundsExpression } from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMapEvent, Rectangle } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';

const position: LatLngExpression = [22.5726, 88.3639]; // Kolkata, for example

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

function LocationMarker() {
    const [positions, setPositions] = useState<LatLngExpression[]>([])

    // const map = useMapEvents({
    //     click() {
    //         map.locate()
    //     },
    //     locationfound(e) {
    //         const {lat, lng} = e.latlng;
    //         setPositions([[lat, lng]])
    //         console.log(e.latlng);

    //         map.flyTo(e.latlng, map.getZoom())
    //     },
    // })

    useMapEvent("click", (e) => {
        const { lat, lng } = e.latlng;
        console.log("Clicked at", lat + ", " + lng);
        setPositions(currentPositions => {
            if (currentPositions?.length >= 2) {
                return [[lat, lng]]
            }
            return [...currentPositions, [lat, lng]]
        })
    });

    const bounds = positions.length === 2 ? L.latLngBounds(positions) : null;



    return positions.length === 0 ? null : (
        <>
            <Marker position={positions[0]}>
                <Popup>
                    <h1 className="font-bold text-lg">Hello from BakshiDevs!🌆</h1>
                    <p className="text-xs">A warm hello from Kolkata.</p>
                </Popup>
            </Marker>
            {bounds && <Rectangle bounds={bounds} pathOptions={{ color: 'red' }} />}
        </>
    )
}

export default function MapView() {

    const [rectangle, setRectangle] = useState<LatLngBoundsExpression>([
        [22.5627, 88.5012],
        [22.5581, 88.4885]
    ])
    // const position: LatLngExpression = [22.5726, 88.3639];

    useEffect(() => {
    }, [])

    return (
        <MapContainer center={{ lat: 22.562717, lng: 88.501159 }} zoom={5} scrollWheelZoom={true} className="h-full w-full">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
            {/* <Rectangle bounds={rectangle} /> */}
            {/* <Rectangle pathOptions={{ color: 'red' }} bounds={rectangle} /> */}
        </MapContainer>
    );
}