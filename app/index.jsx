import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { Redirect,  router} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "./components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center justify-center min-h-[84vh] px-4">
          <Image
            source={images.logo}
            className="w-[230px] h-[200px] mt-10"
            resizeMode="contain"
          />

          <Text className="text-sm text-black-100 font-pregular mt-1 text-center">Share Your Cat's Best Moments.</Text>

          <CustomButton
            title="Continue With Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-9"
          ></CustomButton>
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161522' style='light'/>
    </SafeAreaView>
  );
}
