import "react-native-gesture-handler";
import React from "react";
import AboutUs from "../Contents/AboutUs.js";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";
const AboutPageStack = createStackNavigator();
export default function AboutUsStack({ navigation }) {
  return (
    <AboutPageStack.Navigator>
      <AboutPageStack.Screen
        name="About Us"
        component={AboutUs}
        options={{
          headerStyle: {
            height: 120,
            backgroundColor: "#26786a",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            padding: 10,
            borderRadius: 50,
            alignSelf: "center",
          },
          headerTitle: "Know About Us !!",
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerRightContainerStyle: {
            marginRight: 20,
          },
          headerLeft: () => (
            <Icon
              name="arrow-back-circle"
              type="ionicon"
              color="white"
              onPress={() => navigation.goBack()}
            ></Icon>
          ),
          headerRight: () => (
            <Icon
              name="menu"
              type="ionicon"
              color="white"
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20, borderWidth: 2 }}
            ></Icon>
          ),
        }}
      ></AboutPageStack.Screen>
    </AboutPageStack.Navigator>
  );
}
