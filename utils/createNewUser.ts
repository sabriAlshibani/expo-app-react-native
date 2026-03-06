import { axiosClient } from "@/services/GlobalApi";
import { router } from "expo-router";

export const createNewUser = async (
  clerkId: string,
  fullName: string,
  userEmail: string,
) => {
  try {
    const res = await axiosClient.get(
      `/user-lists?filters[clerkId][$eq]=${clerkId}`,
    );

    const existingUser = res.data.data;

    if (existingUser.length > 0) {
      console.log("User already exists");
      router.replace("/(tabs)/Home");
      return;
    }

    const result = await axiosClient.post("/user-lists", {
      data: {
        clerkId,
        fullName,
        userEmail,
      },
    });

    console.log("User created:", result.data);

    router.replace("/(tabs)/Home");
  } catch (error) {
    console.log("Strapi error:", error);
  }
};
