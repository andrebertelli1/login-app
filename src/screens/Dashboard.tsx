import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export function Dashboard() {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <View className="flex-row px-6 pt-10 justify-between">
        <View>
          <Text className="text-[#B4AAF2] text-[18px] font-semibold">Welcome,</Text>
          <Text className="text-[#312E49] font-semibold text-[26px]">Dashboard</Text>
        </View>
        <TouchableOpacity
          className="pt-4"
          onPress={() => navigate('login')}
        >
          <Feather
            name="log-out"
            size={30}
            color="#312E49"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}