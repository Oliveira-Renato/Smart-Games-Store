import { useEffect, useState } from "react";
import { useCameraPermissions, CameraView } from "expo-camera/next";
import { Button, StyleSheet, Text, View } from "react-native";
import { BackButton } from "@/components/BackButton";
import { styles } from "./styles";
import * as Clipboard from 'expo-clipboard';

export default function Scanner() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null); 

  // Função para copiar os dados escaneados para a área de transferência
  const copyToClipboard = async (scannedData) => {
    await Clipboard.setStringAsync(scannedData);
  };

  // Efeito para solicitar permissão da câmera ao montar o componente
  useEffect(() => {
    if (!permission || !permission.granted) {
      requestPermission();
    }
  }, [permission]);

  // Verificações de permissão da câmera
  if (permission?.status === null)
    return (
      <View>
        <Text>Getting camera permission...</Text>
      </View>
    );

  // Caso permissão negada. retorna mensagem
  if (permission?.granted === false)
    return (
      <View>
        <Text>Don't have camera permission</Text>
      </View>
    );

  // Função para lidar com a leitura do código de barras  
  const handleBarcodeScanned = (data) => {
    setScannedData(data.data);
    setScanned(true);
  };

  return (
    <View style={styles.container}>
      <BackButton  />

      <View>
         {/* Instruções para o usuário */}
        <Text style={styles.fontDefault}>Aproxime a camera {"\n"}</Text>
        <Text style={styles.fontDefault}>do QRcode</Text>
      </View>
      
      {/* Componente CameraView para visualizar a câmera */}
      <View  style={styles.containerCamera}>
        <CameraView
          style={StyleSheet.absoluteFillObject}
          barcodeScannerSettings={{
            barCodeTypes: ["qr","ean13"],
          }}
          onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        ></CameraView>
        {/* Exibe os dados escaneados e um botão para copiar */}
        {scanned && (
          <View style={styles.scanned}>
            <Text>{scannedData ?? "N/A" }</Text>
            <Button
              disabled={!scanned}
              title="Copiar"
              onPress={() => {
                if(scannedData) {
                  copyToClipboard(scannedData);
                  setScanned(false);
                }
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
}