import * as React from 'react'
import { Image } from 'react-native'
import Home from '../pages/home/Home'

export {_openResturantData, _categoriesFoodData}

const prevImage1 = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1705174513487/2429e79d-0446-47d8-8f68-453ce76daa40.png'


const _openResturantData = [
    {
        id: "1",
        name: '',
        rating: '',
        eta: ''
    },
    {
        id: "2",
        name: '',
        rating: '',
        eta: ''
    },
    {
        id: "3",
        name: '',
        rating: '',
        eta: ''
    },
    {
        id: "4",
        name: '',
        rating: '',
        eta: ''
    },
    {
        id: "5",
        name: '',
        rating: '',
        eta: ''
    }
]


 // all categories date
 const _allCategoriesData =[
    {
      id: '1',
      name: 'Pizza',
      // image: <Image source={{uri: prevImage1}} style={styles.prevImage} />,
      image: {prevImage1},
    },
    {
      id: '2',
      name: 'Burger',
      image: <Image source={{uri: prevImage1}} />,
    },
    {
      id: '3',
      name: 'Shawarmer',
      image: <Image source={{uri: prevImage1}}/>,
    },
    {
      id: '4',
      name: 'Rice',
      image: <Image source={{uri: prevImage1}}  />,
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


const _categoriesFoodData = [
    {
        id: '1',
        icon: '',
        name: '',
        resturant: '',
        rating: '',
        eta: ''
    },
    {
        id: '2',
        icon: '',
        name: '',
        resturant: '',
        rating: '',
        eta: ''
    },
    {
        id: '3',
        icon: '',
        name: '',
        resturant: '',
        rating: '',
        eta: ''
    },
    {
        id: '4',
        icon: '',
        name: '',
        resturant: '',
        rating: '',
        eta: ''
    },
    {
        id: '5',
        icon: '',
        name: '',
        resturant: '',
        rating: '',
        eta: ''
    },
    {
        id: '6',
        icon: '',
        name: '',
        resturant: '',
        rating: '',
        eta: ''
    },
]