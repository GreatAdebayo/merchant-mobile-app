import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import tw from "twrnc";
import { Feather } from "@expo/vector-icons";

//Components
import Navigator from "../components/Navigator";

const data = [
  {
    id: 1,
    title: "Bag",
    price: "$25.00",
    image: "https://via.placeholder.com/400x200/FFB6C1/000000",
  },
  {
    id: 2,
    title: "Car",
    price: "$10.13",
    image: "https://via.placeholder.com/400x200/FA8072/000000",
  },
  {
    id: 3,
    title: "Shoe",
    price: "$12.12",
    image: "https://via.placeholder.com/400x200/87CEEB/000000",
  },
  {
    id: 4,
    title: "Product 4",
    price: "$ 11.00 USD",
    image: "https://via.placeholder.com/400x200/4682B4/000000",
  },
  {
    id: 5,
    title: "Product 5",
    price: "$ 20.00 USD",
    image: "https://via.placeholder.com/400x200/008080/000000",
  },
  {
    id: 6,
    title: "Product 6",
    price: "$ 33.00 USD",
    image: "https://via.placeholder.com/400x200/40E0D0/000000",
  },
  {
    id: 7,
    title: "Product 7",
    price: "$ 20.95 USD",
    image: "https://via.placeholder.com/400x200/EE82EE/000000",
  },
  {
    id: 8,
    title: "Product 8",
    price: "$ 13.60 USD",
    image: "https://via.placeholder.com/400x200/48D1CC/000000",
  },
  {
    id: 9,
    title: "Product 9",
    price: "$ 15.30 USD",
    image: "https://via.placeholder.com/400x200/191970/000000",
  },
  {
    id: 9,
    title: "Product 10",
    price: "$ 21.30 USD",
    image: "https://via.placeholder.com/400x200/7B68EE/000000",
  },
];

const OrderDetailsScreen = ({ route }) => {
  return (
    <SafeAreaView style={[tw`mt-15 w-full h-full`]}>
      {/* Navigator  */}
      <Navigator />
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <Text style={tw`text-gray-400 text-xl pl-2`}>Products Purchased</Text>
          <ScrollView horizontal={true}>
            {data.map((item, id) => (
              <View style={[tw`rounded-lg shadow`, styles.card]} key={id}>
                <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>
                <Image style={styles.cardImage} source={{ uri: item.image }} />
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <Text>Qty: 2</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>

          <View
            style={tw`mt-2 flex mx-auto w-full  bg-white  rounded-lg shadow py-2`}
          >
            <View style={styles.cardHeader}>
              <Text style={tw`text-indigo-700 text-base`}>
                <Feather name="info" size={18} style={tw` mr-2 text-xl`} />
                &nbsp;Order No
              </Text>
            </View>
            <View style={styles.cardContent}>{/* <Text>Paid</Text> */}</View>
          </View>

          <View
            style={tw`mt-2 flex mx-auto w-full  bg-white  rounded-lg shadow py-2`}
          >
            <View style={styles.cardHeader}>
              <Text style={tw`text-indigo-700 text-base`}>
                <Feather name="info" size={18} style={tw`mr-2 text-xl`} />
                &nbsp;Status
              </Text>
            </View>
            <View style={styles.cardContent}>{/* <Text>Paid</Text> */}</View>
          </View>

          <View
            style={tw`mt-2 flex mx-auto w-full  bg-white  rounded-lg shadow py-2`}
          >
            <View style={styles.cardHeader}>
              <Text style={tw`text-indigo-700 text-base`}>
                <Feather name="info" size={18} style={tw` mr-2 text-xl`} />
                &nbsp;Payment Details
              </Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.description}>
                {/* {this.state.product.description} */}
              </Text>
            </View>
          </View>

          <View
            style={tw`mt-2 flex mx-auto w-full  bg-white  rounded-lg shadow py-2`}
          >
            <View style={styles.cardHeader}>
              <Text style={tw`text-indigo-700 text-base`}>
                <Feather name="info" size={18} style={tw` mr-2 text-xl`} />
                &nbsp;Customer Details
              </Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.description}>
                {/* {this.state.product.description} */}
              </Text>
            </View>
          </View>

          <View
            style={tw`mt-5 mb-10 flex mx-auto w-full  bg-white  rounded-lg shadow py-2`}
          >
            <View style={styles.cardContent}>
              <TouchableOpacity
                style={tw`bg-indigo-700  w-full h-12  rounded-lg  shadow-lg my-2`}
                onPress={() => {
                  // navigation.navigate("orders");
                }}
              >
                <Text
                  style={tw`text-white font-medium font-semibold text-center text-base pt-3`}
                >
                  Mark as Delivered
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 5,
    padding: 5,
  },

  /******** card **************/
  card: {
    marginVertical: 8,
    backgroundColor: "white",
    // flexBasis: "47%",
    marginHorizontal: 5,
    width: "15%",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
  },
  price: {
    fontSize: 16,
    color: "green",
    marginTop: 5,
  },
});
