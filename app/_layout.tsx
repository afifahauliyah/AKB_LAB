import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    // 🧷 5 Font Statis
    "LibreBaskerville": require("../assets/fonts/LibreBaskerville-static.ttf"),
    "ManufacturingConsent": require("../assets/fonts/ManufacturingConsent-static.ttf"),
    "SpecialGothicExpandedOne": require("../assets/fonts/SpecialGothicExpandedOne-static.ttf"),
    "SpaceMono": require("../assets/fonts/SpaceMono-static.ttf"),
    "WinkyRough": require("../assets/fonts/WinkyRough-static.ttf"),

    // 🧷 5 Variable Fonts
    "Montserrat": require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
    "PlayfairDisplay": require("../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
    "RobotoItalic": require("../assets/fonts/RobotoItalic-VariableFont,wght.ttf"),
    "Bungee": require("../assets/fonts/Bungee-Regular.ttf"),
    "RedHatDisplay": require("../assets/fonts/RedHatDisplay-Italic-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack />;
}
