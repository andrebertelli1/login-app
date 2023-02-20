import { Text, TextInput, View } from "react-native";
import { Feather } from '@expo/vector-icons';

interface NameProps {
  title: string;
  text: string;
}

export function Name(props: NameProps) {
  return (
    <View className="pb-5">
      <Text className="font-semibold">{props.title}</Text>
      <View className="h-11 font-regular mt-1.5 border-[#A2A2A6] rounded-md border flex flex-row items-center px-4">
        <Feather
          name="mail"
          size={20}
          color="#667085"
        />
        <TextInput placeholder={props.text} placeholderTextColor="#747980" className="h-10 px-2" />
      </View>
    </View>
  )
}