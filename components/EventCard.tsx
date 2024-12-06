import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
  withTiming,
} from "react-native-reanimated";
import {
  FlingGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";

interface EventCardProps {
  item: any;
  index: number;
  dataLength: number;
  animatedValue: any;
  currentIndex: any;
  prevIndex: any;
  onPress: any;
}

const EventCard: React.FC<EventCardProps> = ({
  item,
  index,
  dataLength,
  animatedValue,
  currentIndex,
  prevIndex,
  onPress,
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [-30, 1, 30]
    );
    const translateY2 = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [-200, 1, 200]
    );
    const scale = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [0.9, 1, 1.1]
    );
    const opacity = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [1, 1, 0]
    );

    return {
      transform: [
        {
          translateX: index === prevIndex.value ? translateY2 : translateY,
        },
        { scale },
      ],
      opacity:
        index < currentIndex.value + 4 - 1
          ? opacity
          : index === currentIndex.value + 4 - 1
          ? withTiming(1)
          : withTiming(0),
    };
  });

  return (
    <FlingGestureHandler
      key="left"
      direction={Directions.LEFT}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (currentIndex.value !== 0) {
            animatedValue.value = withTiming((currentIndex.value -= 1));
            prevIndex.value = currentIndex.value - 1;
          }
        }
      }}
    >
      <FlingGestureHandler
        key="right"
        direction={Directions.RIGHT}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (currentIndex.value !== dataLength - 1) {
              animatedValue.value = withTiming((currentIndex.value += 1));
              prevIndex.value = currentIndex.value;
            }
          }
        }}
      >
        <Animated.View
          style={[
            styles.image,
            {
              zIndex: dataLength - index,
            },
            animatedStyle,
          ]}
        >
          <TouchableOpacity onPress={onPress} activeOpacity={1}>
            <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.titleText}>Razio Band Tour</Text>
                <Text style={styles.titleText}>Jakarta</Text>
              </View>
              <View
                style={[
                  styles.header,
                  {
                    marginBottom: 10,
                  },
                ]}
              >
                <Text style={styles.subtitleText}>World tour concert</Text>
                <Text style={styles.subtitleText}>12 December 2024</Text>
              </View>
              {/* <Animated.Image
                source={item.image}
                style={styles.cardImage}
                sharedTransitionTag="tag"
              /> */}
              <SharedElement id={`item.${index}.card`}>
                <Animated.Image source={item.image} style={styles.cardImage} />
              </SharedElement>
              <View
                style={[
                  styles.header,
                  {
                    marginTop: 10,
                  },
                ]}
              >
                <Text style={styles.subtitleText}>3412 people booking</Text>
                <Text style={styles.subtitleText}>243 ticket left</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    position: "absolute",
    borderRadius: 20,
    height: 510,
    width: 400,
  },
  container: {
    backgroundColor: "#e7e8e2",
    height: "100%",
    borderRadius: 20,
    padding: 10,
  },
  subtitleText: {
    color: "grey",
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
  },
  cardImage: {
    height: 400,
    width: "100%",
    borderRadius: 8,
  },
});
