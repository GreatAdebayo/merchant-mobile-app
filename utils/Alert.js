import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from "twrnc";
import { Feather } from "@expo/vector-icons";
import { useContext } from "react";

//Context
import alertContext from "../context/alert/context";

const Alert = () => {
  const { alerts } = useContext(alertContext);
  return (
    <>
      {alerts.length > 0 &&
        alerts.map((alert, index) => (
          <SafeAreaView style={styles.alertposition} key={index}>
            <View
              style={
                alert.type === "danger"
                  ? tw`bg-rose-700 shadow-md  px-2 py-3 rounded flex-row`
                  : tw`bg-green-700 shadow-md  px-2 py-3 rounded flex-row`
              }
            >
              <Feather
                name="info"
                size={20}
                style={
                  alert.type === "danger"
                    ? tw`mt-1 text-rose-300`
                    : tw`mt-1 text-green-300`
                }
              />
              <Text style={tw`text-white text-lg ml-1`}>{alert.msg}</Text>
            </View>
          </SafeAreaView>
        ))}
    </>
  );
};

export default Alert;

const styles = StyleSheet.create({
  alertposition: {
    top: 0,
    right: 0,
    margin: 10,
    zIndex: 999999,
    padding: 5,
  },
});
