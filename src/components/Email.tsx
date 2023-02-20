import { Text, TextInput, View } from "react-native";
import { Feather } from '@expo/vector-icons';

export function Email() {
  return (
    <View>
      <Text className="font-semibold">E-mail</Text>
      <View className="h-11 font-regular mt-1.5 border-[#A2A2A6] rounded-md border flex flex-row items-center px-4">
        <Feather
          name="mail"
          size={20}
          color="#667085"
        />
        <TextInput placeholder="Your Email" placeholderTextColor="#747980" className="h-10 px-2" />
      </View>
    </View>
  )
}