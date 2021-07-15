import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
} from "react-native";
import InputTask from "../../components/InputTask.js";
import Tasks from "../../components/Tasks.js";

export default function HomePage({
  navigation,
  completedTaskItems,
  setCompletedTaskItems,
  setTaskList,
  taskList,
}) {
  const [task, setTask] = useState();
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
          let deletedItems = itemsCopy.splice(index, 1);
          const completed = [...completedTaskItems, ...deletedItems];
          setCompletedTaskItems(completed);
          setTaskList(itemsCopy);
          navigation.navigate("Complete", { init: completed });
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <View style={styles.homeContainer}>
      <ScrollView style={styles.contents}>
        {taskList.length == 0 ? (
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
          >
            <View style={styles.emptyTask}>
              <Text style={styles.emptyTitle}>You don't have any Task !!</Text>
              <Text style={styles.emptyTitle}>Click + to add new Task</Text>
            </View>
          </KeyboardAvoidingView>
        ) : (
          <View style={styles.contentsBox}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  contents: {
    marginTop: 10,
    marginBottom: 20,
  },
  contentsBox: {
    width: 415,
  },
  emptyTask: {
    height: "100%",
    width: 415,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyTitle: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    opacity: 0.5,
  },
});
