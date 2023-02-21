import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

interface Params {
  userInfo: {};
}

export function Dashboard() {
  const { navigate } = useNavigation();

  const route = useRoute();
  const { userInfo } = route.params as Params;

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
      <View className="items-center mt-28">
        <Image
          className="w-40 h-40 rounded-full"
          source={{
            uri: `${userInfo.picture}`,
          }}
        />
        <Text className="font-bold text-xl py-3">{userInfo.name}</Text>
        <Text className="font-semibold text-base">{userInfo.email}</Text>
      </View>
    </SafeAreaView>
  )
}