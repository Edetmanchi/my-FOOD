// import *  as React from 'react';
// import { useState } from 'react';
// import { Card } from 'react-native-paper';
// import { ScrollView, Text, View , FlatList, StyleSheet, Image, Pressable, VirtualizedList, TouchableOpacity} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';


// // const Tab = createBottomTabNavigator();
// export default function(){
//   const [allFoodCategory, setAllFoodCategory] = useState([]);
//   const [showAllItems, setShowAllItems] = useState(false);


//   const prevImage1 = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1705174513487/2429e79d-0446-47d8-8f68-453ce76daa40.png'

//   // all categories data
//   const allCategories =[
//     {
//       id: '1',
//       name: 'Pizza',
//       image: <Image source={{uri: prevImage1}} style={styles.prevImage} />,
//     },
//     {
//       id: '2',
//       name: 'Burger',
//       image: <Image source={{uri: prevImage1}} style={styles.prevImage} />,
//     },
//     {
//       id: '3',
//       name: 'Shawarmer',
//       image: <Image source={{uri: prevImage1}} style={styles.prevImage} />,
//     },
//     {
//       id: '4',
//       name: 'Rice',
//       image: <Image source={{uri: prevImage1}} style={styles.prevImage} />,
//     },
//     {
//       id: '5',
//       name: 'Snacks',
//       image: <Image source={{uri: prevImage1}} style={styles.prevImage} />,
//     },
//     {
//       id: '6',
//       name: 'Wine',
//       image: <Image source={{uri: prevImage1}} style={styles.prevImage} />,
//     }
//   ]


//   const togglePreview = (food) => {
//     const index = allFoodCategory.findIndex((item) => item.id === food.id);
//     if (index !== -1) {
//       const updatedFood = [...allFoodCategory];
//       updatedFood.splice(index, 1);
//       setAllFoodCategory(updatedFood);
//     } else {
//       setAllFoodCategory([...allFoodCategory, food]);
//     }
//   };

//   // items to render or all categories flatlist
//   const renderItem = ({ item }) => (
//     <Pressable
//       style={[
//         styles.scrollImgContainer,
//         allFoodCategory.some((f) => f.id === item.id) && styles.selectedItem,
//       ]}
//       onPress={() => togglePreview(item)}
//     >
//       <Text>{item.icon}</Text>
//       <Text style={styles.scrollImgText}>{item.name}</Text>
//     </Pressable>
//   );

//   const renderRouteItem = ({ item }) => (
//     <TouchableOpacity
//       onPress={() => togglePreview(item)}
//       style={styles.scrollImgContainer}
//     >
//       <Text>{item.icon}</Text>
//       <Text style={styles.scrollImgText}>{item.name}</Text>
//       <TouchableOpacity>
//         <Icon name="remove" size={20} color="red" />
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );
//   const toggleShowAllItems =() =>{
//     setShowAllItems(!showAllItems)
//   }

//   return (
//     <SafeAreaView>
//     <ScrollView>
//     {/* all categories */}
//       <TouchableOpacity style={styles.scrollHeaderContainer}>
//         <Text style={styles.scrollHeaderText1}>
//           All Categories
//         </Text>
//         <Text onPress={toggleShowAllItems}
//         style={styles.scrollHeaderText2}>See All</Text>
//       </TouchableOpacity>
//         <View>
//             <FlatList
//                 showsHorizontalScrollIndicator={false}
//                 horizontal={true}
//                 data={allCategories}
//                 // renderItem={({ item }) => <Item item={item} />}
//                 renderItem={renderItem}
//                 keyExtractor={(item) => item.id}
//             />

//             {allFoodCategory.length > 0 && (
//                 <View>
//                   <Text style={styles.previewTitle}>Preview:</Text>
//                   <FlatList
//                     //  style={styles.scrollImgContainer}
//                     data={allFoodCategory}
//                     keyExtractor={(item) => item.id}
//                     renderItem={renderRouteItem}
//                     horizontal={true}
//                     showsHorizontalScrollIndicator={false}
//                   />
//                 </View>
//             )}
//         </View>

//         <View>
//             <View>
//                 <Text style={styles.scrollHeaderText1}>
//                 All Categories
//                 </Text>
//             </View>
//             <View>
//                 <View>
//                 <Card>
//                         <Card.Content>
//                         <Text variant="titleLarge">Card title</Text>
//                         <Text variant="bodyMedium">Card content</Text>
//                         </Card.Content>
//                     </Card>

//                 </View>
//             </View>
//         </View>

//     </ScrollView>

//     </SafeAreaView>
//   );
// }




// const styles = StyleSheet.create({
//   body:{

//   },
//   view1:{

//   },
//   scrollImgContainer: {
//     // flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginVertical: 7,
//     marginHorizontal: 3,
//     paddingVertical: 8,
//     paddingHorizontal: 10,
//     borderColor: "#ddd",
//     borderRadius: 8,
//     borderWidth: 1,
//   },
//   selectedItem: {
//     backgroundColor: "#add8e6",
//   },
//     scrollHeaderContainer:{
//         display: 'flex',
//         flexDirection:'row',
//         gap: 20,
//         marginVertical: 30,
//         marginHorizontal: 20
//     }
// })






import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default function () {
  const [expanded, setExpanded] = useState(false);

  const data = [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
    { id: '4', text: 'Item 4' },
    { id: '5', text: 'Item 5' },
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
    { id: '4', text: 'Item 4' },
    { id: '5', text: 'Item 5' },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.text}</Text>
      <Text>this is a flatlist item</Text>
    </View>
  );

 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>See All</Text>
        <TouchableOpacity onPress={toggleExpansion}>
          <Text style={styles.seeAllButton}>{expanded ? 'Collapse' : 'Expand'}</Text>
        </TouchableOpacity>
      </View>
      <AnimatedFlatList
        data={data}
        horizontal={!expanded} // Toggle horizontal scrolling based on the expanded state
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={[styles.flatList, { height: expanded ? 'auto' : 50}]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllButton: {
    color: 'blue',
  },
  flatList: {
    flexGrow: 0,
    // flexDirection: 'column',
    
  },
  item: {
    padding: 16,
    marginHorizontal: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20 
  },
});
