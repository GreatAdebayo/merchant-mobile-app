import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  TextInput,
  RefreshControl,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState, useCallback } from "react";
import tw from "twrnc";

//Components
import Navigator from "../components/Navigator";

const OrderScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const orders = [
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
      {/* Navigator */}
      <Navigator />
      <View style={styles.container}>
        <Text
          style={tw`text-sm font-semibold text-base mt-4 text-gray-500 ml-2`}
        >
          Search for an Order
        </Text>
        <TextInput
          onChangeText={(e) => {
            setSearchUpdated(e);
          }}
          style={tw`w-full h-14 px-3 py-2 my-2 rounded-lg border-0 shadow-sm focus:outline-none focus:border-indigo-700 bg-slate-200 text-base`}
          placeholder="Type an Order ID here"
        />
        <TouchableOpacity
          style={tw`bg-indigo-700  w-full h-12  rounded-lg  shadow-lg my-2 mb-12`}
          onPress={() => {
            navigation.navigate("orders");
          }}
        >
          <Text
            style={tw`text-white font-medium font-semibold text-center text-base pt-3`}
          >
            Search Order
          </Text>
        </TouchableOpacity>
      </View>
      {/* Orders */}
      <View style={tw`p-3 flex-4 mt-10`}>
        <Text style={tw`font-medium text-gray-400 text-xl`}>All Orders</Text>
        <FlatList
          data={orders}
          renderItem={({ item }) => (
            <View
              style={tw`mt-2 flex mx-auto w-full  bg-white dark:bg-gray-800 rounded-lg shadow py-2`}
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
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginHorizontal: 10,
  },
});
