import React, { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Stack } from "expo-router";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Cegah splash screen otomatis hilang
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  // Font statis (5)
  const staticFonts = {
    LibreBaskerville: require("../assets/fonts/LibreBaskerville-static.ttf"),
    ManufacturingConsent: require("../assets/fonts/ManufacturingConsent-static.ttf"),
    SpecialGothicExpandedOne: require("../assets/fonts/SpecialGothicExpandedOne-static.ttf"),
    SpaceMono: require("../assets/fonts/SpaceMono-static.ttf"),
    WinkyRough: require("../assets/fonts/WinkyRough-static.ttf"),
  };

  // Font variabel (5)
  const variableFonts = {
    Montserrat: require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
    PlayfairDisplay: require("../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
    RobotoItalic: require("../assets/fonts/RobotoItalic-VariableFont,wght.ttf"),
    Bungee: require("../assets/fonts/Bungee-Regular.ttf"),
    RedHatDisplay: require("../assets/fonts/RedHatDisplay-Italic-VariableFont_wght.ttf"),
  };

  const allFonts = { ...staticFonts, ...variableFonts };

  const loadFonts = useCallback(async () => {
    try {
      await Font.loadAsync(allFonts);
      setIsReady(true);
    } catch (err) {
      console.error("Error loading fonts:", err);
    }
  }, []);

  useEffect(() => {
    loadFonts();
  }, [loadFonts]);

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

  const staticFontNames = Object.keys(staticFonts);
  const variableFontNames = Object.keys(variableFonts);

  const fontSizes = [22, 24, 20, 26, 23, 25, 21, 19, 22, 20];

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>Font yang Digunakan:</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        >
          {/* Label untuk font statis */}
          <Text style={styles.label}>📌 Font Statis:</Text>

          {staticFontNames.map((font, index) => (
            <Text
              key={font}
              style={{
                fontFamily: font,
                fontSize: fontSizes[index],
                marginHorizontal: 12,
                color: "#222",
              }}
            >
              {font}
            </Text>
          ))}

          {/* Label untuk font variabel */}
          <Text style={styles.label}>📌 Font Variabel:</Text>

          {variableFontNames.map((font, index) => (
            <Text
              key={font}
              style={{
                fontFamily: font,
                fontSize: fontSizes[index + staticFontNames.length],
                marginHorizontal: 12,
                color: "#222",
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
    backgroundColor: "#F8F8F8",
    paddingTop: 40,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    color: "#444",
  },
  horizontalList: {
    paddingHorizontal: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 8,
    color: "#555",
  },
  loadingScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});
