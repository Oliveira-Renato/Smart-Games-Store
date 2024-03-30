import React from 'react';
import MapView, {
  Callout,
  Marker,
  PROVIDER_GOOGLE,
  Region,
} from "react-native-maps";
import { View, Button } from 'react-native';
import { router, useLocalSearchParams } from "expo-router";
import { styles } from "./styles";
import { BackButton } from '@/components/BackButton';
import locations from './locations.json';

export default function Maps() {
  const {loja}  = useLocalSearchParams();
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

  const coordenadas = buscarCoordenadasDaLoja(loja);

  const initialRegion = {
    latitude: coordenadas.latitude,
    longitude: coordenadas.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <BackButton />
        <MapView 
          region={initialRegion}
          initialRegion={initialRegion}
          style={styles.map}
          zoomEnabled={false}
          >
          {/* Adicionando um Marker para a localização escolhida */}
          <Marker
            coordinate={{
              latitude: initialRegion.latitude,
              longitude: initialRegion.longitude,
            }}
            title={"Localização"}
            description={"Shopping Tamboré"}
          />
        </MapView>
      </View>
    </View>
  );
}


