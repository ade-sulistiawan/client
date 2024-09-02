import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { BarChart } from "react-native-chart-kit";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons/faWallet";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons/faMoneyBill";

export default function HomeScreen() {
  const data = {
    labels: ["26", "27", "28", "29", "30"],
    datasets: [
      {
        data: [40, 50, 28, 70, 30],
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 0) => `rgba(104, 195, 176, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(145, 148, 150, ${opacity})`,
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    strokeWidth: 20,
    barPercentage: 0.7,
  };

  const screenWidth = Dimensions.get("window").width;
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-teal-500">
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        className="bg-teal-500 pt-4"
      >
        <ScrollView>
          {/* Profile */}
          <View className="opacity-2 w-full flex-row justify-between bg-teal-500">
            <View className="ml-4 flex-row">
              <View className="mr-3 flex items-center justify-center">
                <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-gray-50">
                  <Icon.User height="25" width="25" stroke="gray"></Icon.User>
                </TouchableOpacity>
                <View className="-mt-1 items-center justify-center rounded-md bg-gray-50 px-3">
                  <Text className="text-xs text-gray-600">Free</Text>
                </View>
              </View>
              <View>
                <Text className="text-sm font-bold text-white">
                  Hi, There!{" "}
                </Text>
                <Text className="text-sm text-white">Good Afternoon</Text>
              </View>
            </View>
            <View className="mr-4 flex-row items-center justify-center">
              <TouchableOpacity className="mr-3 rounded-full bg-[#90d4c7] p-1.5">
                <Icon.MessageSquare
                  height="20"
                  width="20"
                  stroke="white"
                ></Icon.MessageSquare>
              </TouchableOpacity>
              <TouchableOpacity className="rounded-full bg-[#90d4c7] p-1.5">
                <Icon.Flag height="20" width="20" stroke="white"></Icon.Flag>
              </TouchableOpacity>
            </View>
          </View>
          <View className="mx-2 mt-3 rounded-lg bg-white p-3">
            <View className="flex-row items-center">
              <Text className="mr-2 text-xs text-slate-600">
                Expense this August
              </Text>
              <Icon.EyeOff
                width="13"
                height="13"
                stroke="black"
                strokeWidth={4}
              ></Icon.EyeOff>
            </View>
            <View className="mt-2 flex-row items-center justify-between">
              <View className="flex-row">
                <Text className="mr-2 text-xl font-bold text-slate-600">
                  Rp 2,146,553
                </Text>
                <View className="flex items-center justify-center">
                  <Text className="rounded-full bg-amber-400 px-2 py-0.5 text-xs text-white">
                    0%
                  </Text>
                </View>
              </View>
              <TouchableOpacity className="mr-3 rounded-full bg-slate-50 p-1">
                <Icon.ChevronUp
                  height="20"
                  width="20"
                  stroke="#32D07B"
                  strokeWidth="3"
                ></Icon.ChevronUp>
              </TouchableOpacity>
            </View>
            <View className="mt-2 flex justify-start">
              <BarChart
                data={data}
                width={screenWidth - 70}
                height={160}
                chartConfig={chartConfig}
                verticalLabelRotation={0}
                withInnerLines={false}
                withHorizontalLabels={false}
              />
            </View>
            <View className="mr-6 mt-6 flex-row justify-between">
              <TouchableOpacity>
                <View className="w-8 rounded-full bg-[#dff3e6] p-2">
                  <FontAwesomeIcon
                    icon={faMoneyBill}
                    color="#4cae8e"
                    size={16}
                  />
                </View>
                <Text className="mt-3 text-xs text-slate-700">
                  Total Balances
                </Text>
                <Text className="text-sm font-bold text-slate-800">
                  Rp 5,970,158
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="w-8 rounded-full bg-[#eaf6f6] p-2">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    color="#78c2ad"
                    size={16}
                  />
                </View>
                <Text className="mt-3 text-xs text-slate-700">Saving</Text>
                <Text className="text-sm font-bold text-blue-500">
                  Start Saving
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="w-8 rounded-full bg-[#f3ebe6] p-2">
                  <FontAwesomeIcon icon={faWallet} color="#c2a288" size={16} />
                </View>
                <Text className="mt-3 text-xs text-slate-700">Your Wallet</Text>
                <Text className="text-sm font-bold text-slate-800">
                  2 Wallet
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="my-5 bg-slate-200">
            <View className="flex-row justify-between bg-white py-3">
              <View className="ml-5 rounded-full bg-blue-600 p-4">
                <Icon.Star width={28} height={28} stroke="yellow"></Icon.Star>
              </View>
              <View className="ml-3 flex-1">
                <Text className="mb-2 font-bold">Sribuu Premium</Text>
                <Text className="flex-wrap text-xs text-slate-600">
                  Get easy financial management with Sribuu Premium
                </Text>
              </View>
              <View className="mr-2 rounded-full p-4">
                <Icon.ChevronRight
                  width={28}
                  height={28}
                  stroke="black"
                  strokeWidth={2}
                ></Icon.ChevronRight>
              </View>
            </View>

            <View className="mt-2 flex-row items-center justify-between bg-white py-1">
              <View className="ml-5">
                <Icon.Send width={20} height={20} stroke="#6966d5"></Icon.Send>
              </View>
              <View className="ml-3 flex-1">
                <Text className="mb-2 font-bold">News from Sribuu</Text>
              </View>
              <View className="mr-2 rounded-full p-4">
                <Icon.ChevronUp
                  width={20}
                  height={20}
                  stroke="black"
                  strokeWidth={2}
                ></Icon.ChevronUp>
              </View>
            </View>
            <View className="mt-2 flex-row items-start justify-between bg-white py-1">
              <View className="m-5 flex-row items-start justify-between rounded-2xl border border-l-8 border-slate-200 border-l-pink-400 px-5 py-4">
                <Icon.Bell width={23} height={23} stroke="orange"></Icon.Bell>
                <View className="ml-3 flex-1">
                  <Text className="mb-2 font-bold">Payment Reminder</Text>
                  <Text className="mb-2 flex justify-center text-xs text-slate-600">
                    No Reminder Currently
                  </Text>
                </View>
                <Text>Detail</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
