import *  as React from 'react';
import { useState } from 'react';
import { ScrollView, Text, View , FlatList, StyleSheet, Image, Pressable, Animated, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchBar } from '@rneui/themed';


import Cart from './Cart';
import Notification from './Notification';
import { SafeAreaView } from 'react-native-safe-area-context';


const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);



// const Tab = createBottomTabNavigator();
const Home: React.FunctionComponent<SearchBarComponentProps> = () => {
  const [search, setSearch] = useState("");
  const [seeAllCategory, setSeeAllCategory] = useState(false);


  const prevImage1 = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1705174513487/2429e79d-0446-47d8-8f68-453ce76daa40.png'


  const updateSearch = (search) => {
    setSearch(search);
  };

  // user greeting
  const getGreeting =()=> {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
  
    let greeting;
    if (currentHour >= 5 && currentHour < 12) {
      greeting = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = 'Good afternoon';
    } else if (currentHour >= 18 && currentHour < 22) {
      greeting = 'Good evening';
    } else {
      greeting = 'Good night';
    }
    return greeting;
  }

  // all categories date
  const _allCategoriesData =[
    {
      id: '1',
      name: 'Pizza',
      image: <Image source={{uri: prevImage1}} style={styles.prevImage} />,
    },
    {
      id: '2',
      name: 'Burger',
      image: <Image source={{uri: prevImage1}} style={styles.prevImage} />,
    },
    {
      id: '3',
      name: 'Shawarmer',
      image: <Image source={{uri: prevImage1}} style={styles.prevImage} />,
    },
    {
      id: '4',
      name: 'Rice',
      image: <Image source={{uri: prevImage1}} style={styles.prevImage} />,
    },
    {
      id: '5',
      name: 'Snacks',
      image: <Image source={{uri: prevImage1}} style={styles.prevImage} />,
    },
    {
      id: '6',
      name: 'Wine',
      image: <Image source={{uri: prevImage1}} style={styles.prevImage} />,
    }
  ]
  // items to render or all categories flatlist
  const renderItem = ({ item }) => (
    <Pressable
      style={[
        styles.scrollImgContainer,
        // selectedEmployee.some((f) => f.id === item.id) && styles.selectedItem,
      ]}
      // onPress={() => togglePreview(item)}
    >
      <Text>{item.icon}</Text>
      <Text style={styles.scrollImgText}>{item.name}</Text>
    </Pressable>
  );
  
  const toggleSeeAllCategory = () => {
    setSeeAllCategory(!seeAllCategory);
  };

  return (
    <SafeAreaView>
    <View>
      <Text>Hey Edet,</Text><Text>{getGreeting()}</Text>
      <SearchBar
        ref={search => this.search = search}
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
    </View>
    <ScrollView>
    {/* all categories */}
      <View>
        <View style={styles.scrollHeaderContainer}>
          <Text style={styles.scrollHeaderText1}>
            All Categories
          </Text>
          <TouchableOpacity onPress={toggleSeeAllCategory}>
          <Text
          style={styles.scrollHeaderText2}
          >See All</Text>
          </TouchableOpacity>
        </View>
        <AnimatedFlatList
          showsHorizontalScrollIndicator={false}
          horizontal={!seeAllCategory}
          data={_allCategoriesData}
          // renderItem={({ item }) => <Item item={item} />}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          // style={[styles.flatList, { height: seeAllCategory? 'auto' : 50}]}
        />
      </View>


    </ScrollView>

    </SafeAreaView>
  );
}
export default Home



const styles = StyleSheet.create({
  body:{

  },
  view1:{

  },
  scrollImgContainer: {
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 7,
    marginHorizontal: 3,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderColor: "#ddd",
    borderRadius: 8,
    borderWidth: 1,
  },
  selectedItem: {
    backgroundColor: "#add8e6", // Light blue background for selected items
  },
})