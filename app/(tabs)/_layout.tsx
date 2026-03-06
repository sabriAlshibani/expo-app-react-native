import { useHiddenHeader } from "@/hooks/useHiddenHeader";
import Colors from "@/services/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  useHiddenHeader();

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Home"
        options={{
          tabBarLabel: "الرئيسية",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarActiveTintColor: Colors.PRIMARY,
        }}
      />

      <Tabs.Screen
        name="Explore"
        options={{
          tabBarLabel: "استكشاف",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
          tabBarActiveTintColor: Colors.PRIMARY,
        }}
      />

      <Tabs.Screen
        name="Favorite"
        options={{
          tabBarLabel: "المفضلة",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
          tabBarActiveTintColor: Colors.PRIMARY,
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "حسابي",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
          tabBarActiveTintColor: Colors.PRIMARY,
        }}
      />
    </Tabs>
  );
}
