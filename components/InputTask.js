import React, { useState } from "react";
import { Platform } from "react-native";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TextInput,
  Alert,
} from "react-native";

function InputTask({ taskList, setTaskList, task, setTask }) {
  const addTaskHandle = (text) => {
    setTask(text);
  };
  const submitTask = () => {
    if (task == null) {
      Alert.alert("Empty Field Alert", "Please Enter Your Task !!");
    } else {
      Keyboard.dismiss();
      setTaskList((taskList) => [...taskList, task]);
      setTask(null);
    }
  };
  return (
    <View>
      <View style={styles.hr} />
      <View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={styles.keyboardLayout}
        >
          <TextInput
            style={styles.input}
            placeholder={"Your Today's Tasks"}
            onChangeText={addTaskHandle}
            value={task}
          ></TextInput>
          {!task ? (
            <>{null}</>
          ) : (
            <>
              <TouchableOpacity onPress={submitTask}>
                <View style={styles.addButton}>
                  <Text style={styles.addTasks}>+</Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#26786a",
  },
  keyboardLayout: {
    position: "absolute",
    width: "100%",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    // backgroundColor:"#26786a",
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#26786a",
    borderRadius: 20,
    width: "70%",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    backgroundColor: "#26786a",
    marginRight:15,
  },
  addButton: {
    backgroundColor: "#2b8ac2",
    width: 50,
    height: 50,
    borderRadius: 60,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#26786a",
  },
  addTasks: {
    fontSize: 30,
  },
  hr: {
    position: "relative",
    borderBottomColor: "#26786a",
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    // borderLeftWidth: 2,
    borderRadius: 30,
    marginHorizontal: 10,
    height: 100,
    // backgroundColor:"red",
    bottom: 10,
    paddingVertical: 5,
  },
});
export default InputTask;
