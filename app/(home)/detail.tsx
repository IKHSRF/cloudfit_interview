import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { eventData } from "@/constants/Strings";
import Animated from "react-native-reanimated";
import { SharedElement } from "react-navigation-shared-element";
import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get("window");

const DetailScreen = () => {
  const route = useRoute<any>();
  const { id } = route.params;

  const numericId = parseInt(id, 10);

  return (
    // <View style={styles.container}>
    //   <SharedElement id={`item.${numericId}.card`}>
    //     <Animated.Image
    //       source={eventData[numericId].image}
    //       style={styles.image}
    //       sharedTransitionTag="tag"
    //     />
    //   </SharedElement>
    //   <Text style={styles.title}>Razio Band Tour</Text>
    //   <Text style={styles.subtitle}>Jakarta</Text>
    //   <Text style={styles.description}>About this concert</Text>
    // </View>

    <ImageBackground
      source={eventData[numericId].image}
      style={{
        flex: 1,
        height: height * 0.45,
        width: width,
      }}
    >
      <LinearGradient
        colors={["rgba(0, 0, 0, .02)", "rgba(0, 0, 0, .8)", "black"]}
        start={[0, 0]}
        end={[0, 1]}
        locations={[0, 0.2, 0.35]}
        style={[styles.gradient, { top: height * 0.2 }]}
      />
      {/* Text that will persist on top of the linear gradient */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Razio Band Tour</Text>
        <Text style={styles.subtitle}>Jakarta, 12 December 2024</Text>
        <Text style={styles.description}>About this concert</Text>
        <Text
          style={[
            styles.description,
            {
              color: "grey",
            },
          ]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Nulla facilisi. Curabitur auctor, dui eu vehicula elementum,
          odio felis vestibulum risus, in laoreet sem odio vel orci. In hac
          habitasse platea dictumst. Phasellus non velit nec nisl dapibus
          fermentum. Nunc pretium turpis ac libero volutpat, nec scelerisque
          felis vulputate. Sed suscipit turpis at felis placerat, non posuere
          lorem elementum.
        </Text>
      </View>
    </ImageBackground>
  );
};

// Define the shared element transitions
DetailScreen.sharedElements = (route: any) => {
  const { id } = route.params;
  return [`item.${id}.card`];
};

export default DetailScreen;

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    width: "100%",
    height: height * 0.8, // Apply gradient to bottom 50% of the screen
  },
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

  textContainer: {
    position: "absolute",
    top: height * 0.3, // Adjust this to position the text where you want it above the gradient
    zIndex: 1, // Ensures the text appears above the gradient
    padding: 15,
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    color: "grey",
  },
  description: {
    fontSize: 16,
    color: "white",
    marginTop: 20,
  },
});
