import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Home from '../pages/home/Home';
import { t } from 'react-native-tailwindcss';

<View style={[t.absolute, t.inset0, t.p4, t.bgBlue500]} />
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const navigation = useNavigation();
 const Preview = () => {
    
    const DotComponent =({selected})=>{
        return(
            <View styles={styles.dotComponentotComponent}>
                <View></View>
            </View>
        )
    }

    const prevImage1 = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1705174513487/2429e79d-0446-47d8-8f68-453ce76daa40.png'
    const prevImage2 = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1705174502067/2d67047c-67ab-4733-a5e3-b286b46031e8.png'
    const prevImage3 = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1705174521455/fece9b4f-2259-4350-983d-e48dca6afb04.png'
    return (
        <Onboarding
        onSkip = {() =>navigation.replace('Home')}


        pages={[
            {
            backgroundColor: '#fff',
            image: <Image source={{uri: prevImage1}} 
                style={styles.prevImage}
                />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
            backgroundColor: '#fff',
            image: <Image source={{uri: prevImage2}} 
                style={styles.prevImage}
                />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
            backgroundColor: '#fff',
            image: <Image source={{uri: prevImage2}} 
                style={styles.prevImage}
                />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
            },
            
        ]}
        />
  )
}


const styles = StyleSheet.create({
    body:{
        flex: 1,
    },
    prevImage:{
        // objectFit: 'contain',
        width: 200,
        height: 150
    },
    dotComponent:{
        width: 4,
        height: 4,
        display:'flex',
        alignItems:'center',
        justifyContent:"center"
    },
})

export default Preview