import { TouchableOpacity, View } from "react-native";

import Facebook from '../assets/facebook.svg'
import Google from '../assets/google.svg'
import Linkedin from '../assets/linkedin.svg'

import { useNavigation } from "@react-navigation/native";

import * as AuthSession from 'expo-auth-session';
import { useState } from "react";

type AuthResponse = {
  params: {
    access_token: string;
  };
  type: string
}

export function SocialLogin() {
  const { navigate } = useNavigation();

  const [userDate, setUserData] = useState();

  async function handleGoogleSignIn() {
    try {
      const CLIENT_ID = "708804848384-mv2i34klq1hp7qlard4bttjfgvnpna50.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@andrebertelli/login-app";
      const SCOPE = encodeURI("profile email");
      const RESPONSE_TYPE = "token";

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;

      if (type === "success") {
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?auth=json&access_token=${params.access_token}`)
        const user = await response.json();

        navigate('dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View className="flex-row justify-around mt-5">
      <TouchableOpacity
        className="border p-4 border-[#CDCED1] rounded-md"
      >
        <Facebook />
      </TouchableOpacity>
      <TouchableOpacity
        className="border p-4 border-[#CDCED1] rounded-md"
        onPress={handleGoogleSignIn}
      >
        <Google />
      </TouchableOpacity>
      <TouchableOpacity
        className="border p-4 border-[#CDCED1] rounded-md"
      >
        <Linkedin />
      </TouchableOpacity>
    </View>
  )
}