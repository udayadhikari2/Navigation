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
  Modal,
  TextInput,
  Keyboard,
} from "react-native";
import { Icon } from "react-native-elements";

export default function UpdateModal({
  changedItem,
  setChangeItem,
  indexValue,
  modalVisible,
  setModalVisible,setTaskList,taskList
}) {
  const updateInput = () => {
    taskList.splice(indexValue, 1, changedItem);
    setTaskList(taskList);
    setModalVisible(false);
  };
  const changeValue = (text) => {
    setChangeItem(text);
  };
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalView}>
        <View style={styles.Icons}>
          <Icon name="ellipsis-vertical" type="ionicon" color="white"></Icon>
          <Icon
            name="close-circle"
            type="ionicon"
            color="white"
            onPress={() => {
              setModalVisible(false);
            }}
          ></Icon>
        </View>
        <View style={styles.centeredView}>
          <KeyboardAvoidingView
            enabled={true}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboardLayout}
          >
            <TextInput
              style={styles.input}
              placeholder={"Update Your Task"}
              value={changedItem}
              editable={true}
              onChangeText={changeValue}
            ></TextInput>
          </KeyboardAvoidingView>
        </View>
        <View style={styles.deleteAndDone}>
          <Icon
            name="trash"
            type="ionicon"
            color="red"
            onPress={() => {
              Alert.alert(
                "Want to delete Task.",
                "Yes to delete , No to cancel",
                [
                  {
                    text: "No",
                    style: "cancel",
                  },
                  {
                    text: "Yes",
                    onPress: () => {
                      taskList.splice(indexValue, 1);
                      setModalVisible(false);
                    },
                    style: "Yes",
                  },
                ]
              );
            }}
          ></Icon>
          {!changedItem ? (
            <>{null}</>
          ) : (
            <>
              <Icon
                name="checkmark-done-circle"
                type="ionicon"
                color="green"
                onPress={updateInput}
              ></Icon>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modelContainer: {
    flex: 1,
  },
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
    bottom: -10,
    padding: 10,
  },
});
