import { ClerkProvider } from "@clerk/expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator } from "react-native";
import "./global.css";
export default function RootLayout() {
  const [fontLoading] = useFonts({
    appFont: require("./../assets/fonts/Tajawal-Regular.ttf"),
    appFontBold: require("./../assets/fonts/Tajawal-Bold.ttf"),
  });
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publishableKey) {
    throw new Error("Add your Clerk Publishable Key to the .env file");
  }

  if (!fontLoading) {
    return <ActivityIndicator />;
  }
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <Stack />
    </ClerkProvider>
  );
}
