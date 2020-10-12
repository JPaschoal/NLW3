import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../images/map-maker.svg';

import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
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
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to='' className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>

    </div>
  );
}

export default OrphanagesMap;