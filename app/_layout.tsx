import React, { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Stack } from "expo-router";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Cegah splash screen hilang otomatis
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  const fonts = {
    LibreBaskerville: require("../assets/fonts/LibreBaskerville-static.ttf"),
    ManufacturingConsent: require("../assets/fonts/ManufacturingConsent-static.ttf"),
    SpecialGothicExpandedOne: require("../assets/fonts/SpecialGothicExpandedOne-static.ttf"),
    SpaceMono: require("../assets/fonts/SpaceMono-static.ttf"),
    WinkyRough: require("../assets/fonts/WinkyRough-static.ttf"),
    Montserrat: require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
    PlayfairDisplay: require("../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
    RobotoItalic: require("../assets/fonts/RobotoItalic-VariableFont,wght.ttf"),
    Bungee: require("../assets/fonts/Bungee-Regular.ttf"),
    RedHatDisplay: require("../assets/fonts/RedHatDisplay-Italic-VariableFont_wght.ttf"),
  };

  const loadResources = useCallback(async () => {
    try {
      await Font.loadAsync(fonts);
      setIsReady(true);
    } catch (e) {
      console.error("Error loading fonts:", e);
    }
  }, []);

  useEffect(() => {
    loadResources();
  }, [loadResources]);

  useEffect(() => {
    if (isReady) SplashScreen.hideAsync();
  }, [isReady]);

  if (!isReady) {
    return (
      <View style={styles.loadingScreen}>
        <Text style={{ fontSize: 18 }}>Loading Fonts...</Text>
      </View>
    );
  }

  const fontNames = Object.keys(fonts);
  const fontSizes = [20, 22, 24, 26, 21, 23, 19, 25, 18, 22]; // variasi ukuran font

  return (
    <>
      <View style={styles.container}>
        {/* Judul */}
        <Text style={styles.headerText}>Font yang Digunakan:</Text>

        {/* Daftar font horizontal */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        >
          {fontNames.map((font, index) => (
            <Text
              key={font}
              style={{
                fontFamily: font,
                fontSize: fontSizes[index % fontSizes.length],
                marginHorizontal: 12,
                color: "#333",
              }}
            >
              {font}
            </Text>
          ))}
        </ScrollView>
      </View>

      <Stack />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F0F0",
    paddingTop: 40,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#555",
  },
  horizontalList: {
    paddingHorizontal: 16,
    alignItems: "center",
  },
  loadingScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});
