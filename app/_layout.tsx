import "./global.css";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator } from "react-native";
export default function RootLayout() {
  const [fontLoading] = useFonts({
    appFont: require("./../assets/fonts/Tajawal-Regular.ttf"),
    appFontBold: require("./../assets/fonts/Tajawal-Bold.ttf"),
  });

  if (!fontLoading) {
    return <ActivityIndicator />;
  }
  return <Stack />;
}
