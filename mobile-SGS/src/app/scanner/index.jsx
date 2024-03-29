import { useEffect, useState } from "react";
import { useCameraPermissions, CameraView } from "expo-camera/next";
import { Button, StyleSheet, Text, View } from "react-native";
import { BackButton } from "@/components/BackButton";

export default function Scanner() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null); 

  useEffect(() => {
    if (!permission || !permission.granted) {
      requestPermission();
    }
  }, [permission]);

  if (permission?.status === null)
    return (
      <View>
        <Text>Getting camera permission...</Text>
      </View>
    );

  if (permission?.granted === false)
    return (
      <View>
        <Text>Don't have camera permission</Text>
      </View>
    );

  const handleBarcodeScanned = (data) => {
    console.log(data)
    setScannedData(data.data);
    setScanned(true);
  };

  return (
    <View style={styles.container}>
      <BackButton  />

      <View>
        <Text>Aproxime a camera {"\n"}</Text>
        <Text>do QRcode</Text>
      </View>
      
      <View  style={styles.containerCamera}>
        <CameraView
          style={StyleSheet.absoluteFillObject}
          barcodeScannerSettings={{
            barCodeTypes: ["qr","ean13"],
          }}
          onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        ></CameraView>
        {scanned && (
          <View style={styles.scanned}>
            <Text>{scannedData ?? "N/A" }</Text>
            <Button
              disabled={!scanned}
              title="Escanear de novo."
              onPress={() => setScanned(false)}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerCamera: {
    width: 260,
    height: 260
  },
  camera: {
    flex: 1
  },
  scanned: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: 20,
  },
});