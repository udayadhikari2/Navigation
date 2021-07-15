import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Tasks(props) {

  return (
    <View style={styles.Tasks}>
      <View style={styles.todoList}>
        <TouchableOpacity style={styles.taskFileIcon}></TouchableOpacity>
        <Text style={styles.todoListTitle}>{props.text}</Text>
      </View>
      <TouchableOpacity style={styles.taskPointIcon}></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  Tasks: {
    flexDirection: "row",
    borderWidth:2,
    borderColor:"#26786a",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems:"center",
    justifyContent: "space-between",
    marginTop:15,
    marginHorizontal:20,
  },
  todoList: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",   
  },
  taskFileIcon: {
    width: 30,
    height: 30,
    backgroundColor: "#2b8ac2",
    opacity: 0.5,
    borderRadius: 8,
    marginLeft: 15,
  },
  todoListTitle: {
    marginLeft: 15,
    fontStyle: "italic",
    fontWeight:"bold",
    fontSize:16
  },
  taskPointIcon: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#2b8ac2",
    borderRadius: 15,
    marginRight: 15,
  },
});
