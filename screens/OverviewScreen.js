import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  RefreshControl,
} from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5, Feather, FontAwesome } from "@expo/vector-icons";
import { useState, useCallback, useContext } from "react";

//Components
import Header from "../components/Header";

//Context
import authContext from "../context/auth/context";

const OverViewScreen = () => {
  const { user } = useContext(authContext);
  const [refreshing, setRefreshing] = useState(false);
  const orders = [
    {
      id: 1,
      customer: "B",
      orderno: "dgdggdgddg",
      time: "2pm",
      amount: "300",
    },
    {
      id: 1,
      customer: "A",
      orderno: "7737373sss",
      time: "2pm",
      amount: "300",
    },
    {
      id: 2,
      customer: "A",
      orderno: "7737373sss",
      time: "2pm",
      amount: "300",
    },
    {
      customer: "A",
      orderno: "7737373sss",
      time: "2pm",
      amount: "300",
    },
    {
      customer: "A",
      orderno: "7737373sss",
      time: "2pm",
      amount: "300",
    },
    {
      customer: "A",
      orderno: "7737373sss",
      time: "2pm",
      amount: "300",
    },
    {
      customer: "A",
      orderno: "7737373sss",
      time: "2pm",
      amount: "300",
    },
    {
      customer: "A",
      orderno: "7737373sss",
      time: "2pm",
      amount: "300",
    },
  ];
  const navigation = useNavigation();

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    setRefreshing(false);
  }, [refreshing]);
  return (
    <SafeAreaView style={tw`mt-15 w-full h-full`}>
      {/* Header */}
      <Header />
      <ScrollView style={tw`p-3 flex-2 mt-2`} horizontal={true}>
        <View
          style={tw`bg-indigo-700 shadow-lg rounded-2xl w-36 p-2 dark:bg-gray-800 w-100 h-50`}
        >
          <Text style={tw`p-4 text-white text-xl font-semibold`}>
            Available Balance (Fiat)
          </Text>
          <View style={tw`p-5 flex-row justify-center items-center`}>
            <FontAwesome5
              name="money-bill-wave-alt"
              size={50}
              style={[
                tw`mr-2`,
                {
                  color: "#F1C989",
                },
              ]}
            />
            <Text style={tw`text-white text-4xl mt-2 font-semibold`}>
              ₦{user && user.fiat_balance}
            </Text>
          </View>
        </View>

        <View
          style={tw`bg-indigo-700 shadow-lg rounded-2xl w-36 p-2 dark:bg-gray-800 w-100 h-50 mx-5`}
        >
          <Text style={tw`p-5 text-white text-xl font-semibold`}>
            Available Balance (BTC)
          </Text>
          <View style={tw`p-5 flex-row justify-center items-center`}>
            <FontAwesome
              name="btc"
              size={50}
              style={[
                tw`mr-2`,
                {
                  color: "#F1C989",
                },
              ]}
            />
            <Text style={tw`text-white text-4xl mt-2 font-semibold`}>
              {user && user.btc_balance}
            </Text>
          </View>
        </View>
      </ScrollView>
      {/* Orders */}
      <View style={tw`p-3 flex-5`}>
        <Text style={tw`font-medium text-gray-400 text-xl`}>Your Orders</Text>
        <FlatList
          data={orders}
          renderItem={({ item }) => (
            <View
              style={tw`mt-2 flex mx-auto w-full  bg-white  rounded-lg shadow py-2`}
            >
              <TouchableOpacity
                style={tw`flex-row  p-4 justify-between`}
                onPress={() => {
                  navigation.navigate("orderdetails", { id: item.id });
                }}
              >
                <Text>
                  {" "}
                  <Feather
                    name="info"
                    size={18}
                    style={tw`text-indigo-700 mr-2 text-xl`}
                  />
                  &nbsp; Order No: {item.orderno}
                </Text>
                <Text>2mins ago</Text>
                <Text>View</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
        <TouchableOpacity
          style={tw`bg-indigo-700  w-full h-10  rounded-lg  shadow-lg mt-5 mb-18`}
          onPress={() => {
            navigation.navigate("orders");
          }}
        >
          <Text
            style={tw`text-white font-medium font-semibold text-center text-base pt-2`}
          >
            View All Orders
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OverViewScreen;

const styles = StyleSheet.create({});
