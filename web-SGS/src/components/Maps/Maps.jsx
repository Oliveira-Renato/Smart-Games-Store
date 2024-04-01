import React, { useEffect, useRef } from 'react';
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import { useParams } from 'react-router-dom';
import TileLayer from 'ol/layer/Tile';
import locations from './locations.json';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';
import "./styles.css";

export default function Maps() {
  const mapRef = useRef(null); // Referência para o elemento do mapa
  const { storeName } = useParams(); // Obtém o nome da loja da URL

  // Função para buscar as coordenadas de uma loja específica
  function buscarCoordenadasDaLoja(nomeLoja) {
    // Procura pela loja no array de locais
    const local = locations.find(local => local.hasOwnProperty(nomeLoja));

    // Se o local for encontrado, retorna suas coordenadas
    if (local) {
      return local[nomeLoja];
    } else {
      // Se a loja não for encontrada, retorna null ou lança um erro, dependendo do seu cenário
      return null;
    }
  }

  // Obtém as coordenadas da loja especificada
  const coordenadas = buscarCoordenadasDaLoja(storeName);

  // Define a região inicial do mapa com base nas coordenadas
  const initialRegion = {
    latitude: coordenadas.latitude,
    longitude: coordenadas.longitude,
  };

  // Efeito para inicializar o mapa quando o componente é montado
  useEffect(() => {
    // Verifica se a referência do mapa existe
    if (!mapRef.current) return;

    // Cria uma nova instância do mapa
    const map = new Map({
      target: mapRef.current, // Define o elemento de destino do mapa
      layers: [
        new TileLayer({
          source: new OSM(), // Usa a fonte OSM (OpenStreetMap) para o layer
        }),
      ],
      view: new View({
        center: fromLonLat([initialRegion.longitude, initialRegion.latitude]), // Define o centro do mapa com base nas coordenadas
        zoom: 16, // Define o nível de zoom inicial do mapa
      }),
    });

    // Retorna uma função de limpeza para desmontar o mapa quando o componente é desmontado
    return () => {
      map.setTarget(null); // Remove o mapa do elemento de destino
    };
  }, []); // O efeito é executado apenas uma vez, quando o componente é montado

  return (
    <section className={"padding"}>
      <div>
        {/* Título e subtítulo */}
        <h2 className={"sectionHeadText"}>Venha em uma de nossas lojas</h2>
        <p className={"sectionSubText margin_title"}>
          E garanta já o seu jogo!
        </p>
      </div>
      {/* Elemento do mapa */}
      <div ref={mapRef} style={{ width: '100%', height: '500px', borderRadius: 20 }} />
    </section>
  );
};