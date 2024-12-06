import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { eventData, filters } from "@/constants/Strings";
import EventCard from "@/components/EventCard";
import { useSharedValue } from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "@/app/_layout";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootParamList,
  "Home"
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const animatedValue = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const prevIndex = useSharedValue(0);

  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const selectFilter = (filter: string) => {
    if (selectedFilter !== filter) {
      setSelectedFilter(filter);
    }
  };

  const navigateToDetail = (id: number) => {
    navigation.navigate("Detail", { id: id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="compass-outline" size={20} style={styles.headerIcon} />
        <Text style={styles.subtitleText}>Jakarta, Indonesia</Text>
      </View>
      <Text style={styles.titleText}>Hi Ikhsan Arfian Nugraha</Text>
      <Text style={styles.subtitleText}>
        Join us for unforgettable experience!
      </Text>
      <View style={styles.search}>
        <TextInput
          placeholder="Search..."
          style={styles.searchBar}
          placeholderTextColor="white"
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filter}
      >
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={styles.chip}
            onPress={() => selectFilter(filter)}
          >
            <Text
              style={[
                styles.chipText,
                selectedFilter === filter && styles.chipTextSelected,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <GestureHandlerRootView>
        {eventData.map((item, index) => {
          return (
            <EventCard
              item={item}
              index={index}
              dataLength={eventData.length}
              animatedValue={animatedValue}
              currentIndex={currentIndex}
              prevIndex={prevIndex}
              key={index}
              onPress={() => {
                navigateToDetail(index);
              }}
            />
          );
        })}
      </GestureHandlerRootView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  search: {
    paddingTop: 20,
    width: "100%",
  },
  searchBar: {
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 8,
    paddingHorizontal: 15,
    color: "white",
    fontSize: 16,
  },
  filter: {
    marginTop: 20,
    marginBottom: 30,
    flexGrow: 0,
  },
  chip: {
    margin: 5,
  },
  chipText: {
    color: "grey",
    fontSize: 18,
  },
  chipTextSelected: {
    color: Colors.primaryColor,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 70,
    backgroundColor: "black",
  },
  headerIcon: {
    color: "grey",
    marginRight: 5,
  },
  header: {
    marginBottom: 25,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  subtitleText: {
    fontSize: 16,
    color: "grey",
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
});
