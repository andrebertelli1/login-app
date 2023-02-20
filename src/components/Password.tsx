import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';

export function Password() {
  return (
    <View className="mt-6">
      <Text className="font-semibold">Password</Text>
      <View className="h-11 font-regular mt-1.5 border-[#A2A2A6] rounded-md border flex flex-row items-center px-4">
        <Feather
          name="lock"
          size={20}
          color="#667085"
        />
        <TextInput placeholder="Your Password" placeholderTextColor="#747980" className="h-10 px-2 w-[85%]" />
        <TouchableOpacity>
          <Feather name="eye-off" size={20} color="#667085" />
        </TouchableOpacity>
      </View>
    </View>
  )
}