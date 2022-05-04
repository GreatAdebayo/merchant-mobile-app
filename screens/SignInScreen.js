import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";

//Utils
import Alert from "../utils/Alert";

//Contexts
import authContext from "../context/auth/context";
import alertContext from "../context/alert/context";

//Validation Schema
const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

const SignInScreen = () => {
  const navigation = useNavigation();
  const { signIn, googleSignIn, signinError } = useContext(authContext);

  const { setAlert, alerts } = useContext(alertContext);

  useEffect(() => {
    if (signinError) {
      setAlert(signinError, "danger");
    }
  }, [signinError]);

  return (
    <SafeAreaView style={tw`p-4 flex-1`}>
      <Alert />
      <Text style={tw`text-2xl mb-2 text-center font-semibold mt-25`}>
        Sign In to Merchantplace
      </Text>
      <Text style={tw`text-center font-medium`}>
        <Text style={tw`text-gray-400 text-xl`}>New Here?</Text>&nbsp;{" "}
        <Text style={tw`text-indigo-700 text-xl`}>Create an Account</Text>
      </Text>
      <View style={tw`w-full mt-8 mx-auto`}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => signIn(values)}
          validationSchema={loginValidationSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={tw`p-4`}>
              <View>
                <Text style={tw`text-sm font-semibold text-base`}>
                  Email Address
                </Text>
                <TextInput
                  style={tw`w-full h-16 px-3 py-2 my-2 rounded-lg border-0 shadow-sm focus:outline-none focus:border-indigo-700 bg-slate-200 text-base`}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email && touched.email && (
                  <Text style={{ fontSize: 13, color: "red" }}>
                    {errors.email}
                  </Text>
                )}
              </View>
              <View style={tw`pt-4`}>
                <Text style={tw`text-sm font-semibold text-base`}>
                  Password
                </Text>
                <TextInput
                  style={tw`w-full h-16 px-3 py-2 my-2 rounded-lg border-0 shadow-sm focus:outline-none focus:border-indigo-700 bg-slate-200 text-base`}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && touched.password && (
                  <Text style={{ fontSize: 13, color: "red" }}>
                    {errors.password}
                  </Text>
                )}
              </View>
              <TouchableOpacity
                style={tw`bg-indigo-700  w-full  h-16  rounded-lg  shadow-lg my-8 p-4`}
                onPress={handleSubmit}
              >
                <Text
                  style={tw`text-white font-medium font-bold text-center text-xl`}
                >
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        <View style={tw`p-4`}>
          <Text
            style={tw`text-center my-2 font-semibold text-gray-400 text-xl`}
          >
            OR
          </Text>
          <TouchableOpacity
            style={tw`bg-slate-200 flex  h-16 rounded-lg p-3.5 w-full font-medium justify-center my-3 text-gray-400 text-sm  p-4`}
            onPress={() => {
              // googleSignIn();
              navigation.navigate("profile");
            }}
          >
            <Text style={tw`font-medium text-center text-base text-gray-700`}>
              Sign In with Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
