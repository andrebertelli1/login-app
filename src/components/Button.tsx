import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  text: string;
}

export function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="h-11 w-full mt-16 bg-[#B4AAF2] rounded-md items-center justify-center"
    >
      <Text className="text-white">{props.text}</Text>
    </TouchableOpacity>
  )
}