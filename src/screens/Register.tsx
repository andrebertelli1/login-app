import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { BackButton } from "../components/BackButton";
import { Email } from "../components/Email";
import { Name } from "../components/Name";
import { Password } from "../components/Password";

export function Register() {
  return (
    <SafeAreaView>
      <View className="px-6 pt-8">
        <BackButton />
        <Text className="font-semibold text-3xl pt-4 pb-9">Sign up</Text>
        <Name title="First Name" text="Your First Name" />
        <Name title="Last Name" text="Your Last Name" />
        <Email />
        <Password />
        <View className="mt-4">
          <Text
            className="text-[#747980] bg-green-200 items-start justify-center"
          >
            By signing up you agree to our Terms & Condition and Privacy Policy.*
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}