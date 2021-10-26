import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaRegCopy, FaDirections } from "react-icons/fa";

const MapView = (props) => {
  return (
    <>
      {/* call */}
      <div>
        <h4 className="text-xl font-medium mb-1">Call</h4>
        <h5 className="text-zmtcolor-300 font-light text-md">
          {props.phno?.map((num) => `${num} \n`)}
        </h5>
      </div>

      {/* direction */}
      <div>
        <h4 className="text-xl font-medium mb-1">Direction</h4>
        <div className="w-full h-48">
          <MapContainer center={props?.coord} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={props.coord}>
              <Popup>{props.name}</Popup>
            </Marker>
          </MapContainer>
        </div>

        <p className="text-lg text-gray-600">{props.address}</p>
      </div>
      {/* buttons */}
      <div className="flex items-center gap-4">
        <button className="font-extralight border border-gray-400 rounded-md flex items-center py-1 px-2 gap-1">
          <FaRegCopy />
          Copy
        </button>
        <button className="font-extralight border border-gray-400 rounded-md flex items-center py-1 px-2 gap-1">
          <FaDirections className="text-zmtcolor-400" />
          Direction
        </button>
      </div>
    </>
  );
};

export default MapView;
