import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import MarcosScreen from "../screens/MarcosScreen";
import FormacaoScreen from "../screens/FormacaoScreen";
import ObjetivoScreen from "../screens/ObjetivoScreen";
import ContatoScreen from "../screens/ContatoScreen";

import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Marcos"
        component={MarcosNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="male" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Formacao"
        component={FormacaoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="graduation-cap" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Objetivo"
        component={ObjetivoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="eye" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Contato"
        component={ContatoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="phone-square" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const MarcosStack = createStackNavigator<TabTwoParamList>();

function MarcosNavigator() {
  return (
    <MarcosStack.Navigator>
      <MarcosStack.Screen
        name="MarcosScreen"
        component={MarcosScreen}
        options={{ headerTitle: "Marcos" }}
      />
    </MarcosStack.Navigator>
  );
}

const FormacaoStack = createStackNavigator<TabTwoParamList>();

function FormacaoNavigator() {
  return (
    <FormacaoStack.Navigator>
      <FormacaoStack.Screen
        name="FormacaoScreen"
        component={FormacaoScreen}
        options={{ headerTitle: "Formacao" }}
      />
    </FormacaoStack.Navigator>
  );
}

const ObjetivoStack = createStackNavigator<TabTwoParamList>();

function ObjetivoNavigator() {
  return (
    <ObjetivoStack.Navigator>
      <ObjetivoStack.Screen
        name="ObjetivoScreen"
        component={ObjetivoScreen}
        options={{ headerTitle: "Objetivo" }}
      />
    </ObjetivoStack.Navigator>
  );
}

const ContatoStack = createStackNavigator<TabTwoParamList>();
function ContatoNavigator() {
  return (
    <ContatoStack.Navigator>
      <ContatoStack.Screen
        name="ContatoScreen"
        component={ContatoScreen}
        options={{ headerTitle: "Contato" }}
      />
    </ContatoStack.Navigator>
  );
}
