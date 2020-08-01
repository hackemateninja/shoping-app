/*
 * Hook que se usa para cargar todos los tipos de fuente y se usa solo una vez
 * en App.tsx
 * */
import * as Font from "expo-font";
import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";
import { useState, useEffect } from "react";

export default function Cache(): boolean {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await preventAutoHideAsync();

        // Load fontsW
        await Font.loadAsync({
          "SF-Pro-Bold": require("../../assets/fonts/SF-Pro-Text-Bold.otf"),
          "SF-Pro-Text-Regular": require("../../assets/fonts/SF-Pro-Text-Regular.ttf"),
          "SF-Pro-Text-Semibold": require("../../assets/fonts/SF-Pro-Text-Semibold.ttf"),
        });
      } catch (e) {
      } finally {
        await hideAsync();
      }
    }

    loadResourcesAndDataAsync().then(() => {
      setLoadingComplete(true);
    });
  }, []);

  return isLoadingComplete;
}
