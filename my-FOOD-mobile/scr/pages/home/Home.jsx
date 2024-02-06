import *  as React from 'react';
import { useState } from 'react';
import { ScrollView, Text, View , FlatList, StyleSheet, Image, Pressable, Animated, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchBar } from '@rneui/themed';
// import { _openResturantData, _categoriesFoodData, _allCategoriesData } from '../../components/FlatlistData';


import Cart from './Cart';
import Notification from './Notification';
import { SafeAreaView } from 'react-native-safe-area-context';



const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
// const Tab = createBottomTabNavigator();
const Home: React.FunctionComponent<SearchBarComponentProps> = () => {
  const [search, setSearch] = useState("");
  const {seeAllCategory, setSeeAllCategory} = useState(false);
  
  const prevImage1 = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1705174513487/2429e79d-0446-47d8-8f68-453ce76daa40.png'

  
  // all categories date
  const _allCategoriesData =[
   {
     id: '1',
     name: 'Pizza',
     image: <Image source={{uri: prevImage1}} style={styles.seeAllFlatlistImg} />,
    //  image: {prevImage1} style={styles.seeAllFlatlistImg},
   },
   {
     id: '2',
     name: 'Burger',
     image: <Image source={{uri: prevImage1}} style={styles.seeAllFlatlistImg}/>,
   },
   {
     id: '3',
     name: 'Shawarmer',
     image: <Image source={{uri: prevImage1}}  style={styles.seeAllFlatlistImg}/>,
   },
   {
     id: '4',
     name: 'Rice',
     image: <Image source={{uri: prevImage1}}  style={styles.seeAllFlatlistImg}/>,
   },
   {
     id: '5',
     name: 'Snacks',
     image: <Image source={{uri: prevImage1}} />,
   },
   {
     id: '6',
     name: 'Wine',
     image: <Image source={{uri: prevImage1}}  />,
   }
  ]

  // Available resturant suggestions data
  const _availableResturantData = [
    {
        id: "1",
        // icon:<Preview1/>,
        image: <Image source={{uri: prevImage1}} style={styles.prevImage} />,
        name: 'Chicken Republic',
        rating: '4.2',
        eta: '25min'
    },
    {
        id: "2",
        // icon: <Preview1/>,
        image: <Image source={{uri: prevImage1}} style={styles.prevImage} />,
        name: 'Killomanjaro',
        rating: '3.2',
        eta: '35min'
    },
    {
        id: "3",
        // icon:<Preview1/>,
        image: <Image source={{uri: prevImage1}} style={styles.prevImage} />,
        name: 'Chop-sticks',
        rating: '4.1',
        eta: '39min'
    },
    {
        id: "4",
        // icon: <Preview1/>,
        image: <Image source={{uri: prevImage1}} style={styles.prevImage} />,
        name: 'Coldstone',
        rating: '3.1',
        eta: '29min'
    },
]

  // search functionality
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


  // items to render or all categories flatlist
  const _seeAllCategories_renderItem = ({ item }) => (
    <Pressable
      style={[
        styles.scrollImgContainer,
        // styles.selectedItem,
      ]}
      // onPress={() => togglePreview(item)}
    >
      <Text style={styles.seeAllFlatlistImg}>{item.icon}</Text>
      <Text style={styles.scrollImgText}>{item.name}</Text>
    </Pressable>
  );

  const toggleSeeAllCategory = () => {
    setSeeAllCategory(!seeAllCategory);
  };

  // items to render for available resturant suggestions
  const _availableResturant_renderItem = ({item}) =>{
    <View>
      <Pressable
        style={[
          // styles.scrollImgContainer,
          // styles.selectedItem,
        ]}
      >
        {/* <Text>{item.icon}</Text> */}
        <Text>{item.name}</Text>
        <Text style={styles.scrollImgText}>{item.name}</Text>
      </Pressable>
      <View>
        <TouchableOpacity>{item.rating}</TouchableOpacity>
        <TouchableOpacity>{item.eta}</TouchableOpacity>
      </View>
    </View>
    }

  return (
    <SafeAreaView>
      {/* search bar */}
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
          renderItem={_seeAllCategories_renderItem}
          keyExtractor={(item) => item.id}
          // style={[styles.flatList, { height: seeAllCategory? 'auto' : 50}]}
        />
      </View>
      {/* <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={_availableResturantData}
          renderItem={_availableResturant_renderItem}
          keyExtractor={(item) => item.id}
        />
      </View> */}
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 7,
    marginHorizontal: 3,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderColor: "#ddd",
    borderRadius: 8,
    borderWidth: 1,
    // height: 60
  },
  selectedItem: {
    backgroundColor: "#add8e6", // Light blue background for selected items
  },
  seeAllFlatlistImg:{
    height: 40,
    width: 50,
    objectFit: 'contain',
    // backgroundColor:'black'
  },
  prevImage:{
    // objectFit: 'contain',
    width: 200,
    height: 150
},
})