import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import ReadStoryScreen from "ReadStoryScreen";
import WriteStoryScreen from "WriteStoryScreen";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    WriteStory: { screen: WriteStoryScreen },
    ReadStory: { screen: ReadStoryScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({}) => {
        const routeName = navigation.state.routeName;
        if (routeName === "ReadStory") {
          return (
            <Image
              style={{ width: 40, height: 40 }}
              source={require("read.png")}
            />
          );
        } else if (routeName === "WriteStory") {
          return (
            <Image
              style={{ width: 40, height: 40 }}
              source={require("write.png")}
            />
          );
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(TabNavigator);
