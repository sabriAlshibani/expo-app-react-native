import Heading from "@/components/Heading";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="flex-1 justify-between">
        {/* Top Image */}
        <View className="items-center mt-10">
          <Image
            source={require("../assets/images/welcome-01.png")}
            className="w-full h-80"
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <View className="items-center">
          <Heading label="مرحبا بك" className="text-white text-center" />
          <Heading
            label="في أوفر سوبر ماركت"
            className="text-white text-center mt-1"
          />
        </View>

        {/* Card */}
        <View className="bg-white mx-6 mb-10 p-6 rounded-3xl shadow-md">
          <Text
            className="text-center text-xl leading-8"
            style={{ fontFamily: "appFont" }}
          >
            كل ما تحتاجه بيتك ومطبخك وضيوفك تلقاه عندنا
          </Text>

          {/* Google Button */}
          <Pressable className="flex-row items-center justify-center gap-3 border border-gray-200 rounded-full p-4 mt-6 active:opacity-70">
            <Image
              source={require("../assets/images/google.png")}
              className="w-6 h-6"
              resizeMode="contain"
            />

            <Text className="text-lg" style={{ fontFamily: "appFontBold" }}>
              التسجيل باستخدام جوجل
            </Text>
          </Pressable>

          {/* Skip Button */}
          <Pressable className="rounded-full p-4 mt-4 bg-primary active:opacity-80">
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
