import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { eventData } from "@/constants/Strings";
import Animated from "react-native-reanimated";
import { SharedElement } from "react-navigation-shared-element";

const DetailScreen = () => {
  const route = useRoute<any>();
  const { id } = route.params;

  const numericId = parseInt(id, 10);

  return (
    <View style={styles.container}>
      <SharedElement id={`item.${numericId}.card`}>
        <Animated.Image
          source={eventData[numericId].image}
          style={styles.image}
          sharedTransitionTag="tag"
        />
      </SharedElement>
      <Text style={styles.title}>Razio Band Tour</Text>
      <Text style={styles.subtitle}>Razio Band Tour</Text>
      <Text style={styles.description}>Razio Band Tour</Text>
    </View>
  );
};

// Define the shared element transitions
DetailScreen.sharedElements = (route: any) => {
  const { id } = route.params;
  return [`item.${id}.card`];
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  image: {
    height: 300,
    width: "100%",
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "grey",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "black",
    marginTop: 20,
  },
});
