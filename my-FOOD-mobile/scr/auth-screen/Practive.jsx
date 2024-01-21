import *  as React from 'react';
import { useState } from 'react';
import { ScrollView, Text, View , FlatList, StyleSheet, Image, Pressable, VirtualizedList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


// const Tab = createBottomTabNavigator();
export default function(){
  const [allFoodCategory, setAllFoodCategory] = useState([]);


  const prevImage1 = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1705174513487/2429e79d-0446-47d8-8f68-453ce76daa40.png'

  // all categories data
  const allCategories =[
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


  const togglePreview = (food) => {
    const index = allFoodCategory.findIndex((item) => item.id === food.id);
    if (index !== -1) {
      const updatedFood = [...allFoodCategory];
      updatedFood.splice(index, 1);
      setAllFoodCategory(updatedFood);
    } else {
      setAllFoodCategory([...allFoodCategory, food]);
    }
  };

  // items to render or all categories flatlist
  const renderItem = ({ item }) => (
    <Pressable
      style={[
        styles.scrollImgContainer,
        allFoodCategory.some((f) => f.id === item.id) && styles.selectedItem,
      ]}
      onPress={() => togglePreview(item)}
    >
      <Text>{item.icon}</Text>
      <Text style={styles.scrollImgText}>{item.name}</Text>
    </Pressable>
  );

  const renderRouteItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => togglePreview(item)}
      style={styles.scrollImgContainer}
    >
      <Text>{item.icon}</Text>
      <Text style={styles.scrollImgText}>{item.name}</Text>
      <TouchableOpacity>
        <Icon name="remove" size={20} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
  

  return (
    <SafeAreaView>
    <ScrollView>
    {/* all categories */}
      <View style={styles.scrollHeaderContainer}>
        <Text style={styles.scrollHeaderText1}>
          All Categories
        </Text>
        <Text style={styles.scrollHeaderText2}>See All</Text>
      </View>
        <View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={allCategories}
                // renderItem={({ item }) => <Item item={item} />}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />


            {selectedEmployee.length > 0 && (
                <View>
                  <Text style={styles.previewTitle}>Preview:</Text>
                  <FlatList
                    //  style={styles.scrollImgContainer}
                    data={allFoodCategory}
                    keyExtractor={(item) => item.id}
                    renderItem={renderRouteItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
            )}
        </View>

        <View>
            <View>
                <Text style={styles.scrollHeaderText1}>
                All Categories
                </Text>
            </View>
            <View>
                <View>

                </View>
            </View>
        </View>

    </ScrollView>

    </SafeAreaView>
  );
}




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

