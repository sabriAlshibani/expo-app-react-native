import Heading from "@/components/Heading";
import { useHiddenHeader } from "@/hooks/useHiddenHeader";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { createNewUser } from "@/utils/createNewUser";
import { useSSO, useUser } from "@clerk/expo";
import * as AuthSession from "expo-auth-session";
import { useNavigation, useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import React, { useCallback, useEffect } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

WebBrowser.maybeCompleteAuthSession();

export default function Index() {
  const navigation = useNavigation();
  const { startSSOFlow } = useSSO();
  const router = useRouter();
  const { user } = useUser();

  useWarmUpBrowser();

  useHiddenHeader();

  useEffect(() => {
    if (user?.id) {
      createNewUser(
        user.id,
        user?.fullName || "unkown user",
        user?.primaryEmailAddress?.emailAddress || "",
      );
    }
  }, [user?.id]);

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: "oauth_google",

        redirectUrl: AuthSession.makeRedirectUri({
          scheme: "expoapp",
          path: "sso-callback",
        }),
      });

      if (createdSessionId) {
        await setActive!({ session: createdSessionId });

        router.replace("/(tabs)/Home");
      }
    } catch (err) {
      console.error("OAuth error:", err);
    }
  }, [startSSOFlow, router]);

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="flex-1 justify-between">
        <View className="items-center mt-10">
          <Image
            source={require("../assets/images/welcome-01.png")}
            className="w-full h-80"
            resizeMode="contain"
          />
        </View>

        <View className="items-center">
          <Heading label="مرحبا بك" className="text-white text-center" />
          <Heading
            label="في أوفر سوبر ماركت"
            className="text-white text-center mt-1"
          />
        </View>

        <View className="bg-white mx-6 mb-10 p-6 rounded-3xl shadow-md">
          <Text
            className="text-center text-xl leading-8"
            style={{ fontFamily: "appFont" }}
          >
            كل ما تحتاجه بيتك ومطبخك وضيوفك تلقاه عندنا
          </Text>

          <TouchableOpacity
            onPress={onPress}
            className="flex-row items-center justify-center gap-3 border border-gray-200 rounded-full p-4 mt-6"
          >
            <Image
              source={require("../assets/images/google.png")}
              className="w-6 h-6"
            />

            <Text className="text-lg" style={{ fontFamily: "appFontBold" }}>
              التسجيل باستخدام جوجل
            </Text>
          </TouchableOpacity>

          <Pressable className="rounded-full p-4 mt-4 bg-primary">
            <Text
              className="text-lg text-center text-white"
              style={{ fontFamily: "appFontBold" }}
            >
              تخطي
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
