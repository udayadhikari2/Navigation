import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export const TaskComponents = ({ data }) => {
  return (
    <View>
      <View style={styles.CompletedTasks}>
        <View style={styles.CompletedtodoList}>
          <TouchableOpacity
            style={styles.CompletedtaskFileIcon}
          ></TouchableOpacity>
          <Text style={styles.CompletedtodoListTitle}>{data}</Text>
        </View>
        <TouchableOpacity
          style={styles.CompletedtaskPointIcon}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

export default function CompletedTaskList({ items }) {
  return (
    <View>
      <ScrollView style={styles.contents}>
        {items.length == 0 ? (
          <View style={styles.emptyTask}>
            <Text style={styles.emptyTitle}>
              You haven't completed your task
            </Text>
          </View>
        ) : (
          <>
            {items.map((valueItems, index) => {
              return <TaskComponents data={valueItems} key={index} />;
            })}
          </>
        )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  CompletedTasks: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#26786a",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    marginHorizontal: 20,
  },
  CompletedtodoList: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  CompletedtaskFileIcon: {
    width: 30,
    height: 30,
    backgroundColor: "#26786a",
    opacity: 0.5,
    borderRadius: 8,
    marginLeft: 15,
  },
  CompletedtodoListTitle: {
    marginLeft: 15,
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 16,
  },
  CompletedtaskPointIcon: {
    width: 20,
    height: 20,
    backgroundColor: "#26786a",
    borderRadius: 15,
    marginRight: 15,
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
  contents: {
    marginTop: 10,
    marginBottom: 20,
  },
});
