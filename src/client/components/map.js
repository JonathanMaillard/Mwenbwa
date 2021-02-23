import React, {useRef} from "react";
import {MapContainer, TileLayer, FeatureGroup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import MapMarker from "./map-marker";


const Map = ({trees}) => {
    const groupRef = useRef();
    const clusterRef = useRef();
    return (<>
        <MapContainer center={[50.62571, 5.56878]} zoom={15}>
            <TileLayer
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            <FeatureGroup ref={groupRef} name={"Homes"}>
                <MarkerClusterGroup ref={clusterRef}>
                    {trees.map(tree => (
                        <MapMarker
                            position={tree.geometry.coordinates}
                            key={tree.id}
                        />
                    ))}
                </MarkerClusterGroup>
            </FeatureGroup>
        </MapContainer>
    </>);
}

export default Map;
