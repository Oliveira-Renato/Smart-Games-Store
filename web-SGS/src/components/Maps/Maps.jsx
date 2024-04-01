import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import locations from './locations.json';
import "./styles.css";
import { useParams } from 'react-router-dom';

export default function Maps() {
  const mapRef = useRef(null);
  const { storeName } = useParams();
  // Função para buscar as coordenadas de uma loja específica
  function buscarCoordenadasDaLoja(nomeLoja) {
    // Procura pela loja no array de locais
    const local = locations.find(local => local.hasOwnProperty(storeName));

    // Se o local for encontrado, retorna suas coordenadas
    if (local) {
      return local[storeName];
    } else {
      // Se a loja não for encontrada, retorna null ou lança um erro, dependendo do seu cenário
      return null;
    }
  }

  const coordenadas = buscarCoordenadasDaLoja(storeName);

  const initialRegion = {
    latitude: coordenadas.latitude,
    longitude: coordenadas.longitude,
  };

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([initialRegion.longitude, initialRegion.latitude]),
        zoom: 16,
      }),
    });

    

    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <div>
      <div>
        <h2 className={"sectionHeadText"}>Venha em uma de nossas lojas</h2>
        <p className={"sectionSubText margin_title"}>
          E garanta já o seu jogo!
        </p>
        
      </div>
      <div ref={mapRef} style={{ width: '100%', height: '500px', borderRadius: 20 }} />
    </div>
  );
};