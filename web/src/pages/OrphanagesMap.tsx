import React from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapIcon from '../utils/mapIcon';
import mapMarkerImg from '../images/map-maker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
  console.log(process.env.REACT_APP_MAPBOX_TOKEN)
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="mapMarker"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </header>
        <footer>
          <strong>Bragança Paulista</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-22.9555652,-46.5451609]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      > 
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

        <Marker
          icon = {mapIcon}
          position = {[-22.9555652,-46.5451609]}  
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
            Lar dos meninos
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#FFF"/>
            </Link>
          </Popup>
        /</Marker>
      </Map>

      <Link to='/orphanages/create' className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>

    </div>
  );
}

export default OrphanagesMap;