import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const Navigator = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`flex-row items-center justify-between relative px-5`}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo name="back" size={25} style={tw`text-indigo-700`} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("overview");
        }}
      >
        <Feather name="home" size={25} style={tw`text-indigo-700`} />
      </TouchableOpacity>
    </View>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
