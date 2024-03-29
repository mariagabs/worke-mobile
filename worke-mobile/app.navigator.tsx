import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/components/pages/Login";
import Home from "./src/components/pages/Home";
import Menu from "./src/components/pages/Menu";
import SignUp from "./src/components/pages/SignUp";
import SignUpStep1 from "./src/components/organisms/SignUpStep1";
import SignUpStep2 from "./src/components/organisms/SignUpStep2";
import SignUpStep3 from "./src/components/organisms/SignUpStep3";
import SignUpStep4 from "./src/components/organisms/SignUpStep4";
import SignUpStep5 from "./src/components/organisms/SignUpStep5";
import SignUpStep6 from "./src/components/organisms/SignUpStep6";
import SignUpStep7 from "./src/components/organisms/SignUpStep7";
import SignUpStep8 from "./src/components/organisms/SignUpStep8";
import SignUpStep9 from "./src/components/organisms/SignUpStep9";
import SignUpStep10 from "./src/components/organisms/SignUpStep10";
import SignUpStep11 from "./src/components/organisms/SignUpStep11";
import CreateGroup from "./src/components/pages/CreateGroup";
import Group from "./src/components/pages/Group";
import MyExercises from "./src/components/pages/MyExercises";
import Exercise from "./src/components/pages/Exercise";
import Workouts from "./src/components/pages/Workouts";
import WorkoutExercises from "./src/components/pages/WorkoutExercises";
import Settings from "./src/components/pages/Settings";
import Terms from "./src/components/pages/Terms";

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "white" },
        gestureEnabled: false,
      }}
      initialRouteName="Initial"
    >
      <Screen name="Initial" component={Login}></Screen>
      <Screen name="Login" component={Login}></Screen>
      <Screen name="Group" component={Group}></Screen>
      <Screen name="SignUp" component={SignUp}></Screen>
      <Screen name="Home" component={Home}></Screen>
      <Screen name="Menu" component={Menu}></Screen>
      <Screen name="SignUpStep1" component={SignUpStep1}></Screen>
      <Screen name="SignUpStep2" component={SignUpStep2}></Screen>
      <Screen name="SignUpStep3" component={SignUpStep3}></Screen>
      <Screen name="SignUpStep4" component={SignUpStep4}></Screen>
      <Screen name="SignUpStep5" component={SignUpStep5}></Screen>
      <Screen name="SignUpStep6" component={SignUpStep6}></Screen>
      <Screen name="SignUpStep7" component={SignUpStep7}></Screen>
      <Screen name="SignUpStep8" component={SignUpStep8}></Screen>
      <Screen name="SignUpStep9" component={SignUpStep9}></Screen>
      <Screen name="CreateGroup" component={CreateGroup}></Screen>
      <Screen name="MyExercises" component={MyExercises}></Screen>
      <Screen name="Exercise" component={Exercise}></Screen>
      <Screen name="Workouts" component={Workouts}></Screen>
      <Screen name="WorkoutExercises" component={WorkoutExercises}></Screen>
      <Screen name="Settings" component={Settings}></Screen>
      <Screen name="Terms" component={Terms}></Screen>
    </Navigator>
  </NavigationContainer>
);

export default AppNavigator;
