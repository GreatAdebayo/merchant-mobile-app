import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  RefreshControl,
} from "react-native";
import tw from "twrnc";
import { useState, useCallback, useContext } from "react";
import { Entypo } from "@expo/vector-icons";
import moment from "moment";

//component
import Navigator from "../components/Navigator";

//Context
import authContext from "../context/auth/context";

const NotificationScreen = () => {
  const { user, persitLogin, isRefreshing } = useContext(authContext);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    persitLogin();
    setRefreshing(isRefreshing);
  }, [refreshing]);
  return (
    <SafeAreaView style={tw`mt-15 w-full h-full`}>
      <Navigator />
      <View style={tw`p-3 flex-5`}>
        <Text style={tw`font-medium text-gray-400 text-xl`}>Notifications</Text>
        <FlatList
          data={user.notification}
          renderItem={({ item }) => (
            <View
              style={tw`mt-2 flex mx-auto w-full  bg-white  rounded-lg shadow py-2`}
            >
              <View style={tw`flex-row  p-4 justify-between`}>
                <Text>
                  {" "}
                  <Entypo
                    name="bell"
                    size={18}
                    style={tw`text-indigo-700 mr-2 text-xl`}
                  />
                  &nbsp;
                  {item.body}
                </Text>

                <Text>
                  {moment(item.createdAt).startOf("minute").fromNow()}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item._id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
