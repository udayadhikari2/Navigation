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
import ModalViewBox from "../../components/UpdateModal.js";
import { Icon } from "react-native-elements";

export default function HomePage({
  navigation,
  completedTaskItems,
  setCompletedTaskItems,
  setTaskList,
  taskList,
}) {
  const [task, setTask] = useState();
  const [indexValue, setIndex] = useState();
  const [changedItem, setChangeItem] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const completeTask = (index, item) => {
    let itemsCopy = [...taskList];

    Alert.alert("Did Your Task !!", "Did You Completed Your Task?", [
      {
        text: "Edit",
        style: "cancel",
        onPress: () => {
          setModalVisible(true);
          setChangeItem(item);
          setIndex(index);
        },
      },
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
      <ModalViewBox
        changedItem={changedItem}
        setChangeItem={setChangeItem}
        indexValue={indexValue}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setTaskList={setTaskList}
        taskList={taskList}
      />
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
                  onPress={() => completeTask(index, items)}
                >
                  <Tasks text={items} />
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </ScrollView>
      {modalVisible == false ? (
        <InputTask
          taskList={taskList}
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
        ></InputTask>
      ) : null}
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
  modelContainer: {},
  modalView: {
    marginVertical: 70,
    marginHorizontal: 20,
    height: "80%",
    backgroundColor: "#88a8a6",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  Icons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
    fontSize: 20,
    padding: 5,
  },
  centeredView: {
    width: "100%",
    height: "80%",
    justifyContent: "center",
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderColor: "white",
    borderRadius: 20,
    width: "100%",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    backgroundColor: "#26786a",
  },
  deleteAndDone: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    // position: "relative",
    bottom: -10,
    padding: 10,
  },
});
