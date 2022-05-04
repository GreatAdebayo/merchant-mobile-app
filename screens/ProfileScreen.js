import { StyleSheet, Text, SafeAreaView } from "react-native";
import tw from "twrnc";
import { WebView } from "react-native-webview";

//component
import Navigator from "../components/Navigator";

const ProfileScreen = () => {
  return (
    <WebView
      source={{
        uri: "https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.me%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.login%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&response_type=code&client_id=184622533651-mv8vumjcrijh2j3mblc2fehmg63978vq.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fapi%2Fgooglesignin",
      }}
      userAgent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"
      originWhitelist={["https://*", "http://*"]}
    />
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
