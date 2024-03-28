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

export default function Maps() {
  const initialRegion = {
    latitude: -23.50413198941901,
    longitude: -46.83438279166578,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
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
      
      <View style={{ position: 'absolute', top: 40, left: 20 }}>
        <Button title="Voltar" onPress={router.back} />
      </View>
    </View>
  );
}


