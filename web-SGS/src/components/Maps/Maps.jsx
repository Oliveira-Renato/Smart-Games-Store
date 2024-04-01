import React, { useEffect, useRef } from 'react';
import { SectionWrapper } from '../../hoc';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { styles } from '../../styles';
import "./styles.css";

const Maps = () => {
  const mapRef = useRef(null);

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
        center: fromLonLat([-46.83438279166578, -23.50413198941901]),
        zoom: 17,
      }),
    });

    

    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <div>
      <div>
        <h2 className={`${styles.sectionHeadText}`}>Venha em uma de nossas lojas</h2>
        <p className={`${styles.sectionSubText} margin_title`}>
          E garanta já o seu jogo!
        </p>
        
      </div>
      <div ref={mapRef} style={{ width: '100%', height: '400px', borderRadius: 20 }} />
    </div>
  );
};

export default SectionWrapper(Maps, 'maps');
