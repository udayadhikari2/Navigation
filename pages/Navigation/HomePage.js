import "react-native-gesture-handler";
import React, { useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";
import HomePage from "../Contents/HomePage";


const HomePageStack = createStackNavigator();

export default function HomeStack({ navigation }) {
  const [completedTaskItems, setCompletedTaskItems] = useState([]);
  const [taskList, setTaskList] = useState([]);

  const HomeParams = () => {
    return (
      <HomePage
        completedTaskItems={completedTaskItems}
        setCompletedTaskItems={setCompletedTaskItems}
        navigation={navigation}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    );
  };
  return (
    <HomePageStack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: "#fff" } }}
    >
      <HomePageStack.Screen
        name="HomeTask"
        component={HomeParams}
        options={{
          headerTitle: "Today's Task",
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerRightContainerStyle: {
            marginRight: 20,
          },
          headerLeft: (props) => (
            <Icon
              name="menu"
              color="white"
              fontWeight="bold"
              type="ionicon"
              {...props}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <Icon
              name="checkbox"
              color="white"
              fontWeight="bold"
              type="ionicon"
              onPress={() =>
                navigation.navigate("Complete", { init: completedTaskItems })
              }
            />
          ),
          headerStyle: {
            backgroundColor: "#26786a",
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            padding: 10,
            borderRadius: 50,
            alignSelf: "center",
          },
        }}
      ></HomePageStack.Screen>
    </HomePageStack.Navigator>
  );
}
