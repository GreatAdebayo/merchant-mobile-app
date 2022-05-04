import { Text, View, Image, SafeAreaView } from "react-native";
import { useEffect } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const IndexScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("signin");
    }, 3000);
  }, []);
  return (
    <View style={tw`flex-1`}>
      <SafeAreaView
        style={[
          tw`w-full h-full`,
          {
            backgroundColor: "#F1C989",
          },
        ]}
      >
        <Image
          source={require("../assets/logo.png")}
          style={tw`h-15 w-15 mx-auto mt-15`}
        />
        <Text
          style={[
            tw`text-3xl text-center font-semibold my-5`,
            {
              color: "#9E580B",
            },
          ]}
        >
          Welcome to Merchantplace
        </Text>
        <Text
          style={[
            tw`text-xl text-center my-5`,
            {
              color: "#9E580B",
            },
          ]}
        >
          The platform commerce is built on
        </Text>
        <Image
          source={require("../assets/3-dark.png")}
          style={tw`h-85 w-85 mx-auto my-10`}
        />
      </SafeAreaView>
    </View>
  );
};

export default IndexScreen;
