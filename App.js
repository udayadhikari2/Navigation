import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { BackHandler } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CompleteStack from "./pages/Navigation/Complete.js";
import HomeStack from "./pages/Navigation/HomePage.js";

const Drawer = createDrawerNavigator();
export default function App() {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  }, []);
  const backAction = () => {
    Alert.alert("Quit App!!", "Are you sure you want to Quit?", [
      { text: "cancel", onPress: () => null },
      { text: "Quit", onPress: () => BackHandler.exitApp() },
    ]);
  };
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#26786a"></StatusBar>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStack}></Drawer.Screen>
        <Drawer.Screen
          name="Complete"
          component={CompleteStack}
        ></Drawer.Screen>
        <Drawer.Screen
          name="About"
          component={CompleteStack}
        ></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
