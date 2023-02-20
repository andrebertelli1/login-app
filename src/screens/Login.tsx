import { SafeAreaView, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { Password } from "../components/Password";

import { Email } from "../components/Email";
import { Checkbox } from "../components/Checkbox";
import { Button } from "../components/Button";

import Facebook from '../assets/facebook.svg'
import Google from '../assets/google.svg'
import Linkedin from '../assets/linkedin.svg'
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <View className="px-6 pt-16">
        <View>
          <Text className="font-semibold text-3xl pb-9">Login</Text>
        </View>
        <Email />
        <Password />
        <View className="flex-row justify-between pt-4">
          <Checkbox />
          <TouchableOpacity>
            <Text className="text-[#2805FF] font-regular text-md">Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <Button text="Login" />
        <View className="justify-center items-center mt-[60px] flex-row">
          <View className="h-[3px] w-24 bg-[#CDCED1]"></View>
          <Text className="px-4 text-[#747980]">or continue with</Text>
          <View className="h-[3px] w-24 bg-[#CDCED1]"></View>
        </View>
        <View className="flex-row justify-around mt-5">
          <TouchableOpacity
            className="border p-4 border-[#CDCED1] rounded-md"
          >
            <Facebook />
          </TouchableOpacity>
          <TouchableOpacity
            className="border p-4 border-[#CDCED1] rounded-md"
          >
            <Google />
          </TouchableOpacity>
          <TouchableOpacity
            className="border p-4 border-[#CDCED1] rounded-md"
          >
            <Linkedin />
          </TouchableOpacity>
        </View>
        <View className="flex-row gap-2 justify-center mt-24">
          <Text className="text-[#747980]">Don't have an account?</Text>
          <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigate('register')}
          >
            <Text className="text-[#2805FF]">Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}