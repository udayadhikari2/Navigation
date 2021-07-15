import "react-native-gesture-handler";
import React from "react";
import CompletedTaskList from "../Contents/CompletedTaskList";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";
const CompleteTaskStack = createStackNavigator();

export default function CompleteStack({ navigation, route }) {
  const { init } = route.params;
  const TaskCompletedComponents = () => {
    return <CompletedTaskList items={init} />;
  };
  return (
    <CompleteTaskStack.Navigator>
      <CompleteTaskStack.Screen
        name="Complete"
        component={TaskCompletedComponents}
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
          headerTitle: "Completed Task",
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
      ></CompleteTaskStack.Screen>
    </CompleteTaskStack.Navigator>
  );
}
