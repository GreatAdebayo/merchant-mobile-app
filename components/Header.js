import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";

//Context
import authContext from "../context/auth/context";

const Header = () => {
  const navigation = useNavigation();
  const { user, signOut } = useContext(authContext);
  return (
    <View style={tw`flex-row items-center justify-between relative px-5`}>
      <Text style={tw`font-medium`}>
        <Text style={tw`text-gray-400 text-xl`}>Welcome,</Text>&nbsp;{" "}
        <Text style={tw`text-indigo-700 text-xl mt-1`}>
          {user && user.lastname}
        </Text>
      </Text>
      <TouchableOpacity
        onPress={() => {
          signOut();
        }}
      >
        <FontAwesome name="power-off" size={20} style={tw`text-red-700`} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("notification");
        }}
      >
        <FontAwesome name="bell" size={20} style={tw`text-indigo-700`} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
