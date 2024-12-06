import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "@/constants/Colors";
import { RootParamList } from "@/app/_layout";

type OnboardingScreenNavigationProp = NativeStackNavigationProp<
  RootParamList,
  "Onboarding"
>;

const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  return (
    <ImageBackground
      source={require("../assets/images/onboarding.jpg")}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.overlay}>
          <Text style={styles.labelText}>Mucicy.</Text>
          <Text style={styles.text}>
            The
            <Text style={styles.greenText}> rhythm</Text>
            {"\n"}of life with{"\n"}
            the
            <Text style={styles.greenText}> Music</Text>
            {"\n"}in your{"\n"}life.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.replace("Home");
            }}
          >
            <Text style={styles.buttonText}>Explore</Text>
            <Ionicons
              name="arrow-forward"
              size={20}
              color="black"
              style={styles.arrow}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 30,
    right: 30,
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  arrow: {
    marginLeft: 5,
  },
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  labelText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  greenText: {
    color: Colors.primaryColor,
    fontWeight: "500",
  },
  text: {
    color: "white",
    fontSize: 70,
  },
});

export default OnboardingScreen;
