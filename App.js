import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  FlatList,
} from "react-native";

const categories = [
  { id: "1", title: "Exercise", tasks: "10 Tasks", image: require("./assets/exercise.jpeg") },
  { id: "2", title: "Study", tasks: "13 Tasks", image: require("./assets/study.jpg") },
  { id: "3", title: "Code", tasks: "9 Tasks", image: require("./assets/coding.jpeg") },
  { id: "4", title: "Cook", tasks: "18 Tasks", image: require("./assets/Cooking.jpeg") },
  { id: "5", title: "Read", tasks: "21 Tasks", image: require("./assets/reading.jpeg") },
  { id: "6", title: "Write", tasks: "17 Tasks", image: require("./assets/Writing.jpeg") },
  { id: "7", title: "Meditate", tasks: "2 Tasks", image: require("./assets/meditating.jpeg") },
  { id: "8", title: "Draw", tasks: "9 Tasks", image: require("./assets/drawing.jpeg") },
  { id: "9", title: "Gardening", tasks: "16 Tasks", image: require("./assets/Gardening.jpeg") },
  { id: "10", title: "Yoga", tasks: "14 Tasks", image: require("./assets/yoga.jpeg") },
];

const ongoingTasks = [
  { id: "1", title: "Mobile App Development" },
  { id: "2", title: "Web Development" },
  { id: "3", title: "Push Ups" },
  { id: "4", title: "React Native Project" },
  { id: "5", title: "Cooking Dinner" },
  { id: "6", title: "Reading a Book" },
  { id: "7", title: "Writing a Blog Post" },
  { id: "8", title: "Meditation Session" },
  { id: "9", title: "Sketching" },
  { id: "10", title: "Yoga Routine" },
];

export default function Task() {
  return (
    <ScrollView style={styles.Task}>
      <View style={styles.Group734}>
        <View style={styles.Frame1}>
          <View style={styles.Group1}>
            <Text style={styles.HelloDevs}>Hello, Devs</Text>
            <Text style={styles._14TasksToday}>14 tasks today</Text>
          </View>
          <Image
            style={styles.ProfileImage}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/xx4hwqqplk-1%3A13?alt=media&token=af80a8ad-1f35-47e2-b60a-77e9f97ef281",
            }}
          />
        </View>
        <View style={styles.Search3}>
          <View style={styles.SearchBox}>
            <View style={styles.Group5}>
              <Image
                style={styles.MynauiSearch}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/xx4hwqqplk-1%3A40?alt=media&token=bdf907ad-cfb0-48e2-9b78-d710869a91e1",
                }}
              />
              <TextInput
                style={styles.SearchInput}
                placeholder="Search"
                placeholderTextColor="rgba(0,0,0,1)"
              />
            </View>
          </View>
          <Image
            style={styles.Filter}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/xx4hwqqplk-1%3A31?alt=media&token=e9c4aa03-4ed3-49b9-81ef-d2fb439be484",
            }}
          />
        </View>
        <Text style={styles.Categories}>Categories</Text>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <View style={styles.CategoriesCard}>
              <View style={styles.Group7}>
                <Text style={styles.Exercise}>{item.title}</Text>
                <Text style={styles._12Tasks}>{item.tasks}</Text>
              </View>
              <Image
                style={styles.CategoryImage}
                source={item.image}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.OngoingTask}>Ongoing Task</Text>
        <FlatList
          data={ongoingTasks}
          renderItem={({ item }) => (
            <View style={styles.OngoingTasksCards}>
              <Text style={styles.TaskTitle}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        <Button
          title="Add Task"
          onPress={() => {
            // Add task logic here
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Task: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(247,240,232,1)",
  },
  Group734: {
    flex: 1,
  },
  Frame1: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  Group1: {
    flex: 1,
  },
  HelloDevs: {
    fontSize: 32,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
  },
  _14TasksToday: {
    fontSize: 12,
    fontWeight: "500",
    color: "rgba(0,0,0,1)",
  },
  ProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  Search3: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  SearchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(251,249,247,1)",
    borderRadius: 14,
    padding: 10,
    backgroundColor: "rgba(251,249,247,1)",
  },
  Group5: {
    flexDirection: "row",
    alignItems: "center",
  },
  MynauiSearch: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  SearchInput: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    flex: 1,
  },
  Filter: {
    width: 50,
    height: 50,
  },
  Categories: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginBottom: 10,
  },
  CategoriesCard: {
    flex: 1,
    padding: 15,
    borderRadius: 15,
    backgroundColor: "rgba(251,249,247,1)",
    marginRight: 20, 
  },
  Group7: {
    marginBottom: 10,
  },
  Exercise: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
  },
  _12Tasks: {
    fontSize: 12,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
  },
  CategoryImage: {
    width: "100%",
    height: 150, 
    borderRadius: 10,
  },
  OngoingTask: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginBottom: 10,
  },
  OngoingTasksCards: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: "rgba(251,249,247,1)",
    marginBottom: 10,
  },
  TaskTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
  },
});
