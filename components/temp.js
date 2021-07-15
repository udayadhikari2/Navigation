import React from "react";
import { View, Text } from "react-native";
export default function CompletedTask() {
  return (
      <View>
          <Button
          title="Completed Task"

          >
          </Button>
      </View>
  );
}
// const navigationView = () => (
  //   <View style={styles.Nav}>
  //     <View style={styles.navigationView}>
  //       <Text style={styles.navTitle}>Today's tasks</Text>
  //       <Text
  //         style={styles.close}
  //         onPress={() => drawer.current.closeDrawer()}
  //       ></Text>
  //     </View>
  //     <View style={styles.menuItemsContainer}>
  //       {menuList.map((menuItems, index) => {
  //         return (
  //           <TouchableOpacity key={index}>
  //             <View style={styles.menuItemsBox}>
  //               <Text style={styles.menuList}>{menuItems.title}</Text>
  //             </View>
  //           </TouchableOpacity>
  //         );
  //       })}
  //     </View>
  //   </View>
  // );
  // const menuList = [
  //   {
  //     title: "Home",
  //   },
  //   {
  //     title: "Completed Task",
  //   },
  //   {
  //     title: "Feedback",
  //   },
  //   {
  //     title: "About Us",
  //   },
  //   {
  //     title: "Setting",
  //   },
  //   {
  //     title: "Quit",
  //   },
  // ];

   // <DrawerLayoutAndroid
    //   ref={drawer}
    //   drawerWidth={300}
    //   renderNavigationView={navigationView}
    //   drawerBackgroundColor="rgba(43, 43, 43,0.95)"
    // >
    // </DrawerLayoutAndroid>
    // const keyboardDissmiss = () => {
    //   Keyboard.dismiss();
    //   drawer.current.openDrawer();
    // };

    import "react-native-gesture-handler";
import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  BackHandler,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tasks from "./components/Tasks.js";
import InputTask from "./components/InputTask.js";

const Stack = createStackNavigator();

export default function App() {
  
  const HomeScreen = () => {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="silver"></StatusBar>
        <View style={styles.title}>
          <Text style={styles.todo}>Today's tasks</Text>
          <Text style={styles.menu} onPress={() => drawer.current.openDrawer()}>
            =
          </Text>
        </View>
        <ScrollView style={styles.contents}>
          {taskList.length == 0 ? (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : null}
            >
              <View style={styles.emptyTask}>
                <Text style={styles.emptyTitle}>
                  You don't have any Task !!
                </Text>
              </View>
            </KeyboardAvoidingView>
          ) : (
            <View>
              {taskList.map((items, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => completeTask(index)}
                  >
                    <Tasks text={items} />
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </ScrollView>
        <InputTask
          taskList={taskList}
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
        ></InputTask>
      </SafeAreaView>
    );
  };
  const drawer = useRef(null);
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState();
  const backAction = () => {
    Alert.alert("Quit App!!", "Are you sure you want to Quit?", [
      { text: "cancel", onPress: () => null },
      { text: "Quit", onPress: () => BackHandler.exitApp() },
    ]);
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  }, []);

  const completeTask = (index) => {
    let itemsCopy = [...taskList];
    Alert.alert("Did Your Task !!", "Did You Completed Your Task?", [
      {
        text: "No",
        onPress: () => console.log("No Pressed"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          itemsCopy.splice(index, 1);
          setTaskList(itemsCopy);
        },
      },
    ]);
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="hello">
          {(props) => <HomeScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e3e3",
  },
  contents: {
    marginBottom: 100,
    backgroundColor: "#e6e3e3",
  },
  navigationView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  navTitle: {
    marginHorizontal: 20,
    marginVertical: 30,
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  close: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "red",
    padding: 5,
    marginLeft: 80,
    borderRadius: 50,
    textAlign: "center",
    fontWeight: "bold",
  },
  menuItemsContainer: {
    position: "relative",
    top: 80,
  },
  menuItemsBox: {
    flexDirection: "column",
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    padding: 5,
    borderRadius: 5,
    borderColor: "white",
  },
  menuList: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  menu: {
    fontSize: 40,
    padding: 0,
    margin: 0,
    color: "red",
    justifyContent: "center",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "silver",
  },
  emptyTask: {
    height: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    opacity: 0.5,
  },
  todo: {
    padding: 0,
    marginTop: 0,
    fontSize: 24,
    fontWeight: "bold",
  },
});
