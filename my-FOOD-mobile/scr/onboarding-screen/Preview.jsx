import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Home from '../pages/home/Home';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Preview = () => {
    const navigation = useNavigation();

    const DotComponent = ({ selected }) => {
    return (
        <View style={[styles.dotComponent, selected ? styles.dotActive : styles.dot]}>
            <View></View>
    
        </View>
    );
    };
        
    const prevImage1 = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1705174513487/2429e79d-0446-47d8-8f68-453ce76daa40.png'
    const prevImage2 = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1705174502067/2d67047c-67ab-4733-a5e3-b286b46031e8.png'
    //     const prevImage3 = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1705174521455/fece9b4f-2259-4350-983d-e48dca6afb04.png'
    return (
        <Onboarding
        onSkip = {() =>navigation.relace("Home")}
        onDone= {()=> navigation.replace('Home')}
        DotComponent={DotComponent}

        pages={[
            {
                backgroundColor: '#fff',
                image: <Image source={{uri: prevImage1}} style={styles.prevImage} />,
                title: 'All your favorites',
                subtitle: 'Get all your loved foods in one place, you just place the order. We do the rest',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={{uri: prevImage2}}style={styles.prevImage}/>,
                title: 'Order from your choosen chef',
                subtitle: 'Get all your loved foods in one place, you just place the order. We do the rest',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={{uri: prevImage2}}style={styles.prevImage} />,
                title: 'Free Delivery orders',
                subtitle: 'Get all your loved foods in one place, you just place the order. We do the rest',
            },
            
        ]}
        />
  )
}


const styles = StyleSheet.create({
//     body:{
//         flex: 1,
//     },
    prevImage:{
        // objectFit: 'contain',
        width: 200,
        height: 150
    },
    dot:{
        width:2,
        height: 2
    },
    dotComponent:{
        width: 4,
        height: 4,
        display:'flex',
        alignItems:'center',
        justifyContent:"center",
        padding: 3,
        margin: 3,
        borderRadius: 5,
        backgroundColor: 'blue'
    },
    dotActive:{
        borderRadius: 5,
        backgroundColor:'red',

    }
})

export default Preview








