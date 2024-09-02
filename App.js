import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather";
import HomeScreen from "./screens/HomeScreen";

function TransactionScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Transaction</Text>
    </View>
  );
}
function AddScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Add</Text>
    </View>
  );
}
function BudgetScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Budget</Text>
    </View>
  );
}
function ReportScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Report</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            let classNameIcon = "";

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Transaction") {
              iconName = "server";
            } else if (route.name === "Add") {
              iconName = "plus";
              classNameIcon =
                "bg-emerald-400 text-3xl text-white rounded-full pt-0 items-start flex justify-center";
              size = 50;
            } else if (route.name === "Budget") {
              iconName = "pocket";
            } else if (route.name === "Report") {
              iconName = "file";
            }

            return (
              <Feather
                className={classNameIcon}
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          headerShown: false,
          tabBarActiveTintColor: "#32D07B",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { paddingTop: 3, backgroundColor: "white" },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Transaction" component={TransactionScreen} />
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Budget" component={BudgetScreen} />
        <Tab.Screen name="Report" component={ReportScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
